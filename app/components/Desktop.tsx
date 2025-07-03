"use-clent"
import Image from "next/image"
import Link from "next/link"

const li="/ https://www.linkedin.com/in/fawuzanibrahim/";
const x = "/https://x.com/zanbuilds"

const links = [
  { href:li,  label:"linkedin.png", },
  { href:x, label:"twitter.png", }
];

export function DesktopNav() {
  return (
    <>
      <div className="min-h-[calc(100vh-6rem)] supports-[height:100dvh]:min-h-[calc(100dvh-6rem)] flex flex-col justify-between items-center text-center px-4">
        <nav className= "flex justify-center font-bold tracking-tighter text-sm md:text-[2rem] mt-11 w-[400px] h-[100px]  rounded-lg" >
          <ul className= "flex gap-2 opacity-35 justify-center mt-10 bg-[#585252] text-white w-[200px] items-center rounded-2xl font-mono bg-fixed ">
            {links.map((link) => (
              <Link  className="flex  justify-center gap-4 hover:text-shadow-sky-400" key={link.href} href={link.href}>
                <Image className="border-none bg-[#585252]" src={`/${link.label}`}
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

