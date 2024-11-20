import { z } from 'zod'

export const LoginFormSchema = z.object({
  username: z.string().min(1, {
    message: 'El nombre de usuario es requerido.'
  }).trim(),
  password: z.string().min(1, {
    message: 'La contraseña es requerida.'
  }).trim(),
})

export const SignupFormSchema = z.object({
  username: z
    .string()
    .min(2, { message: 'El nombre debe tener al menos 2 caracteres.' })
    .trim(),
  email: z.string().email({
    message: 'Ingrese un correo electrónico válido.'
  }).trim(),
  password: z
    .string()
    .min(8, {
      message: 'La contraseña debe tener al menos 8 caracteres.'
    })
    .regex(/[a-zA-Z]/, {
      message: 'Debe contener al menos una letra.'
    })
    .regex(/[0-9]/, {
      message: 'Debe contener al menos un número.'
    })
    .regex(/[^a-zA-Z0-9]/, {
      message: 'Debe contener al menos un caracter especial.'
    })
    .trim(),
  password2: z.string().refine((data) => data === data, {
    message: 'Las contraseñas no coinciden.',
  }),
  first_name: z.string(),
  last_name: z.string(),
  ruc: z.string().min(11, { message: 'El RUC debe tener 11 dígitos.' }),
})

export type FormState =
  | {
    errors?: {
      username?: string[]
      email?: string[]
      password?: string[]
    }
    message?: string
  }
  | undefined

export type SessionPayload = {
  userId: string
  expiresAt: Date
}