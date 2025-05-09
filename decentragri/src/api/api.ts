import axios from "axios";

export interface InterpretationDetail {
	evaluation: string;
	fertility?: string;
	moisture?: string;
	ph?: string;
	temperature?: string;
	sunlight?: string;
	humidity?: string;
	// You can add more fields here if the interpretation expands
}

export interface SensorReadings {
	fertility: number;
	moisture: number;
	ph: number;
	temperature: number;
	sunlight: number;
	humidity: number;
	cropType?: string;
	username: string;
	sensorId: string;
}

export interface SensorReadingsWithInterpretation extends SensorReadings {
	interpretation: InterpretationDetail;
	createdAt: string;
}





export async function getSoilMeterScan(): Promise<SensorReadingsWithInterpretation | { error: string }> {
	const requestUrl = "https://api.decentragri.com/api/get-sensor-readings";

	try {
		console.info("Calling backend to get soil meter data:", requestUrl);
		const response = await axios.get(requestUrl, {
            headers: {
                Authorization: `Bearer h7Q5TAFX6BHaVP0nGiA9Y3U4RHgzaHdG`,

            },
        });

		if (response.status === 200 && response.data) {
			if (response.data.error) {
				return { error: response.data.error as string };
			} else {
				return response.data as SensorReadingsWithInterpretation;
			}
		} else {
			console.error("Invalid response from backend");
			return { error: "Unknown server error" };
		}
	} catch (error: unknown) {
		if (error instanceof Error) {
			console.error("Error fetching soil meter data:", error.message);
		} else {
			console.error("Error fetching soil meter data:", error);
		}
		return { error: "Network or server error" };
	}
}
