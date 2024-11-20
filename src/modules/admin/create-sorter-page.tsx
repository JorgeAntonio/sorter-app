import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TableDemo } from "./components/sorter-table";
import { PrizesForm } from "./components/prizes-form";
import CreateSorter from "./components/new-sorter";
import PrizesList from "./components/prizes-list";
import { ResumeTicket } from "./components/resume-ticket";
// import SorterList from "./components/sorter-list";

export default function NewSorterPage() {

  return (
    <main className="container mx-auto py-4 space-y-6">
      <h1 className="text-3xl font-bold">Administrar sorteos</h1>
      <section>
        <Tabs defaultValue="prizes" className="w-full">
          <TabsList>
            <TabsTrigger value="prizes">Premios</TabsTrigger>
            <TabsTrigger value="tickets">Tickets</TabsTrigger>
            <TabsTrigger value="sorters">Sorteo</TabsTrigger>
          </TabsList>
          <TabsContent value="prizes" className="container mx-auto">
            <div className="flex gap-2">
              <section className="border-r-2 p-4 h-full">
                <PrizesForm />
              </section>
              <section className="p-4">
                <PrizesList />
              </section>
            </div>
          </TabsContent>
          <TabsContent value="tickets">
            <TableDemo />
          </TabsContent>
          <TabsContent value="sorters" className="w-full">
            <div className="flex gap-2">
              <section className="border-r-2 p-4 h-full">
                <CreateSorter />
              </section>
              <section className="p-4">
                <div>
                  <PrizesList />
                </div>
                <div>
                  <ResumeTicket />
                </div>
              </section>
            </div>
            {/* <div className="flex space-x-8">
              <CreateSorter />
              <SorterList />
            </div> */}

          </TabsContent>
        </Tabs>
      </section>
    </main >
  );
}




