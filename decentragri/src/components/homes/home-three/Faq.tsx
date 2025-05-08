"use client"
import Image from "next/image"
import { useState } from "react"
import faq_data from "@/data/FaqData"
import faq_thumb from "@/assets/images/gallery/rice_road.png"


const Faq = () => {

   const [activeId, setActiveId] = useState<number>(faq_data[0].id);

   return (
      <section className="faqs-section pt-80 pb-70">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-xl-5">
                  <div className="faq-image-box mb-50 wow fadeInLeft">
                     <Image src={faq_thumb} alt="faq image" />
                  </div>
               </div>
               <div className="col-xl-7">
                  <div className="section-content-box mb-50 pl-xl-45 wow fadeInRight">
                     <div className="section-title mb-50">
                        <h2>Frequently Asked Questions</h2>
                     </div>
                     <div className="accordion" id="accordionTwo">
                        {faq_data.filter((items) => items.page === "home_3").map((item) => (
                           <div key={item.id} className="accordion-card style-two mb-15">
                              <div className="accordion-header">
                                 <h6 onClick={() => setActiveId(item.id)} className={`accordion-title ${activeId === item.id ? "" : "collapsed"}`} >
                                    {item.quesstion}
                                 </h6>
                              </div>
                              <div id="collapse4" className={`accordion-collapse collapse ${activeId === item.id ? "show" : ""}`}>
                                 <div className="accordion-content">
                                    <p>{item.answer}</p>
                                 </div>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Faq
