import { Github, Linkedin } from "lucide-react"

export const Footer = () => {
  return (
    <div className="py-12 bg-transparent border-t border-stone-900 dark:bg-orange-500 transition-colors duration-300" data-aos="fade-up" data-aos-duration="2000">
        <div className="flex justify-center items-center">
          <ul className="flex items-center gap-x-4">
            <li>
              <a href='https://github.com/Amir00786' target="_blank" className="text-gray-900 dark:text-white hover:text-orange-600 dark:hover:text-orange-300 transition-colors">
                <Github className="w-16 h-16" />
              </a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/amir-shahzad-222776249' target="_blank" className="text-gray-900 dark:text-white hover:text-orange-600 dark:hover:text-orange-300 transition-colors">
                <Linkedin className="w-16 h-16" />
              </a>
            </li>
        </ul>
      </div>
    </div>
  )
}