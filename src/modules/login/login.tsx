'use client'

import { signin } from "@/actions/auth"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"
import { useActionState } from "react"
import { LoginFormSchema } from '@/lib/definitions'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useToastMessage } from "@/hooks/use-toast-message"
import { useFormFeedback } from "@/hooks/useFormFeedback"
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form"
import { Label } from "@/components/ui/label"
import { ErrorLabel } from "@/lib/error-label"
import ReactDOM from "react-dom"


export const Login = () => {
    const [state, action] = useActionState(signin, undefined)

    const form = useForm<z.infer<typeof LoginFormSchema>>({
        resolver: zodResolver(LoginFormSchema),
        defaultValues: {
            username: "",
            password: "",
        },
    })

    const message = state?.message
    useToastMessage(message)
    useFormFeedback({ message, url: '/admin' })

    return (
        <main className="flex min-h-screen bg-white">
            <Form {...form}>
                <div className="flex flex-col justify-center p-8 md:w-1/2">
                    <div className="mx-auto w-full max-w-md">
                        <h2 className="text-3xl font-bold">Iniciar sesión</h2>
                        <p className="mt-2 text-sm text-gray-600">
                            Ingresat tu correo y contraseña para acceder a tu cuenta.
                        </p>
                        <form className="mt-4 space-y-4" action={action}>
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                            <FormItem>
                                <Label>Usuario</Label>
                                <FormControl>
                                <Input placeholder="nombre de usuario" {...field} />
                                </FormControl>
                                <ErrorLabel message={state?.errors?.username
                                && state.errors.username
                                } />
                            </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                            <FormItem>
                                <Label>Contraseña</Label>
                                <FormControl>
                                <Input type="password" placeholder="********" {...field} />
                                </FormControl>
                                <ErrorLabel message={
                                state?.errors?.password
                                && state.errors.password
                                } />
                            </FormItem>
                            )}
                        />
                        <SubmitButton />
                        </form>
                        <p className="mt-6 text-xs text-center text-gray-600">
                            Al continuar, aceptas nuestros{" "}
                            <Link href="#" className="text-blue-600 hover:underline">
                                Terminos de Servicio
                            </Link>{" "}
                            y {" "}
                            <Link href="#" className="text-blue-600 hover:underline">
                                Política de Privacidad
                            </Link>
                        </p>
                    </div>
                </div>
                <div className="hidden md:flex md:w-1/2 bg-gray-100 items-center justify-center p-12">
                    <Image
                        alt="Christmas illustration"
                        className="max-w-full h-auto"
                        height="400"
                        src="/login.svg"
                        style={{
                            aspectRatio: "400/400",
                            objectFit: "contain",
                        }}
                        width="400"
                    />
                </div>
            </Form>
        </main>
    )
}

function SubmitButton() {
    const { pending } = ReactDOM.useFormStatus()
  
    return (
      <Button
        disabled={pending}
        type="submit"
        className='w-full'
      >
        {pending ? 'Validando...' : 'Iniciar sesión'}
      </Button>
    )
  }