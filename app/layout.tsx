import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
//import Sidebar from "@/components/Sidebar";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider"
import ModalProvider from "@/providers/ModelProvider"
import ToasterProvider from "@/providers/ToasterProvider";
//import getSongsByUserId from "@/actions/getSongsByUserId";
import Player from "@/components/Player";

// Define custom fonts
const geistSans = Figtree({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Figtree({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Music App", 
  description: "Stream and manage your favorite music seamlessly.", 
};

export const revalidate =0;

export default async  function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


//const userSongs=await getSongsByUserId()


  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 text-white`}
      >
        <ToasterProvider/>
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider/>
          <div className="flex min-h-screen">
          
            {/* <Sidebar  songs={userSongs} >
            <h1></h1>
            </Sidebar> */}
            
            {/* Main Content */}
         <main className="flex-1 p-4">
          {children}
          </main>
          </div>
          <Player/>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}



