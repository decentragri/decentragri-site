import { StaticImageData } from "next/image";

import team_1 from "@/assets/images/about/trev_full.png"
import team_2 from "@/assets/images/about/anthony_full.png"
import team_4 from "@/assets/images/about/dahl_full.png"


interface DataType {
   id: number;
   img: StaticImageData;
   title: string;
   designation: string;
   linkedIn?: string;
   twitter?: string;
   facebook?: string;
   github?: string;
}

const team_data: DataType[] = [
	{
		id: 1,
		img: team_1,
		title: "Trevin Olegario",
		designation: "CEO, Developer, Green Advocate",
		linkedIn: "https://www.linkedin.com/in/trevin-dave-clerenz-olegario-546749211",
	},
	{
		id: 4,
		img: team_4,
		title: "Yehna Lee",
		designation: "Marketing, Green Advocate",
		twitter: "https://x.com/alviedahl"
	},
	{
		id: 2,
		img: team_2,
		title: "Anthony Fuentes",
		designation: "Lead Developer, Loves Farm Animals",
      github: "https://github.com/decentragri"

	}
];


export default team_data;