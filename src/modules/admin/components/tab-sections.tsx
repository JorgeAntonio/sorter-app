import { Title } from "@/components/main-title";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TableDemo } from "./sorter-table";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function TabsSections() {

    return (
        <main className="container mx-auto py-4 space-y-8">
            <div className="flex justify-between items-center">
                <Title title="Administrar sorteos" />
                <Link href="/admin/create">
                    <Button>
                        Nuevo sorteo
                    </Button>
                </Link>
            </div>
            <section>
                <Tabs defaultValue="pending" className="w-full">
                    <TabsList>
                        <TabsTrigger value="pending">Pendientes</TabsTrigger>
                        <TabsTrigger value="done">Realizados</TabsTrigger>
                    </TabsList>
                    <TabsContent value="pending">
                        <TableDemo />
                    </TabsContent>
                    <TabsContent value="done">
                        <TableDemo />
                    </TabsContent>
                </Tabs>
            </section>
        </main>
    )
}