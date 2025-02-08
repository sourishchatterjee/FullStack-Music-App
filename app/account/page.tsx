
"use client";

import { useSessionContext } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaMusic } from "react-icons/fa";
import Header from "@/components/Header";

export default function ProfilePage() {
  const { session, supabaseClient } = useSessionContext();
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      if (!session?.user?.id) {
        setLoading(false);
        return;
      }
      const { data, error } = await supabaseClient
        .from("Users")
        .select("id, first_name, last_name, full_name, avatar_url")
        .eq("id", session.user.id)
        .single();

      if (!error) {
        setUserData(data);
      }
      setLoading(false);
    };

    fetchProfile();
  }, [session, supabaseClient]);

  if (!session) {
    return (
      <div className="flex items-center justify-center h-screen text-red-400 font-semibold text-xl">
        Please log in to access your profile.
      </div>
    );
  }

  if (loading) return <div className="flex items-center justify-center h-screen text-gray-400">Loading...</div>;

  const email = session.user?.email || "";
  const displayName = userData?.full_name || email.split("@")[0];

  return (
    <Header className="from-bg-neutral-900">
    <div className="flex flex-col items-center gap-6 p-8 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-200 text-black rounded-xl shadow-xl max-w-lg mx-auto mt-16 border border-gray-400">
      
      <div className="relative">
        {userData?.avatar_url ? (
          <Image
            src={userData.avatar_url}
            alt="Profile Picture"
            width={150}
            height={150}
            className="rounded-full border-4 border-purple-500 shadow-lg"
          />
        ) : (
          <div className="w-36 h-36 rounded-full bg-gray-500 flex items-center justify-center text-4xl text-purple-600">
            <FaMusic />
          </div>
        )}
      </div>

      <div className="text-center">
        <h5 className="text-2xl font-bold text-purple-600">{displayName}</h5>
        <p className="text-lg text-gray-600">{email}</p>
        <p className="text-sm text-gray-500">User ID: {userData?.id || "N/A"}</p>
      </div>

      <button
        className="px-6 py-2 bg-purple-600 hover:bg-purple-500 transition-all duration-300 text-white font-semibold rounded-lg shadow-md"
      >
        Edit Profile
      </button>
      
    </div>
    </Header>
  );
}
