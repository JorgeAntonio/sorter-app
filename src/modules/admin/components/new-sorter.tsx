"use client"

import { toast } from "sonner"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
  internName: z.string(),
  publicName: z.string(),
  description: z.string(),
  url: z.string(),
  priceTicket: z.number().min(1),
  quatity: z.number().min(1)
});

export default function CreateSorter() {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),

  })

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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 py-10 max-w-md">

        <FormField
          control={form.control}
          name="internName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre interno</FormLabel>
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
          name="publicName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre publico</FormLabel>
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
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descripción</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Descripción..."
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
              <FormLabel>URL de la transmisión</FormLabel>
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
          name="priceTicket"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Precio por ticket</FormLabel>
              <FormControl>
                <Input
                  placeholder="s/ 5 ..."

                  type="number"
                  {...field} />
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
              <FormLabel>Cantidad de tickets</FormLabel>
              <FormControl>
                <Input
                  placeholder="15..."

                  type="number"
                  {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}