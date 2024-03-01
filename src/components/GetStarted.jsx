import { socialMedia } from "../constants"

const GetStarted = () => {
  return (
        <div className="flex sm:flex-col gap-4 flex-row md:mt-0 mt-6 sm:border-l-[2px] sm:pl-4">
          {socialMedia.map((social, index) => (
            <a href={social.link} target="_blank"><img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer hover:transition-all hover:w-[25px] hover:h-[25px]${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
            /></a>
          ))}
        </div>
      
  )
}

export default GetStarted