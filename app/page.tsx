"use-clent"
import Image from "next/image"
import Link from "next/link"


const links = [
  { href: "/ https://www.linkedin.com/in/fawuzanibrahim/",  label:"linkedin.png", },
  { href: "/https://x.com/zanbuilds", label:"twitter.png", }
];

function DesktopNav() {
  return (
    <>
      <div className="min-h-[calc(100vh-6rem)] supports-[height:100dvh]:min-h-[calc(100dvh-6rem)] flex flex-col justify-between items-center text-center px-4">
        <nav className= "flex justify-center font-bold tracking-tighter text-sm md:text-[2rem] mt-11 w-[400px] h-[100px]  rounded-lg" >
          <ul className= "flex gap-4 justify-center mt-10 text-white w-4xl items-center rounded-2xl font-mono bg-fixed">
             {links.map((link) => (
              <Link  className="flex  justify-center gap-4 hover:text-shadow-sky-400" key={link.href} href={link.href}>
                <Image className="bg-white" src={`/${link.label}`}
                alt={link.label}
                width={28}
                height={28}
                />
                </Link>
            ))}
             </ul>
        </nav>
  </div>
    </>
  );
  
}

function Hero() {
  return(
    <>
    <div className="flex justify-center items-center mt-20 font-mono">
    <h1 className="flex justify-center align-center text-black">Hey i am fawuzan pima</h1>
    </div>
   
    </>
  )
}


function NavBar(){
  return (
  <div className="bg-neutral-300">
  <Hero />  
  <DesktopNav />
  </div>
  )
}

export default function Home() {
  return (
    <>
      <NavBar />
    </>
  );
}
