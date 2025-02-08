// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import toast from "react-hot-toast";

// const AdminLogin: React.FC = () => {
//   const [passkey, setPasskey] = useState<string>("");
//   const [loading, setLoading] = useState<boolean>(false);
//   const router = useRouter();

//   // Define a hardcoded passkey (you can store this securely on the server)
//   const ADMIN_PASSKEY = "Sourish1234";

//   const handleLogin = () => {
//     setLoading(true);

//     // Simulate a simple passkey check
//     setTimeout(() => {
//       if (passkey === ADMIN_PASSKEY) {
//         toast.success("Welcome Admin!");
//         router.push("/demo"); // Redirect to admin dashboard
//       } else {
//         toast.error("Invalid Passkey. Please try again.");
//       }
//       setLoading(false);
//     }, 1000); // Simulate network delay
//   };

//   return (
//     <div className="flex items-center justify-center h-screen bg-neutral-900">
//       <div className="bg-neutral-800 p-6 rounded-lg shadow-md w-full max-w-sm">
//         <h2 className="text-white text-lg font-semibold mb-4">Admin Login</h2>
//         <div className="flex flex-col gap-y-4">
//           <input
//             type="password"
//             className="bg-neutral-700 text-white px-4 py-2 rounded focus:outline-none"
//             placeholder="Enter Passkey"
//             value={passkey}
//             onChange={(e) => setPasskey(e.target.value)}
//           />
//           <button
//             onClick={handleLogin}
//             disabled={loading}
//             className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition disabled:opacity-50"
//           >
//             {loading ? "Logging in..." : "Login"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminLogin;


























/////////////////////////






















"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const AdminLogin: React.FC = () => {
  const [passkey, setPasskey] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  // Define a hardcoded passkey (you can store this securely on the server)
  const ADMIN_PASSKEY = "Sourish1234";

  const handleLogin = () => {
    setLoading(true);

    // Simulate a simple passkey check
    setTimeout(() => {
      if (passkey === ADMIN_PASSKEY) {
        // Set a cookie to track successful login
        document.cookie = "visitedAdmin=true; path=/; max-age=300"; // expires in 5 minutes
        
        toast.success("Welcome Admin!");
        router.push("/demo"); // Redirect to demo page
      } else {
        toast.error("Invalid Passkey. Please try again.");
      }
      setLoading(false);
    }, 1000); // Simulate network delay
  };

  return (
    <div className="flex items-center justify-center h-screen bg-neutral-900">
      <div className="bg-neutral-800 p-6 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-white text-lg font-semibold mb-4">Admin Login</h2>
        <div className="flex flex-col gap-y-4">
          <input
            type="password"
            className="bg-neutral-700 text-white px-4 py-2 rounded focus:outline-none"
            placeholder="Enter Passkey"
            value={passkey}
            onChange={(e) => setPasskey(e.target.value)}
          />
          <button
            onClick={handleLogin}
            disabled={loading}
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
