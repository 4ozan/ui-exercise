import { NavBar } from "@/app/components/Navbar"
import { Hero }  from "@/app/components/Hero"
import { Skills } from "@/app/components/Skills"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <Hero />
      <NavBar />
      <Skills />
     
      
     
     
    
    </div>
  );
}