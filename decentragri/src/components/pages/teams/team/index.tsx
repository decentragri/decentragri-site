import Breadcrumb from "@/components/common/Breadcrumb"
import TeamArea from "./TeamArea"
import FooterTwo from "@/layouts/footers/FooterTwo"
import HeaderThree from "@/layouts/headers/HeaderThree"

const Team = () => {
   return (
      <div className="ac-page-wrapper">
         <HeaderThree />
         <div className="smooth-wrapper">
            <div id="smooth-content">
               <Breadcrumb title="About" sub_title="About" />
               <TeamArea />
            </div>
         </div>
         <FooterTwo />
      </div>
   )
}

export default Team
