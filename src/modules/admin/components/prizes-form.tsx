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
import { Title } from "@/components/main-title"

const formSchema = z.object({
    nombre: z.string().min(3, { message: "El nombre debe tener al menos 3 caracteres." }),
    descripcion: z.string().optional(),
    imageUrl: z.string().min(3, { message: "Ingrese una URL valido." }).regex(
        /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)$/,
        { message: "La URL de la imagen no es válida" }
    ),
});

export const PrizesForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            nombre: "",
            descripcion: "",
            imageUrl: "",
        }
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            console.log(values);
            const res = await prizesApi.createPrize(values);
            console.log(res);
            toast(
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(values, null, 2)}</code>
                </pre>
            );
        } catch (error) {
            console.error("Form submission error", error);
            toast.error("Failed to submit the form. Please try again.");
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 py-10 max-w-md">
            <Title title="Nuevo premio" size="medium"/>
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
                    name="imageUrl"
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