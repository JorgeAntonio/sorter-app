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
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { sortersApi } from "@/app/api";
import { ICreateSorter } from "@/core";

const formSchema = z.object({
  internName: z.string().min(1, "El nombre interno es obligatorio."),
  publicName: z.string().min(1, "El nombre público es obligatorio."),
  description: z.string().min(1, "La descripción es obligatoria."),
  url: z.string().min(1, "La URL no puede estar vacía."),
  priceTicket: z.coerce.number().min(1, "El precio debe ser mayor a 0."),
  quatity: z.coerce.number().min(1, "La cantidad debe ser mayor a 0."),
  date: z.date().refine((date) => date > new Date(), "La fecha debe ser mayor a la actual."),
  time: z.string().regex(/^([01]?[0-9]|2[0-3]):([0-5][0-9])$/, "El formato de hora debe ser HH:MM."),
});

export default function CreateSorter() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      internName: "",
      publicName: "",
      description: "",
      url: "",
      priceTicket: 0,
      quatity: 0,
      date: new Date(),
      time: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {

    try {
      const dateTimeString = `${values.date.toISOString().split("T")[0]}T${values.time}:00`; // Formato ISO 8601
      const newData: ICreateSorter = {
        nombre: values.internName,
        nombrePublico: values.publicName,
        descripcion: values.description,
        imagen: values.url,
        precioTickets: Number(values.priceTicket),
        limiteTickets: Number(values.quatity),
        fechaSorteo: dateTimeString,
        usuario: Number(1),
      }

      const res = await sortersApi.createSorter(newData);
      if (!res) {
        throw new Error("Failed to submit the form. Please try again.");
      }
      toast.success("Sorteo creado exitosamente");
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  }

  return (
    <Form {...form}>
      <h1 className="text-2xl font-bold">Crear sorteo</h1>
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
                <FormDescription>
                  Nombre para identificar al sorteo.
                </FormDescription>
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
                <FormDescription>
                  Titulo para mostrar al público.
                </FormDescription>
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

        <div className="flex items-center gap-4">
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-2">
                <FormLabel>Dia del sorteo</FormLabel>
                <FormControl>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[280px] justify-start text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon />
                        {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="time"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Hora </FormLabel>
                <FormControl>
                  <Input
                    placeholder="00:00"
                    type="time"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>


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

        <Button type="submit" className="w-full">
          Enviar
        </Button>
      </form>
    </Form>
  );
}
