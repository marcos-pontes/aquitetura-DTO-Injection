import z from "zod"

export interface CreateCourseInputDTO{
    id: string,
    name: string,
    lessons: number
}

export interface createCourseOutputDTO{
    message: string
    course:{
    id: string, 
    name: string, 
    lessons: number, 
    createdAt: string
    };
}
export const CreateCourseSchema = z.object({
    id:z.string().min(1),
    name:z.string().min(3),
    lessons: z.number().gt(1)
}).transform(data => data as CreateCourseInputDTO);