import { useEffect, useRef } from "react";
import {gsap} from "gsap";

const Customcursour = () => {
    const cursorref = useRef( )
    const cursorborderef = useRef(null)

    const ismobile = typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches

    if(ismobile){
        return null
    }
    useEffect(()=>{
        const cursor = cursorref.current
        const cursorborder = cursorborderef.current

        //cursor position
        gsap.set([cursor,cursorborder],{
            xPercent: -50,
            yPercent: -50,
        })
        const xto = gsap.quickTo(cursor,"x",{
            duration:0.2, ease:"power3.out"
        })
        const yto = gsap.quickTo(cursor,"y",{
            duration:0.2, ease:"power3.out"
        })
        const xtoborder = gsap.quickTo(cursorborder,"x",{
            duration:0.5, ease:"power3.out"
        })
        const ytoborder = gsap.quickTo(cursorborder,"y",{
            duration:0.5, ease:"power3.out"
        })
        //Movecursor handle
        const handlemouse = (e)=>{
            xto(e.clientX)
            yto(e.clientY)
            xtoborder(e.clientX)
            ytoborder(e.clientY)

        }
        //add the event 
        window.addEventListener("mousemove", handlemouse)

        //add click animation
        document.addEventListener("mousedown", ()=>{
            gsap.to([cursor,cursorborder],{
                scale:0.6,
                duration:0.2,
            })
        })
        document.addEventListener("mouseup",()=>{
            gsap.to([cursor,cursorborder],{
                scale:1,
                duration:0.2,
            })
        })
    },[])

  return (
    <>
    <div
    ref={cursorref}
     className="fixed top-0 left-0 w-[20px] h-[20px] bg-white rounded-full pointer-events-none z-[999] mix-blend-difference"/>
     <div
     ref={cursorborderef}
     className="fixed top-0 left-0 w-[40px] h-[40px] border rounded-full border-white pointer-events-none z-[999] mix-blend-difference opacity-50"
     />
     </>
  )
}

export default Customcursour