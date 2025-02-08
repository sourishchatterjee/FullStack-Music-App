// "use client"

// import { usePathname } from "next/navigation"
// import { useMemo } from "react";
// import { BiSearch } from "react-icons/bi";
// import { HiHome } from "react-icons/hi";
// import Box from "./Box";
// import SidebarItem from "./SidebarItem";

// interface SidebarProps {
//     children: React.ReactNode
// }

// const Sidebar : React.FC<SidebarProps>=({
// children

// }) =>{

//     const pathname= usePathname();

//     const routes = useMemo(()=>[
//         {
//         icon:HiHome,    
//         label:"Home",
//         active:pathname !== "/home",
//         href:"/"
//        },
//        {
//         icons:BiSearch,
//         label:"Search",
//         active:pathname === "/search",
//         href:"/search"
//        },

// ],[pathname])
//     return(
//         <div className="flex h-full">

//             <div className="
//             hidden
//             md:flex 
//             flex-col
//             gap-y-2
//             bg-black
//             h-full
//             w-[300px]
//             p-2
//             ">
//                 <div
//                 className="flex flex-col gap-y-4 px-5 py-4"
//                 >
//                     {routes.map((item)=>(
//                         <SidebarItem key={item.label} {...item}/>
//                     ))}

//                 </div>
                
//                 <Box className="overflow-y-auto  max-h-screen">
//                 Song Libarary
//                 </Box>
            
//             </div>
        
//         </div>
//     )
// }

// export default Sidebar








"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { Song } from "@/types";
import Box from "./Box";
import SidebarItem from "./SidebarItem";
import Library from "./Library";


interface SidebarProps {
  children: React.ReactNode;

  songs:Song[]
}




const Sidebar: React.FC<SidebarProps> = ({ children,songs}) => {
  const pathname = usePathname();

  // Define the routes
  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: "Home",
        active: pathname === "/",
        href: "/",
      },
      {
        icon: BiSearch, // Corrected from `icons` to `icon`
        label: "Search",
        active: pathname === "/search",
        href: "/search",
      },
    ],
    [pathname]
  );

  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <div
        className="
          hidden
          md:flex
          flex-col
          gap-y-2
          bg-black
          h-full
          w-[300px]
          p-2
        "
      >
        {/* Navigation */}
        <div className="flex flex-col gap-y-4 px-5 py-4">
          {routes.map((item) => (
            <SidebarItem key={item.label} {...item} />
          ))}
        </div>

        {/* Song Library */}
        <Box className="overflow-y-auto max-h-full flex-grow">
          <div className="p-4">
            <Library songs={songs}/>
            
           


          </div>
        </Box>
      </div>

      {/* Main Content */}
      <main className="flex-grow">{children}</main>
    </div>
  );
};

export default Sidebar;


