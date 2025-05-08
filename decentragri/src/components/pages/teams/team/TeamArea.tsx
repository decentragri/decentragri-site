"use client"
import { useState } from "react";
import team_data from "@/data/TeamData"
import Image from "next/image"
import Link from "next/link"

const TeamArea = () => {

   const team = team_data;

   const itemsPerPage = 8;
   // eslint-disable-next-line @typescript-eslint/no-unused-vars
   const [itemOffset, _setItemOffset] = useState(0);
   const endOffset = itemOffset + itemsPerPage;
   const currentItems = team.slice(itemOffset, endOffset);

   // click to request another page.


   return (
      <section className="team-section pt-120 pb-120">
         <div className="container">
            <div className="row">
               {currentItems.map((item) => (
                  <div key={item.id} className="col-xl-3 col-md-6 col-sm-12">
                     <div className="team-item style-one mb-30 wow fadeInUp">
                        <div className="member-image">
                           <Image src={item.img} alt="Member Image" />
                        </div>
                        <div className="member-info">
                           <div className="content">
                              <h4><a href="team-details.html">{item.title}</a></h4>
                              <span className="position">{item.designation}</span>
                           </div>
                           <div className="share-button">
                              <div className="icon">
                                 <i className="flaticon-plus-positive-add-mathematical-symbol"></i>
                              </div>
                              <ul className="social-link">
                                 {item.linkedIn && (
                                    <li>
                                       <Link href={item.linkedIn} target="_blank">
                                          <i className="fab fa-linkedin-in"></i>
                                       </Link>
                                    </li>
                                 )}
                                 {item.twitter && (
                                    <li>
                                       <Link href={item.twitter} target="_blank">
                                          <i className="fab fa-twitter"></i>
                                       </Link>
                                    </li>
                                 )}
                                 {item.github && (
                                    <li>
                                       <Link href={item.github} target="_blank">
                                          <i className="fab fa-github"></i>
                                       </Link>
                                    </li>
                                 )}
                                 {item.facebook && (
                                    <li>
                                       <Link href={item.facebook} target="_blank">
                                          <i className="fab fa-facebook"></i>
                                       </Link>
                                    </li>
                                 )}
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
            <div className="row">

            </div>
         </div>
      </section>
   )
}

export default TeamArea
