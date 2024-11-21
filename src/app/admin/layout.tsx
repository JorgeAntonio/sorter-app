import { HeaderSection } from "@/components/header-section";
import Navbar from "@/components/layout/navbar";
import { NavigationBar } from "@/components/layout/navigation-bar";

export default function layout(
  { children }: { children: React.ReactNode }
) {
  return (
    <main className="w-full space-y-4">
      <Navbar />
      <section className="container mx-auto flex justify-between border-b">
        <HeaderSection
          title="Panel de administración"
          description="Administra tus sorteos, premios y tickets."
        />
        <NavigationBar />
      </section>
      <section className="container mx-auto">
        {children}
      </section>
    </main>
  )
}
