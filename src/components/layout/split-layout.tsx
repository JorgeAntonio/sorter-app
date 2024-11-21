interface SplitLayoutProps {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
}

export default function SplitLayout({
  leftContent,
  rightContent,
}: SplitLayoutProps) {
  return (
    <main className="flex gap-8 py-4">
      <section className="h-full">{leftContent}</section>
      <hr className={"border-r border-gray-200 h-auto w-1"} />
      <section className="flex-1 h-full w-full">{rightContent}</section>
    </main>
  );
}
