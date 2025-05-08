import Hero from "./Hero"
import Cause from "./Cause"
import WorkArea from "./WorkArea"
import Faq from "./Faq"
import FooterTwo from "@/layouts/footers/FooterTwo"
import HeaderThree from "@/layouts/headers/HeaderThree"

const HomeThree = () => {
   return (
      <div className="home-three">
         <div className="ac-page-wrapper">
            <HeaderThree />
            <div className="smooth-wrapper">
               <div className="smooth-content">
                  <Hero />
                  <Cause />
                  {/* <Avatar /> */}
                  {/* <AiVoiceover /> */}
                  <WorkArea />
                  {/* <VideoTemplate />
                  <Feature /> */}
                  <Faq />
               </div>
            </div>
            <FooterTwo />
         </div>
      </div>
   )
}

export default HomeThree
