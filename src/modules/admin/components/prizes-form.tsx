"use client"

import {toast} from "sonner"
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import * as z from "zod"
import {Button} from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea"
import { prizesApi } from "@/app/api"

const formSchema = z.object({
    nombre: z.string().min(3, { message: "El nombre debe tener al menos 3 caracteres." }),
    descripcion: z.string().optional(),
    imagen: z.string().url({ message: "La URL de la imagen no es válida." }),
});

export const PrizesForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            nombre: "",
            descripcion: "",
            imagen: "",
        }
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            console.log(values);
            const res = await prizesApi.createPrize(values);
            if (!res.nombre) {
                throw new Error("Failed to submit the form. Please try again.");
            }
            console.log(res);
            toast.success("Prize created successfully");
        } catch (error) {
            console.error("Form submission error", error);
            toast.error("Failed to submit the form. Please try again.");
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4  max-w-md min-w-[400px]">
            <h1 className="text-2xl font-bold">Crear premio</h1>
                <FormField
                    control={form.control}
                    name="nombre"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nombre del premio</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Nombre..."
                                    type="text"
                                    {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="imagen"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>URL de la imagen</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="https://..."
                                    type="text"
                                    {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="descripcion"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Descripción</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Ingresa una descripción"
                                    className="resize-none"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button
                    className="w-full" 
                    type="submit"
                >
                    Guardar
                </Button>
            </form>
        </Form>
    )
}