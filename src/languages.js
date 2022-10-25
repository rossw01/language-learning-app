import { idLessons } from "./courses/id/lessons";
import { krLessons } from "./courses/kr/lessons";

export const languages = [
	{
		name: "Indonesian",
		image: "id.svg",
		fact: "Indonesia has the 4th Largest Population!",
		lessons: idLessons,
	},
	{
		name: "Korean",
		image: "kr.svg",
		fact: "Korean is one of the fastest growing second languages!",
		lessons: krLessons,
	},
];
