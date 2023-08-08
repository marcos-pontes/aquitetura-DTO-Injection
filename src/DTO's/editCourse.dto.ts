import z from "zod";

export interface EditCourseInputDTO {
    idToEdit: string;
    id: string;
    name?: string;
    lessons?: number;
}

export interface EditCourseOutputDTO {
    message: string;
    course: {
        id: string;
        name: string;
        lessons: number;
        createdAt: string;
    };
}

export const EditCourseSchema = z.object({
    id: z.string().min(1),
    name: z.string().min(3).optional(),
    lessons: z.number().gt(1).optional(),
}).transform(data => data as EditCourseInputDTO);
