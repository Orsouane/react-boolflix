import { animate, stagger } from "motion"
import { splitText } from "motion-plus"
import { useEffect, useRef } from "react"

export default function SplitText() {
     const containerRef = useRef(null)
     const offset = window.innerWidth < 600 ? 570 : window.innerWidth < 1024 ? 1100 : 650;
     useEffect(() => {
          document.fonts.ready.then(() => {
               if (!containerRef.current) return

               containerRef.current.style.visibility = "visible"

               const { words } = splitText(containerRef.current.querySelector("h1"))

               words.forEach(word => {
                    word.classList.add(
                         "text-[2rem]",
                         "sm:text-6xl",
                         "text-center",
                         "bg-gradient-to-r",
                         "from-red-400",
                         "via-red-100",
                         "to-red-300",
                         "bg-clip-text",
                         "text-transparent",
                         "inline-block",
                         "mr-1",
                         
                    
                    )
               })

               animate(
                    words,
                    { opacity: [0, 1], y: [10, 0] },
                    {
                         type: "spring",
                         duration: 2,
                         bounce: 0,
                         delay: stagger(0.05),
                    }
               )
          })
     }, [])

     return (
          <div className="container flex flex-col  h-[650px] md:h-[1200px] lg:h-[730px] " ref={containerRef} >

               <h1 className="h1 flex items-center  ">
            Film, serie TV e tanto altro, senza limiti 
              </h1>
               <div className='border border-red-800  sm:w-48 sm:text-xl w-fit p-2 rounded-xl text-sm mt-10 cursor-pointer' onClick={() => window.scrollBy({ top: offset, behavior: 'smooth' })}>Tendenza <span className="animate-pulse"> 🔥</span></div>
               <Stylesheet />
          </div>
     )
}

function Stylesheet() {
     return (
          <style>{`
      .container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        max-width: 700px;
        text-align: center;
        visibility: hidden;
        padding-bottom:10px
      }
      .split-word {
        will-change: transform, opacity;
      }
    `}</style>
     )
}
