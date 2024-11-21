import { HeaderSection } from "@/components/header-section";
import Navbar from "@/components/layout/navbar";
import { NavigationBar } from "@/components/layout/navigation-bar";

export default function layout(
  { children }: { children: React.ReactNode }
) {
  return (
    <main className="w-full space-y-4">
      <Navbar />
      <section className="container mx-auto">
        <HeaderSection
          title="Admin"
          description="Welcome to the admin page."
        />
        <NavigationBar />
      </section>
      <section className="container mx-auto">
        {children}
      </section>
    </main>
  )
}
