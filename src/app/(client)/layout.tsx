import Navbar from "@/components/layout/navbar";

export default function layout(
    { children }: { children: React.ReactNode }
) {
    return (
        <main className="w-full space-y-4">
            <Navbar />
            <section className="container mx-auto">
                {children}
            </section>
        </main>
    )
}
