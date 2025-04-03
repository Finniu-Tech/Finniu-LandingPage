import Hero from "@/app/(new-landing)/Home/Hero/Hero"
import Whoweare from "@/app/(new-landing)/Home/Whoweare/Whoweare"
import Ready from "@/app/(new-landing)/Home/Ready/Ready"
import Invest from "@/app/(new-landing)/Home/Invest/Invest"
import Theysay from "@/app/(new-landing)/Home/Theysay/Theysay"
import Questions from "@/app/(new-landing)/Home/Questions/Questions"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Whoweare />
      <Ready />
      <Invest />
      <Theysay />
      <Questions />
    </main>
  );
}
