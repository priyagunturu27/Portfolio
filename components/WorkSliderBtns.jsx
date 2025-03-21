'use client'

import { useSwiper } from "swiper/react"
import {PiCaretLeftBold, PiCaretRightBold} from 'react-icons/pi'




const WorkSliderBtns = ({containerStyles,btnStyles,projects,project}) => {
  const swiper = useSwiper()
 console.log(project.num)
 console.log(projects.length.toString())
  return (
    <div className={containerStyles }>
      <button className={`${btnStyles} ${project.num==='01' ? 'disabled:bg-[#40382f] disabled:opacity-50':''}`} onClick={()=>{swiper.slidePrev()}} disabled={project.num==='01'}>
        <PiCaretLeftBold/>
      </button>

      <button className={`${btnStyles} ${project.num[1]===projects.length.toString() ? 'disabled:bg-[#40382f] disabled:opacity-50' : ''}`} onClick={()=>{swiper.slideNext()}} disabled={project.num[1]===projects.length.toString()}>
        <PiCaretRightBold/>
      </button>
    </div>
  )
}

export default WorkSliderBtns
