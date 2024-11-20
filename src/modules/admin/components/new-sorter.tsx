"use client";

import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  internName: z.string().nonempty("El nombre interno es obligatorio."),
  publicName: z.string().nonempty("El nombre público es obligatorio."),
  description: z.string().nonempty("La descripción no puede estar vacía."),
  url: z.string().url("Debe ser una URL válida."),
  priceTicket: z.number().min(1, "El precio debe ser mayor a 0."),
  quatity: z.number().min(1, "La cantidad debe ser mayor a 0."),
});

export default function CreateSorter() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values);
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
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 py-6 max-w-3xl mx-auto min-w-[500px]"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="internName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre Interno</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Ejemplo: Evento privado"
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="publicName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre Público</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Ejemplo: Concierto anual"
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descripción</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Describe el evento brevemente..."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="url"
          render={({ field }) => (
            <FormItem>
              <FormLabel>URL de la Transmisión</FormLabel>
              <FormControl>
                <Input
                  placeholder="https://ejemplo.com/evento"
                  type="text"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="priceTicket"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Precio por Ticket (S/)</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Ejemplo: 50"
                    type="number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="quatity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cantidad de Tickets</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Ejemplo: 100"
                    type="number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button
          type="submit"
          className="w-full"
        >
          Enviar
        </Button>
      </form>
    </Form>
  );
}

