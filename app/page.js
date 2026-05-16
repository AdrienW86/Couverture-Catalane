import Banner from "@/components/Banner/Banner";
import Services from "@/components/Services/Services";

export const metadata = {
  title: "Couverture Catalane | Couvreur Professionnel à Perpignan",
  description: "Artisan couvreur de confiance à Perpignan et dans les Pyrénées-Orientales. Devis gratuit pour vos travaux de toiture, zinguerie, charpente et nettoyage.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-red-500 selection:text-white">
      <main className="flex flex-col w-full">
        <Banner />      
        <Services /> 
      </main>      
    </div>
  );
}