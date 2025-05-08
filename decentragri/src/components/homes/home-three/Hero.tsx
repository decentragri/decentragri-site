import Image from "next/image"
import Link from "next/link"

import thumb from "@/assets/images/hero/hero1.png"

const Hero = () => {
   return (
      <section className="hero-section">
         <div className="hero-wrapper-three bg_cover"
            style={{ backgroundImage: "url(/assets/images/hero/hero-bg-3.png)" }}>
            <div className="container">
               <div className="row">
                  <div className="col-xl-5">
                     <div className="hero-content mb-50 pt-15">
                        <h1 className="heading-title wow fadeInDown">Decentragri is transforming agri-finance
                        </h1>
                        <p className="wow fadeInUp"> Empowering local farmers, verifying sustainable practices, and unlocking
                        global market access through decentralized technology.</p>
                        <ul className="circle-list style-one mb-65 wow fadeInDown">
                           {/* <li>Get natural sounding AI voices in 120+ languages</li>
                           <li>Make your videos more engaging with 140+ AI Avatars</li>
                           <li>Edit as simply as a slide-deck, no experience required</li> */}
                        </ul>
                        <div className="hero-button wow fadeInUp">
                           <Link href="https://decentragri.gitbook.io/decentragri.com" className="theme-btn style-one">Learn More </Link>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-7">
                     <div className="hero-one_image-box wow fadeInRight">
                        <Image src={thumb} alt="Hero Image" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Hero
