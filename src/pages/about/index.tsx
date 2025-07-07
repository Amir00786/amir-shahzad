
import profile from "../../assets/profile.png";

export const About = () => {
    return (
        <div className='md:py-20 sm:py-12 py-8'>
            <div className="flex flex-wrap -mx-3 items-center justify-center">
                <div className="w-full sm:w-[50%] md:w-[40%] lg:w-[30%] px-3 flex justify-center">
                    <div className="relative w-full max-w-[320px] h-40 sm:h-52 lg:h-72 rounded-4xl bg-orange-400/10">
                        <div className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] xl:w-[350px] xl:h-[350px] rounded-full bg-orange-500">
                            <img
                                src={profile}
                                alt="profile"
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>
                    </div>
                </div>

                <div className="lg:w-[70%] w-full px-3">
                    <div className="bg-white rounded-2xl p-6">
                        <div className="flex items-center gap-2">
                            <div className="w-12 h-12 bg-orange-500 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}