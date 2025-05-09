"use client"
import Image, { StaticImageData } from "next/image"
import { useEffect, useState } from "react";
import Link from "next/link";
import Modal from "react-modal";

import { getSoilMeterScan, SensorReadingsWithInterpretation } from "@/api/api";
import thumb1 from "@/assets/images/hero/hero2.png"
import shape from "@/assets/images/shape/use-shape-1.png"


const tab_title: string[] = ["Live Feed"];

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



const LiveFeed = () => {
	const [activeTab, setActiveTab] = useState(0);
	const [scanHistory, setScanHistory] = useState<SensorReadingsWithInterpretation[]>([]);
	const [selectedScan, setSelectedScan] = useState<SensorReadingsWithInterpretation | null>(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const openModal = (scan: SensorReadingsWithInterpretation) => {
        console.log("bitch: ", scan)
		setSelectedScan(scan);
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

    const fetchScanData = async () => {
        setLoading(true);
        setError(null);
    
        try {
            const response = await getSoilMeterScan();
    
            if ("error" in response) {
                setError(response.error);
            } else if (Array.isArray(response)) {
                console.log("Fetched scans:", response);
                setScanHistory(response); // or [...response, ...scanHistory] if you want to append
            } else {
                setError("Unexpected response format.");
            }
        } catch (err: unknown) {
            setError(`Unexpected error fetching scan: ${err}`);
        } finally {
            setLoading(false);
        }
    };
    
    

	useEffect(() => {
		fetchScanData();

		// Optional: auto-refresh every 30s
		const interval = setInterval(fetchScanData, 30000);
		return () => clearInterval(interval);
	}, []);

	return (
		<section className="use-cases-section pt-110 pb-65">
			<div className="case-wrapper p-r z-1">
				<div className="shape shape-one"><span><Image src={shape} alt="shape" /></span></div>
				<div className="container">
					<div className="row">
						<div className="col-lg-12"></div>
					</div>

					<div className="row">
						<div className="col-lg-12">
							<div className="theme-tabs style-one mb-45 wow fadeInUp">
								<ul className="nav nav-tabs justify-content-center">
									{tab_title.map((tab, index) => (
										<li key={index}>
											<button className={`nav-link ${activeTab === index ? "active" : ""}`} onClick={() => setActiveTab(index)}>
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

											{/* RIGHT SIDE */}
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

														{loading && <p className="text-muted">Loading latest scan...</p>}
														{error && <p className="text-danger">Error: {error}</p>}

                                                        {scanHistory.map(entry => {
                                                            const formattedDate = new Date(entry.createdAt).toLocaleString('en-US', {
                                                                month: 'long',
                                                                day: 'numeric',
                                                                year: 'numeric',
                                                                hour: 'numeric',
                                                                minute: '2-digit',
                                                                hour12: true,
                                                            });

                                                            return (
                                                                <div key={entry.createdAt} className="scan-entry p-3 mb-3 bg-white rounded border d-flex justify-content-between align-items-start">
                                                                    <div>
                                                                        <strong>{formattedDate}</strong>
                                                                        <p className="mb-0">
                                                                            Soil pH: {entry.ph}, Moisture: {entry.moisture}%, Temp: {entry.temperature}°C
                                                                        </p>
                                                                    </div>
                                                                    <button
                                                                        onClick={() => openModal(entry)}
                                                                        className="btn btn-link p-0 text-primary"
                                                                        title="View Details"
                                                                    >
                                                                        <i className="fas fa-eye"></i>
                                                                    </button>
                                                                </div>
                                                            );
                                                        })}

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
            <div className="w-full max-w-3xl p-6">
	<Modal
		isOpen={isModalOpen}
		onRequestClose={closeModal}
		contentLabel="Scan Details"
		className="scan-modal max-w-3xl mx-auto rounded-lg shadow-lg bg-white"
		overlayClassName="scan-overlay bg-black/40 fixed inset-0 z-50 flex items-center justify-center"
		ariaHideApp={false}
	>
        <div className="p-6 max-h-[90vh] overflow-y-auto">
            {selectedScan && typeof selectedScan.interpretation === 'object' && (() => {
                const formattedDate = new Date(selectedScan.createdAt).toLocaleString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                    hour: 'numeric',
                    minute: '2-digit',
                    hour12: true,
                });

                return (
                    <div className="space-y-6">
                        {/* Sensor Readings */}
                        <div>
                            <h5 className="text-lg font-semibold text-gray-700 mb-3">Sensor Readings</h5>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-800">
                                <p><strong className="text-gray-600">Scan Date:</strong> {formattedDate}</p>
                                <p><strong className="text-gray-600">Crop Type:</strong> <span className="uppercase">{selectedScan.cropType ?? "N/A"}</span></p>
                                <p><strong className="text-gray-600">Sensor ID:</strong> {selectedScan.sensorId}</p>
                                <p><strong className="text-gray-600">Username:</strong> {selectedScan.username}</p>
                                <p><strong className="text-gray-600">Fertility:</strong> {selectedScan.fertility} µS/cm</p>
                                <p><strong className="text-gray-600">Moisture:</strong> {selectedScan.moisture}%</p>
                                <p><strong className="text-gray-600">pH:</strong> {selectedScan.ph}</p>
                                <p><strong className="text-gray-600">Temperature:</strong> {selectedScan.temperature}°C</p>
                                <p><strong className="text-gray-600">Humidity:</strong> {selectedScan.humidity}%</p>
                                <p><strong className="text-gray-600">Sunlight:</strong> {selectedScan.sunlight} lux</p>
                            </div>
                        </div>

                        <hr className="border-t border-gray-200" />

                        {/* Interpretation */}
                        <div>
                            <h5 className="text-lg font-semibold text-gray-700 mb-3">Interpretation</h5>
                            <div className="space-y-2 text-sm text-gray-800">
                                <p><strong className="text-gray-600">Overall Evaluation:</strong> {selectedScan.interpretation.evaluation}</p>
                                <p><strong className="text-gray-600">Fertility:</strong> {selectedScan.interpretation.fertility }</p>
                                <p><strong className="text-gray-600">Humidity:</strong> {selectedScan.interpretation.humidity}</p>
                                <p><strong className="text-gray-600">Moisture:</strong> {selectedScan.interpretation.moisture}</p>
                                <p><strong className="text-gray-600">pH:</strong> {selectedScan.interpretation.ph}</p>
                                <p><strong className="text-gray-600">Sunlight:</strong> {selectedScan.interpretation.sunlight}</p>
                                <p><strong className="text-gray-600">Temperature:</strong> {selectedScan.interpretation.temperature}</p>
                            </div>
                        </div>

                        {/* Optional Bottom Close Button */}
                        <div className="pt-4 text-right">
                            <button
                                onClick={closeModal}
                                className="theme-btn style-one"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                );
            })()}
        </div>

	</Modal>
</div>



		</section>
	);
};

export default LiveFeed;
