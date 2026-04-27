import MainSection from "@/src/components/main/MainSection";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <section className="w-full flex justify-center sm:px-6">
        <MainSection />
      </section>
    </main>
  );
}