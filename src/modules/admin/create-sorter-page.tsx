'use client'

import { Title } from "@/components/main-title";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TableDemo } from "./components/sorter-table";
import { PrizesForm } from "./components/prizes-form";
import CreateSorter from "./components/new-sorter";
import PrizesList from "./components/prizes-list";

export default function NewSorterPage() {

  return (
    <main className="container mx-auto py-4 space-y-8">
      <Title title="Administrar Sorteo" />
      <section>
        <Tabs defaultValue="prizes" className="w-full">
          <TabsList>
            <TabsTrigger value="prizes">Premios</TabsTrigger>
            <TabsTrigger value="tickets">Tickets</TabsTrigger>
            <TabsTrigger value="sorters">Sorteo</TabsTrigger>
          </TabsList>
          <TabsContent value="prizes" className="container mx-auto">
            <div className="flex space-x-8">
              <PrizesForm />
              <PrizesList />
            </div>
          </TabsContent>
          <TabsContent value="tickets">
            <TableDemo />
          </TabsContent>
          <TabsContent value="sorters" className="w-full">
            <div className="flex space-x-8">
              <CreateSorter />
              <PrizesList />
            </div>
          </TabsContent>
        </Tabs>
      </section>

    </main >
  );
}




