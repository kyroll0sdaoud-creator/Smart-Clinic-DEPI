import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .nonempty("البريد الإلكتروني مطلوب")
    .email("صيغة البريد الإلكتروني غير صحيحة"),

  password: z
    .string()
    .nonempty("كلمة المرور مطلوبة")
    .min(6, "يجب ألا تقل كلمة المرور عن 6 أحرف"),
});