// import { useEffect, useRef } from 'react'
// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
import About from './About'
import Privacy from './Privacy'

// gsap.registerPlugin(ScrollTrigger)

export default function HorizontalScroll() {
  // const pinContainerRef = useRef(null)
  // const scrollTrackRef = useRef(null)

  // useEffect(() => {
  //   const pinContainer = pinContainerRef.current
  //   const scrollTrack = scrollTrackRef.current

  //   if (!pinContainer || !scrollTrack) return

  //   const scrollTween = gsap.to(scrollTrack, {
  //     xPercent: -100 * (scrollTrack.children.length - 1),
  //     ease: 'none',
  //     scrollTrigger: {
  //       trigger: pinContainer,
  //       pin: true,
  //       scrub: 1,
  //       end: () => `+=${(scrollTrack.offsetWidth - window.innerWidth) * 2}`,
  //       invalidateOnRefresh: true,
  //     }
  //   })

  //   // Kill animation on mobile
  //   ScrollTrigger.matchMedia({
  //     "(max-width: 900px)": function() {
  //       if (scrollTween) scrollTween.kill()
  //     }
  //   })

  //   return () => {
  //     scrollTween.kill()
  //     ScrollTrigger.getAll().forEach(trigger => trigger.kill())
  //   }
  // }, [])

  return (
    <main>
      <About />
      {/* <Privacy /> */}
    </main>
  )

  // return (
  //   <main ref={pinContainerRef} className="h-screen w-screen overflow-hidden md:block">
  //     <div ref={scrollTrackRef} className="h-screen flex will-change-transform md:flex-row flex-col md:overflow-hidden overflow-visible">
  //       <About />
  //       <Privacy />
  //     </div>
  //   </main>
  // )
}
