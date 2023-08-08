import z from "zod";

export interface GetCourseInputDTO {
    q: string;
}

export const GetCourseSchema = z.object({
    q: z.string().min(1),
}).transform(data => data as GetCourseInputDTO);
