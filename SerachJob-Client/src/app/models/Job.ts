import{JobField} from './JobField'
import {Area} from "./Area";

export interface Job{
    jobfield: JobField,
    jobName: string,
    scopeOfHours: number,
    requirements: string,
    workingFromHome: boolean,
    area: Area
}



