import HeaderBlock from "@/components/home/header-block";
import FooterBlock from "@/components/home/footer-block";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <HeaderBlock />

      <main className="flex-1">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>

      <FooterBlock />
    </div>
  );
}
