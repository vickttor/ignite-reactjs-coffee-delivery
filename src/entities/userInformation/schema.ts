import {z} from "zod";

export enum Payment {
	DEBIT = "DEBIT",
	CREDIT = "CREDIT",
	MONEY = "MONEY"
}

export const UserInformationSchema = z.object({
	cep: z.string().min(8).max(9),
	street: z.string().min(3).max(100),
	number: z.number(),
	complement: z.string().max(100).optional(),
	district: z.string().min(3).max(100),
	city: z.string().min(3).max(100),
	state: z.string().min(2).max(2),
	payment: z.nativeEnum(Payment)
});

export type UserInformationType = z.infer<typeof UserInformationSchema>;