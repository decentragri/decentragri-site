import HeaderThree from "@/layouts/headers/HeaderThree"
import Breadcrumb from "../common/Breadcrumb"
import ContactArea from "./ContactArea"
import FooterTwo from "@/layouts/footers/FooterTwo"

const Contact = () => {
   return (
      <div className="ac-page-wrapper">
         <HeaderThree />
         <div className="smooth-wrapper">
            <div id="smooth-content">
               <Breadcrumb title="Get in Touch With Us" sub_title="Contact" />
               <ContactArea />
            </div>
         </div>
         <FooterTwo />
      </div>
   )
}

export default Contact
