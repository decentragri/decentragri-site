import Link from "next/link";
import { JSX } from "react";

interface DataType {
   id: number;
   icon: string;
   title: string;
   info: JSX.Element;
}

const contact_data: DataType[] = [

   {
      id: 2,
      icon: "far fa-envelope-open",
      title: "Email Address",
      info: (<>
         <p><Link href="mailto:demo123@gmail.com">decentragri@gmail.com</Link></p>
      </>),
   },

];

const ContactArea = () => {
   return (
      <section className="contact-info-section pt-40 pb-80">
         <div className="container">
            <div className="row justify-content-center">
               {contact_data.map((item) => (
                  <div key={item.id} className="col-lg-4 col-md-6 col-sm-12 mt-5">
                     <div className="iconic-info-box style-five mb-40 wow fadeInUp">
                        <div className="icon">
                           <i className={item.icon}></i>
                        </div>
                        <div className="content">
                           <h5>{item.title}</h5>
                           {item.info}
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}

export default ContactArea
