import { ICON, ICON_FALLBACK, NAME } from "@/config"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import SocialMedia from "../social/SocialMedia"
const Hero = () => {
  return (
    <header className="px-12 py-12 ">
        <Avatar className="w-32 h-32 mb-6">
            <AvatarImage src={ICON}  fetchPriority="high" alt={`${NAME} picture`}/>
            <AvatarFallback>{ICON_FALLBACK}</AvatarFallback>
        </Avatar>
        <div className="animate-fade-in-down mb-2">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-gray-100">{NAME}</h1>
          <h2 className="text-base md:text-lg">Software Developer</h2>
        </div>
        <div className="animate-fade-in-up">
          <p className="text-lg md:text-xl max-w-prose text-left text-gray-500 dark:text-gray-400">
            I'm a software developer specialized in frontend and backend development for complex scalable web apps. I
            write about software development on my blog. Want to know how I may help your project? Check out my project
            portfolio and online resume.
          </p>
        </div>
          <SocialMedia/>
    </header>
  )
}

export default Hero