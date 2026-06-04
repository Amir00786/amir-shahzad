import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

interface Blob {
    x: string[];
    y: string[];
    sizeFactor: number;
    duration: number;
    strokeColor: string;
    strokeWidth: number;
}

export const WaterBackground = () => {
    const { theme } = useTheme();

    // Generate random values within range
    const randomRange = (min: number, max: number) => Math.random() * (max - min) + min;

    // Number of animated water ripples
    const blobCount = 18;

    // Memoize blobs config so they remain stable across re-renders
    const blobs = useMemo<Blob[]>(() => {
        return Array.from({ length: blobCount }).map((_, index) => {
            // Colors: mix of light blue/cyan and white ripples
            const isCyan = index % 2 === 0;
            const strokeColor = isCyan
                ? 'rgba(14, 165, 233, 0.18)' // sky-500 tint
                : 'rgba(255, 255, 255, 0.4)';  // white highlight tint

            return {
                // Keyframe arrays for organic, flowing movement across the screen bounds
                x: [
                    `${randomRange(-15, 115)}%`,
                    `${randomRange(-15, 115)}%`,
                    `${randomRange(-15, 115)}%`
                ],
                y: [
                    `${randomRange(-15, 115)}%`,
                    `${randomRange(-15, 115)}%`,
                    `${randomRange(-15, 115)}%`
                ],
                sizeFactor: randomRange(0.6, 2.0),
                duration: randomRange(30, 65), // slow, calm movement
                strokeColor,
                strokeWidth: randomRange(2, 6)
            };
        });
    }, []);

    // Color definitions for dark mode caustics
    const darkBlobs = useMemo(() => {
        return blobs.map((blob, index) => {
            const isOrange = index % 2 === 0;
            const strokeColor = isOrange
                ? 'rgba(249, 115, 22, 0.12)' // orange-500 tint for dark theme contrast
                : 'rgba(255, 255, 255, 0.18)'; // white highlight tint for dark mode

            return {
                ...blob,
                strokeColor
            };
        });
    }, [blobs]);

    const activeBlobs = theme === 'dark' ? darkBlobs : blobs;

    return (
        <div className="fixed inset-0 w-full h-full pointer-events-none z-0 bg-background transition-colors duration-500 overflow-hidden" aria-hidden="true">
            {/* SVG Displacement Filter to warp circular outlines into organic water ripples */}
            <svg width="0" height="0" className="absolute">
                <defs>
                    <filter id="water-displacement">
                        {/* Generate organic noise texture */}
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency="0.006"
                            numOctaves="3"
                            result="noise"
                        />
                        {/* Distort coordinates using noise red & green channels */}
                        <feDisplacementMap
                            in="SourceGraphic"
                            in2="noise"
                            scale="120"
                            xChannelSelector="R"
                            yChannelSelector="G"
                        />
                    </filter>
                </defs>
            </svg>

            {/* Ripple SVG canvas */}
            <svg className="absolute w-full h-full overflow-visible opacity-70 dark:opacity-85">
                <g filter="url(#water-displacement)">
                    {activeBlobs.map((blob, index) => (
                        <motion.circle
                            key={index}
                            initial={{ cx: blob.x[0], cy: blob.y[0] }}
                            animate={{ cx: blob.x, cy: blob.y }}
                            transition={{
                                duration: blob.duration,
                                repeat: Infinity,
                                repeatType: "mirror",
                                ease: "easeInOut"
                            }}
                            r={blob.sizeFactor * 130} // Ripple size radius
                            fill="none"
                            stroke={blob.strokeColor}
                            strokeWidth={blob.strokeWidth}
                            strokeLinecap="round"
                        />
                    ))}
                </g>
            </svg>
        </div>
    );
};
