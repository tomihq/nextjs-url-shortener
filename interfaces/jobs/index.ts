import { IYearRange } from "@/types";

export interface IJobExperience {
    id: string;
    title: string;
    role: string;
    image: string;
    yearRange: IYearRange[]
}