"use client"
import Image, { StaticImageData } from "next/image"
import { useState } from "react";
import Link from "next/link";


import thumb1 from "@/assets/images/hero/hero2.png"
import thumb2 from "@/assets/images/hero/hero3.png"
import thumb3 from "@/assets/images/hero/hero4.png"
import shape from "@/assets/images/shape/use-shape-1.png"


const tab_title: string[] = ["Smart Monitoring", "AI-Driven Insights", "Transparent Data"];

interface DataType {
   id: number;
   title: string;
   desc: string;
   avatar?: StaticImageData;
   thumb: StaticImageData;
   name?: string;
   designation?: string;
}

const cause_data: DataType[] = [
   {
      id: 0,
      title: "The future of agriculture is real-time, AI-driven, and on-chain.",
      desc: `Decentragri is building a new layer of intelligence for farms. Our sensors gather field data continuously. AI interprets it instantly. And our blockchain-backed platform ensures every insight is tamper-proof and globally visible. All this—delivered straight to your mobile device`,
      thumb: thumb1,
   },
   {
      id: 1,
      title: "Let AI think, while you farm.",
      desc: `From weather trends to irrigation timing, Decentragri’s AI interprets raw data into clear, actionable decisions—sent straight to your phone. It's like having an agri-scientist in your pocket.`,

      thumb: thumb2,
   },
   {
      id: 2,
      title: "Every insight recorded. Every action accountable.",
      desc: `Decentragri logs every data point on the blockchain, making your farm's history tamper-proof and open. Whether for audits, cooperatives, or grants—trust is built into every byte.`,
      thumb: thumb3,
   }
];

const Cause = () => {

   const [activeTab, setActiveTab] = useState(0);

   // Handle tab click event
   const handleTabClick = (index: number) => {
      setActiveTab(index);
   };

   return (
      <section className="use-cases-section pt-110 pb-65">
         <div className="case-wrapper p-r z-1">
            <div className="shape shape-one"><span><Image src={shape} alt="shape" /></span></div>
            <div className="container">
               <div className="row">
                  <div className="col-lg-12">
                     <div className="section-title text-center mb-55 wow fadeInDown">
                        <h2>We partner with some of the most impactful communities in agriculture and Web3.</h2>
                        <p>Decentragri’s tech delivers instant, trustless access to tools that empower farmers and scale regenerative agriculture worldwide</p>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-lg-12">
                     <div className="theme-tabs style-one mb-45 wow fadeInUp">
                        <ul className="nav nav-tabs justify-content-center">
                           {tab_title.map((tab, index) => (
                              <li key={index} >
                                 <button className={`nav-link ${activeTab === index ? "active" : ""}`} onClick={() => handleTabClick(index)}>
                                    {tab}
                                 </button>
                              </li>
                           ))}
                        </ul>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-lg-12">
                     <div className="tab-content wow fadeInDown">
                        {cause_data.map((item, index) => (
                           <div key={item.id} className={`tab-pane fade ${activeTab === index ? 'show active' : ''}`} id="case1">
                              <div className="row">
                                 <div className="col-lg-5">
                                    <div className="ac-tab-one_content-box mb-50">
                                       <h5>{item.title}</h5>
                                       <p>{item.desc}</p>
                                       <div className="author-thumb-item mb-55">
                                          <div className="thumb">
                                          </div>
                                          <div className="content">
                                             <h6>{item.name}</h6>
                                             <span className="position">{item.designation}</span>
                                          </div>
                                       </div>
                                       <Link href="https://decentragri.gitbook.io/decentragri.com"
                                          className="theme-btn style-one">Learn More</Link>
                                    </div>
                                 </div>
                                 <div className="col-lg-7">
                                    <div className="ac-tab_image-box mb-50 text-xl-end">
                                       <Image src={item.thumb} alt="case image" />
                                    </div>
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

export default Cause
