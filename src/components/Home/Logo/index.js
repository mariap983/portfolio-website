import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import LogoM from '../../../assets/images/logo-mp.png'
import './index.scss'

const Logo = () => {
    const bgRef = useRef()
    const outlineLogoRef = useRef()
    const solidLogoRef = useRef()

    useEffect(() => {
        gsap.registerPlugin(DrawSVGPlugin)
    
        gsap.timeline()
          .to(bgRef.current, {
            duration: 1,
            opacity: 1,
          })
          .from(outlineLogoRef.current, {
            drawSVG: 0,
            duration: 20,
          })
    
        gsap.fromTo(
          solidLogoRef.current,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            delay: 4,
            duration: 4,
          }
        )
      }, [])

    return (
      <div className="logo-container" ref={bgRef}>
        <img 
          className="solid-logo"
          ref={solidLogoRef} 
          src={LogoM} 
          alt="M" 
        />

        <svg 
          id="aa82db98-2a42-4efe-88e6-11957655832e" 
          data-name="Layer 1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 542.3 369.33"
        >             
          <path  
            ref={outlineLogoRef}
            className="svg-container"
            transform="translate(-11.06 -272.82)" 
            fill="none" 
            d="M414.83,273.22H413v-.16l-91.44,0-.17.15H309l-80.67,82.12-16.16,14.26L102.5,272.82l-91.44,0V641.94h0v.21H102.5V425.71L212,507.27l0,0,.05,0,109.48-81.56V642.15H413V275.33Z M514,389.78c-30.25-41.74-81.18-39.07-84.31-38.85H386.29l.41,193c8,.11,19.4.19,33.06,0,25.67-.36,31.29-1.27,35.13-2.07A98.25,98.25,0,0,0,490,527c23.46-16.24,32.38-39.21,34.71-45.46S543.08,429.92,514,389.78Zm-24.7,73.43a44.63,44.63,0,0,1-16.07,21.05A45.43,45.43,0,0,1,457,491.14c-1.77.37-4.37.79-16.25,1-6.33.09-11.59,0-15.31,0q-.09-44.67-.19-89.33H445.3c1.45-.1,25-1.34,39,18C497.78,439.33,490.37,460.32,489.29,463.21Z M536.13,389.78C505.88,348,455,350.71,451.82,350.93H408.43l.41,193c8,.11,19.4.19,33.06,0,25.68-.36,31.29-1.27,35.13-2.07A98.25,98.25,0,0,0,512.16,527c23.46-16.24,32.38-39.21,34.71-45.46S565.22,429.92,536.13,389.78Zm-24.7,73.43a44.66,44.66,0,0,1-16.06,21.05,45.62,45.62,0,0,1-16.26,6.88c-1.78.37-4.38.79-16.26,1-6.33.09-11.59,0-15.31,0q-.09-44.67-.19-89.33h20.09c1.45-.1,25-1.34,39,18C519.92,439.33,512.51,460.32,511.43,463.21Z M352.88,273,243.47,369.57,133.82,272.82l-91.44,0V641.94h91.44V425.5L243,506.85l.36.42,109.49-81.56V642.15h91.44V273.06Z" 
          />     
        </svg>
      </div>
    )
}

export default Logo