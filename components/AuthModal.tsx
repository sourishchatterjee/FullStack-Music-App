// "use client"
// import { useEffect } from "react";
// import { useSessionContext, useSupabaseClient } from "@supabase/auth-helpers-react"
// import Modal from "./Modal"
// import { useRouter } from "next/navigation";
// import { Auth } from "@supabase/auth-ui-react";
// import { ThemeSupa } from "@supabase/auth-ui-shared";
// import useAuthModal from "@/Store/useAuthModal";
// import Button from "./Button";


// const AuthModal = ()=>{

// const supabaseClient = useSupabaseClient();
// const router= useRouter();
// const {session} = useSessionContext();
// const {onClose, isOpen}=useAuthModal();
// const router1= useRouter();



// useEffect(()=>{
//     if(session){
//         router.refresh();
//         onClose();
//     }



// },[session, router, onClose])

// const onChange =(open:boolean)=>{
//     if(!open){
//         onClose();
//     }
// }

//     return(
    
//         <Modal
//         title="welcome back"
//         description=" Login to your account" 
//         isOpen={isOpen}
//         onChange={onChange}
//         >
//             <Auth
//             theme="dark"
//             providers={["github"]}
//             supabaseClient={supabaseClient}
//             appearance={{
//                     theme:ThemeSupa,
//                     variables:{
//                         default:{
//                             colors:{
//                                 brand: "#404040",
//                                 brandAccent:"#22c55e"
//                             }
//                         }
//                     }
//                 }}
            
//             />
//             <Button
//              onClick={()=>router1.push("/admin")}      
//               className="
//               bg-gradient-to-r
//               from-blue-500 
//               via-purple-500
//               to-indigo-500 
//               text-white 
//               font-semibold 
//               px-6 py-2 
//               rounded-2xl 
//               shadow-lg 
//               hover:from-indigo-500 
//               hover:via-purple-500 
//               hover:to-blue-500 
//               transition-all 
//               duration-300
//               ease-in-out 
//               transform 
//               hover:scale-105"
//             >
//              Admin
//             </Button>
//             Auth modal  children!
//         </Modal>
//     )
// }

// export default AuthModal;




"use client"
import { useEffect } from "react";
import { useSessionContext, useSupabaseClient } from "@supabase/auth-helpers-react"
import Modal from "./Modal"
import { useRouter } from "next/navigation";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import useAuthModal from "@/Store/useAuthModal";
import Button from "./Button";

const AuthModal = () => {
  const supabaseClient = useSupabaseClient();
  const router = useRouter();
  const { session } = useSessionContext();
  const { onClose, isOpen } = useAuthModal(); // onClose is from the store
  const router1 = useRouter();

  useEffect(() => {
    if (session) {
      router.refresh();
      onClose(); // Close the modal when session exists
    }
  }, [session, router, onClose]);

  const onChange = (open: boolean) => {
    if (!open) {
      onClose(); // Close the modal when open is false
    }
  };

  return (
    <Modal
      title="Welcome back"
      description="Login to your account"
      isOpen={isOpen}
      onChange={onChange}
      onClose={onClose} // Pass onClose prop here
    >
      <Auth
        theme="dark"
        providers={["github"]}
        supabaseClient={supabaseClient}
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                brand: "#404040",
                brandAccent: "#22c55e"
              }
            }
          }
        }}
      />
      <Button
        onClick={() => router1.push("/admin")}
        className="
          bg-gradient-to-r
          from-blue-500 
          via-purple-500
          to-indigo-500 
          text-white 
          font-semibold 
          px-6 py-2 
          rounded-2xl 
          shadow-lg 
          hover:from-indigo-500 
          hover:via-purple-500 
          hover:to-blue-500 
          transition-all 
          duration-300
          ease-in-out 
          transform 
          hover:scale-105"
      >
        Admin
      </Button>
      Auth modal children!
    </Modal>
  );
}

export default AuthModal;
