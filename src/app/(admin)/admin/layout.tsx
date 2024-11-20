export default function layout(
    { children } : { children: React.ReactNode }
) {
  return (
    <main className="w-full space-y-4">
        <section>
            {children}
        </section>
    </main>
  )
}
