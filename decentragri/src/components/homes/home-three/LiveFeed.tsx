"use client"
import Image, { StaticImageData } from "next/image"
import { useState } from "react";
import Link from "next/link";

import thumb1 from "@/assets/images/hero/hero2.png"
import shape from "@/assets/images/shape/use-shape-1.png"
import Modal from "react-modal";
// Tab title
const tab_title: string[] = ["Live Feed"];

// Main info section
interface DataType {
	id: number;
	title: string;
	desc: string;
	thumb: StaticImageData;
	name?: string;
	designation?: string;
}

const cause_data: DataType[] = [
    {
        id: 0,
        title: "Real-time Environmental Data from the Field.",
        desc: `You're viewing a live feed of sensor data directly from the DecentrAgri field unit. Each scan captures vital stats like soil pH, temperature, and moisture—processed instantly by our AI. These readings are immutable, timestamped, and permanently verifiable on-chain. Empowering farmers, researchers, and ecosystems with actionable insight—live.`,
        thumb: thumb1,
    },
    
];

interface ScanHistory {
    id: number;
    date: string;
    summary: string;
}

// Fake scan history
const scanHistory: ScanHistory[] = [
	{ id: 1, date: "2025-05-09", summary: "Soil pH 6.8, Moisture 58%, Temp 26.1°C" },
	{ id: 2, date: "2025-05-08", summary: "Soil pH 6.7, Moisture 54%, Temp 27.3°C" },
	{ id: 3, date: "2025-05-07", summary: "Soil pH 7.0, Moisture 62%, Temp 25.8°C" },
];

const LiveFeed = () => {
	const [activeTab, setActiveTab] = useState(0);

	const handleTabClick = (index: number) => {
		setActiveTab(index);
	};

	const [selectedScan, setSelectedScan] = useState<ScanHistory | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = (scan: ScanHistory) => {
		setSelectedScan(scan);
		setIsModalOpen(true);
	};

    const closeModal = () => {
        setIsModalOpen(false);
    };


	return (
		<section className="use-cases-section pt-110 pb-65">
			<div className="case-wrapper p-r z-1">
				<div className="shape shape-one"><span><Image src={shape} alt="shape" /></span></div>
				<div className="container">
					<div className="row">
						<div className="col-lg-12">

						</div>
					</div>

					<div className="row">
						<div className="col-lg-12">
							<div className="theme-tabs style-one mb-45 wow fadeInUp">
								<ul className="nav nav-tabs justify-content-center">
									{tab_title.map((tab, index) => (
										<li key={index}>
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
											{/* LEFT SIDE */}
											<div className="col-lg-5">
												<div className="ac-tab-one_content-box mb-50">
													<h5>{item.title}</h5>
													<p>{item.desc}</p>
													<div className="author-thumb-item mb-55">
														<div className="thumb"></div>
														<div className="content">
															<h6>{item.name}</h6>
															<span className="position">{item.designation}</span>
														</div>
													</div>
													<Link href="https://decentragri.gitbook.io/decentragri.com" className="theme-btn style-one">
														Learn More
													</Link>
												</div>
											</div>

											{/* RIGHT SIDE - Scan History Panel */}
											<div className="col-lg-7">
												<div className="ac-tab_image-box mb-50">
													<div className="scan-history-panel p-4 rounded-lg shadow-sm bg-light" style={{ maxHeight: "400px", overflowY: "auto" }}>
                                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                                            <h6 className="mb-0">Scan History</h6>
                                                            <div className="live-indicator d-flex align-items-center gap-2">
                                                                <span className="blinking-dot"></span>
                                                                <small className="text-success">Live</small>
                                                            </div>
                                                        </div>

                                                        {scanHistory.map(entry => (
                                                            <div key={entry.id} className="scan-entry p-3 mb-3 bg-white rounded border d-flex justify-content-between align-items-start">
                                                                <div>
                                                                    <strong>{entry.date}</strong>
                                                                    <p className="mb-0">{entry.summary}</p>
                                                                </div>
                                                                <button
                                                                    onClick={() => openModal(entry)}
                                                                    className="btn btn-link p-0 text-primary"
                                                                    title="View Details"
                                                                >
                                                                    <i className="fas fa-eye"></i>
                                                                </button>
                                                            </div>
                                                        ))}
													</div>
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
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Scan Details"
                className="scan-modal"
                overlayClassName="scan-overlay"
                ariaHideApp={false}
            >
                <div className="p-4">
                    
                    <h5 className="mb-3">Scan Details - {selectedScan?.date}</h5>
                    <p><strong>Summary:</strong> {selectedScan?.summary}</p>
                    {/* Extend with full details if available */}
                    <button onClick={closeModal} className="theme-btn style-one mt-4">
                        Close
                    </button>
                </div>
            </Modal>

		</section>
	)
}

export default LiveFeed
 