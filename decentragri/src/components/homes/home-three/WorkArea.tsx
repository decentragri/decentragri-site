"use client"
import black_icon from "@/assets/images/gallery/black_icon.png";
import green_icon from "@/assets/images/gallery/green_icon.png"; // <-- Make sure this is the correct green icon path

import Image from "next/image";
import { useState } from "react";

import shape_1 from "@/assets/images/shape/work-1.png";
import shape_2 from "@/assets/images/shape/work-2.png";


const WorkArea = () => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<section className="how-to-work">
			<div className="work-bg-wrapper pt-115">
				<div className="shape shape-one">
					<span><Image src={shape_1} alt="shape" /></span>
				</div>
				<div className="shape shape-two">
					<span><Image src={shape_2} alt="shape" /></span>
				</div>
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-12">
							{/* ⬇️ IMAGE BEFORE TEXT ⬇️ */}
							<div
								className="text-center mb-4"
								onMouseEnter={() => setIsHovered(true)}
								onMouseLeave={() => setIsHovered(false)}
							>
								<Image
									src={isHovered ? green_icon : black_icon}
									alt="dashboard"
								/>
							</div>

							<div className="section-title text-center mb-55 wow fadeInDown">
								<span className="sub-title">

								</span>
								<h2>Decentragri empowers smarter farming decisions through data</h2>
								<p>We help agricultural communities monitor real-time conditions with AI-driven insights,
								and ensure every recommendation is backed by transparent, blockchain-verified data.</p>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col-lg-12">
							<div className="theme-tabs style-three mb-30 wow fadeInUp">
								{/* Insert your tab buttons here if needed */}
							</div>
						</div>
					</div>

				</div>
			</div>
		</section>
	);
}

export default WorkArea;
