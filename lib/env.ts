import process from "node:process";
import { z } from "zod";

const EnvSchema = z.object({
	RESEND_API_KEY: z.string(),
});

export type EnvSchema = z.infer<typeof EnvSchema>;

export default EnvSchema.parse(process.env);
