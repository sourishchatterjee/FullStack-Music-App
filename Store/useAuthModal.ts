import {create} from "zustand"


interface AuthModalStore {
    isOpen: boolean;
    onOpen: ()=> void;
    onClose: ()=>void;
};


const useAuthModal =create<AuthModalStore>((set)=>({

    isOpen:false,
    onOpen:()=>set({isOpen:true}),
    onClose:()=>set({isOpen:false}),
    
}));


export default useAuthModal;





// import { create } from "zustand";
// import { PrismaClient } from "@prisma/client";

// // Initialize Prisma Client
// const prisma = new PrismaClient();

// interface AuthModalStore {
//   isOpen: boolean;
//   user: { id: string; full_name: string | null; avatar_url: string | null } | null;
//   onOpen: () => void;
//   onClose: () => void;
//   loginUser: (email: string, password: string) => Promise<void>;
//   logoutUser: () => void;
// }

// const useAuthModal = create<AuthModalStore>((set) => ({
//   isOpen: false,
//   user: null, // Default user is null, means not logged in
//   onOpen: () => set({ isOpen: true }),
//   onClose: () => set({ isOpen: false }),

//   // Login function: Checks user credentials and sets user state
//   loginUser: async (email: string, password: string) => {
//     try {
//       // Fetch the user from the database using the correct model (auth_users)
//       const user = await prisma.auth_users.findUnique({
//         where: { email },
//         include: {
//           public_users: true, // Include the related public_users model
//         },
//       });

//       // Check if the user exists
//       if (!user) {
//         throw new Error("User not found");
//       }

//       // Add password validation logic here (using bcrypt or similar)
//       const passwordMatches = password === user.password; // Replace with bcrypt.compare() logic

//       if (!passwordMatches) {
//         throw new Error("Incorrect password");
//       }

//       // Set the user in the Zustand state, including user-related data from public_users
//       set({
//         user: {
//           id: user.public_users.id,
//           full_name: user.public_users.full_name,
//           avatar_url: user.public_users.avatar_url,
//         },
//       });
//     } catch (error) {
//       console.error("Error logging in:", error);
//       // Optionally handle errors (like setting error state)
//     }
//   },

//   // Logout function: Clears the user state
//   logoutUser: () => {
//     set({ user: null });
//   },
// }));

// export default useAuthModal;
