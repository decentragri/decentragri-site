
import coco from "@/assets/images/about/coco_about.png"
import cow from "@/assets/images/about/cow_about.png"
import field from "@/assets/images/about/field_about.png"
import trevin from "@/assets/images/about/trevin_round.png"

import Image from "next/image"
const AboutArea = () => {
   return (
      <section className="about-section pt-120 pb-65">
         <div className="container">
            <div className="row">
               <div className="col-xl-7">
                  <div className="about-image-box mb-25">
                     <div className="row">
                        <div className="col-lg-12">
                           <Image src={cow} className="mb-25 wow fadeInDown" alt="about image" />
                        </div>
                        <div className="col-lg-6">
                           <Image src={field} className="mb-25 wow fadeInUp" alt="about image" />
                        </div>
                        <div className="col-lg-6">
                           <Image src={coco} className="mb-25 wow fadeInUp" alt="about image" />
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-xl-5">
                  <div className="section-content-box about-one_content-box wow fadeInRight">
                     <div className="section-title mb-50">
                        <h2>A Message from Our Founder</h2>
                     </div>
                     <p>
                        At DecentrAgri, our mission is simple yet profound: to make the daily lives of farmers easier and more efficient through the power of technology.<br /><br />
                        By enabling farmers to access real-time, actionable data with just a single click, we aim to remove complexity and empower better decision-making at every step.<br /><br />
                        We believe that innovation and nature are not opposing forces, but partners.<br /><br />
                        Our commitment is to continue developing technologies that not only simplify and enhance everyday agricultural work, but also actively contribute to preserving our environment.<br /><br />
                        We envision a future where humanity’s ingenuity and the Earth&apos;s resilience coexist in harmony, enriching lives today and securing a better tomorrow for generations to come.
                     </p>


                     <div className="author-card d-flex align-items-center justify-content-between">
                        <div className="author-thumb-item d-flex align-items-center">
                           <div className="thumb">
                              <Image src={trevin} alt="Author image" />
                           </div>
                           <div className="content">
                              <h5>Trevin Olegario</h5>
                              <span className="position">CEO, DecentrAgri</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default AboutArea
