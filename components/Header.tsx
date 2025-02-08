
"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Button from "./Button";
import useAuthModal from "@/Store/useAuthModal";

import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useUser } from "@/Store/useUser";
import { FaUserAlt } from "react-icons/fa";
import toast from "react-hot-toast";


interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  
  const authModal= useAuthModal();
  const router = useRouter();

  const supabaseClient =useSupabaseClient();
  const {user,}= useUser();


  const handleLogout = async() => {
    const {error} = await supabaseClient.auth.signOut();
    //TODO:Reset any playing Songs
    router.refresh();

    if(error){
      toast.success(error.message)
    } else {
      toast.success("Logged out!")
    }
  };

  return (


    <div
      className={twMerge(
        `
        h-fit
        bg-gradient-to-b
        from-cyan-700
        p-4
      `,
        className
      )}
    >
      <div className="w-full mb-8 flex items-center justify-between">
        {/* Navigation Controls */}
        <div className="hidden md:flex gap-x-6 items-center">
          <button
            onClick={() => router.back()}
            className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition p-2"
          >
            <RxCaretLeft className="text-white" size={35} />
          </button>
          <button
            onClick={() => router.forward()}
            className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition p-2"
          >
            <RxCaretRight className="text-white" size={35} />
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden gap-x-2 items-center">
          <button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition">
            <HiHome className="text-black" size={20} />
          </button>
          <button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition">
            <BiSearch className="text-black" size={20} />
          </button>
        </div>



        {/* Authentication Buttons */}
        <div className="flex items-center gap-x-4">
        {user ?(
          <div  className="flex gap-x-4 items-center">
            <Button
            onClick={handleLogout}
            className="bg-white px-6 py-2"
            >
              Logout
            </Button>
           <Button
           onClick={()=>router.push("/account")}
           className="bg-white"
           
           >
            <FaUserAlt/>
           </Button>

            </div>
        ):(
          <div>
          <Button
            onClick={authModal.onOpen}
            className="bg-transparent text-neutral-300 font-medium"
          >
            Signup
          </Button>
          <Button
            onClick={authModal.onOpen}
            className="bg-white px-4 py-2 hover:bg-lime-200"
          >
            Login
          </Button>
          </div>
)}
        </div>
      </div>

      {/* Children Content */}
      {children}
    </div>
  );
};

export default Header;









// "use client";
// import { useRouter } from "next/navigation";
// import React from "react";
// import { twMerge } from "tailwind-merge";
// import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
// import { HiHome } from "react-icons/hi";
// import { BiSearch } from "react-icons/bi";
// import Button from "./Button";
// import useAuthModal from "@/Store/useAuthModal";
// import { useSupabaseClient } from "@supabase/auth-helpers-react";
// import { useUser } from "@/Store/useUser";
// import { FaUserAlt } from "react-icons/fa";
// import toast from "react-hot-toast";

// interface HeaderProps {
//   children: React.ReactNode;
//   className?: string;
// }

// const Header: React.FC<HeaderProps> = ({ children, className }) => {
//   const authModal = useAuthModal();
//   const router = useRouter();
//   const supabaseClient = useSupabaseClient();
//   const { user } = useUser();

//   const handleLogout = async () => {
//     const { error } = await supabaseClient.auth.signOut();
//     router.refresh();
//     if (error) {
//       toast.error(error.message);
//     } else {
//       toast.success("Logged out!");
//     }
//   };

//   return (
//     <div
//       className={twMerge(
//         `
//         h-fit
//         bg-gradient-to-b
//         from-orange-100/80
//         via-orange-50/70
//         to-orange-50/60
//         backdrop-blur-sm
//         p-6
//         shadow-sm
//         `,
//         className
//       )}
//     >
//       <div className="w-full mb-6 flex items-center justify-between">
//         {/* Navigation Controls */}
//         <div className="hidden md:flex gap-x-4 items-center">
//           <button
//             onClick={() => router.back()}
//             className="rounded-full bg-orange-200/40 flex items-center justify-center 
//                      hover:bg-orange-200/60 transition-all duration-300 p-1 
//                      backdrop-blur-sm"
//           >
//             <RxCaretLeft className="text-orange-700" size={34} />
//           </button>
//           <button
//             onClick={() => router.forward()}
//             className="rounded-full bg-orange-200/40 flex items-center justify-center 
//                      hover:bg-orange-200/60 transition-all duration-300 p-1 
//                      backdrop-blur-sm"
//           >
//             <RxCaretRight className="text-orange-700" size={34} />
//           </button>
//         </div>

//         {/* Mobile Controls */}
//         <div className="flex md:hidden gap-x-3 items-center">
//           <button 
//             className="rounded-full p-2 bg-orange-200/40 flex items-center justify-center 
//                      hover:bg-orange-200/60 transition-all duration-300 backdrop-blur-sm"
//           >
//             <HiHome className="text-orange-700" size={20} />
//           </button>
//           <button 
//             className="rounded-full p-2 bg-orange-200/40 flex items-center justify-center 
//                      hover:bg-orange-200/60 transition-all duration-300 backdrop-blur-sm"
//           >
//             <BiSearch className="text-orange-700" size={20} />
//           </button>
//         </div>

//         {/* Authentication Buttons */}
//         <div className="flex items-center gap-x-4">
//           {user ? (
//             <div className="flex gap-x-4 items-center">
//               <Button
//                 onClick={handleLogout}
//                 className="bg-orange-300/80 hover:bg-orange-400/80 text-orange-800 
//                          px-6 py-2 transition-all duration-300 rounded-full 
//                          font-medium shadow-sm backdrop-blur-sm"
//               >
//                 Logout
//               </Button>
//               <Button
//                 onClick={() => router.push("/account")}
//                 className="bg-orange-200/40 hover:bg-orange-200/60 p-2.5 
//                          text-orange-700 transition-all duration-300 
//                          rounded-full backdrop-blur-sm"
//               >
//                 <FaUserAlt size={16} />
//               </Button>
//             </div>
//           ) : (
//             <div className="flex items-center gap-x-4">
//               <Button
//                 onClick={authModal.onOpen}
//                 className="bg-white/70 hover:bg-white/80 px-6 py-2 
//                          text-orange-600 transition-all duration-300 
//                          rounded-full font-medium shadow-sm backdrop-blur-sm"
//               >
//                 Sign up
//               </Button>
//               <Button
//                 onClick={authModal.onOpen}
//                 className="bg-orange-300/80 hover:bg-orange-400/80 px-6 py-2 
//                          text-orange-800 transition-all duration-300 
//                          rounded-full font-medium shadow-sm backdrop-blur-sm"
//               >
//                 Log in
//               </Button>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Children Content */}
//       {children}
//     </div>
//   );
// };

// export default Header;