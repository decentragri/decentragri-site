import HeaderThree from "@/layouts/headers/HeaderThree"
import Breadcrumb from "../common/Breadcrumb"
import AboutArea from "./AboutArea"
import TeamArea from "../pages/teams/team/TeamArea"
import FooterTwo from "@/layouts/footers/FooterTwo"

const About = () => {
   return (
      <div className="ac-page-wrapper">
         <HeaderThree />
         <div className="smooth-wrapper">
            <div id="smooth-content">
               <Breadcrumb title="About Decentragri" sub_title="About" />
               <AboutArea />
               <TeamArea />

            </div>
         </div>
         <FooterTwo />
      </div>
   )
}

export default About
