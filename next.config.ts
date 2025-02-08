// // import type { NextConfig } from "next";

// // const nextConfig: NextConfig = {
// //   images:{
// //     domains:[
// //       'supabase.com/dashboard/project/qxqwpafhumbdkzkmdsfj/storage/buckets/images'
// //     ]
// //   }
// // };

// // export default nextConfig;



// // import type { NextConfig } from "next";

// // const nextConfig: NextConfig = {
// //   images: {
// //     remotePatterns: [
// //       {
// //         protocol: 'https',
// //         hostname: 'qxqwpafhumbdkzkmdsfj.supabase.co',
// //         pathname: '/storage/v1/object/public/images/*',
// //       },
// //     ],
// //   },
// // };

// // export default nextConfig;



// //qxqwpafhumbdkzkmdsfj


// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'qxqwpafhumbdkzkmdsfj.supabase.co',
//         pathname: '/storage/v1/object/public/images/*',
//       },
//     ],
//   },
// };

// export default nextConfig;






/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["qxqwpafhumbdkzkmdsfj.supabase.co"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "qxqwpafhumbdkzkmdsfj.supabase.co",
        pathname: "/storage/v1/object/public/images/**",
      },
    ],
  },
};

export default nextConfig;