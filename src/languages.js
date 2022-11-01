import { idLessons } from "./courses/id/lessons";
import { krLessons } from "./courses/kr/lessons";

export const languages = [
	{
		name: "Indonesian",
		languageCode: "id",
		fact: "Indonesia has the 4th Largest Population!",
		lessons: idLessons,
	},
	{
		name: "Korean",
		languageCode: "kr",
		fact: "Korean is one of the fastest growing second languages!",
		lessons: krLessons,
	},
];
