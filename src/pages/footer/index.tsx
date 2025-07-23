import { Github, Linkedin } from "lucide-react"

export const Footer = () => {
  return (
    <div className="py-12 bg-orange-500/70" data-aos="fade-up" data-aos-duration="2000">
        <div className="flex justify-center items-center">
          <ul className="flex items-center gap-x-4">
            <li>
              <a href='https://github.com/Amir00786' target="_blank">
                <Github className="w-16 h-16" />
              </a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/amir-shahzad-222776249' target="_blank">
                <Linkedin className="w-16 h-16" />
              </a>
            </li>
        </ul>
      </div>
    </div>
  )
}