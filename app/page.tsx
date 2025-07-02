import Link from "next/link"

const links = [
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "contact" }
];

function DesktopNav() {
  return (
    <>
      <div className="flex justify-center items-center flex-1 max-w-xl  flex-col  ">
        <nav className= "flex justify-center items-center font-bold tracking-tighter text-4xl md:text-[4rem]" >
          <ul className= "flex gap-4 ">
            {links.map((link) => (
              <Link  className="flex gap-4" key={link.href} href={link.href}>{link.label}</Link>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}

// function MobileNav() {
//   return (
//     <>
//       <div className="flex justify-center items-center">
//         <nav>
//           <ul>
//             {links.map((link) => (
//               <Link key={link.href} href={link.href}>{link.label}</Link>
//             ))}
//           </ul>
//         </nav>
//       </div>
//     </>
//   );
// }

function MobileNavButton () {
  return <button>click</button>;
}

function NavBar(){
  return (
    <>
      <DesktopNav />
      {/* <MobileNav /> */}
      <MobileNavButton />
    </>
  )
}

export default function Home() {
  return (
    <>
      <NavBar />
    </>
  );
}
