import HeaderOne from "@/layouts/headers/HeaderOne"


import Breadcrumb from "@/components/common/Breadcrumb"
import FooterTwo from "@/layouts/footers/FooterTwo"
import Cta from "@/components/common/Cta"

const UseCases = () => {
   return (
      <div className="ac-page-wrapper">
         <HeaderOne style={true} />
         <div className="smooth-wrapper">
            <div id="smooth-content">
               <Breadcrumb title="Use Causes" sub_title="Use Causes" />



               <Cta />
            </div>
         </div>
         <FooterTwo />
      </div>
   )
}

export default UseCases
