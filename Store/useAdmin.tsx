// // // hooks/useAdmin.tsx
// // import { useEffect, useState } from 'react';
// // import { useSupabaseClient } from '@supabase/auth-helpers-react';
// // import { useUser } from '@/Store/useUser';

// // export const useAdmin = () => {
// //   const { user } = useUser();
// //   const [isAdmin, setIsAdmin] = useState(false);
// //   const [isLoading, setIsLoading] = useState(true);
// //   const supabaseClient = useSupabaseClient();

// //   useEffect(() => {
// //     const checkAdminStatus = async () => {
// //       if (!user?.id) {
// //         setIsAdmin(false);
// //         setIsLoading(false);
// //         return;
// //       }

// //       try {
// //         const { data, error } = await supabaseClient
// //           .from('users')
// //           .select('role')
// //           .eq('id', user.id)
// //           .single();

// //         if (error) throw error;
// //         setIsAdmin(data?.role === 'admin');
// //       } catch (error) {
// //         console.error('Error checking admin status:', error);
// //         setIsAdmin(false);
// //       } finally {
// //         setIsLoading(false);
// // //       }
// // //     };

// // //     checkAdminStatus();
// // //   }, [user, supabaseClient]);

// // //   return { isAdmin, isLoading };
// // // };

// // // export default useAdmin;

// // import { useEffect, useState } from 'react';
// // import { useSupabaseClient } from '@supabase/auth-helpers-react';
// // import { useUser } from '@/Store/useUser';

// // export const useAdmin = () => {
// //   const { user } = useUser();
// //   const [isAdmin, setIsAdmin] = useState(false);
// //   const [isLoading, setIsLoading] = useState(true);
// //   const supabaseClient = useSupabaseClient();

// //   useEffect(() => {
// //     const checkAdminStatus = async () => {
// //       if (!user?.id) {
// //         setIsAdmin(false);
// //         setIsLoading(false);
// //         return;
// //       }

// //       try {
// //         const { data, error } = await supabaseClient.auth.getUser();
        
// //         if (error) throw error;
        
// //         // Supabase stores the role under `data.user.app_metadata.role`
// //         setIsAdmin(data?.user?.app_metadata?.role === 'admin');
// //       } catch (error) {
// //         console.error('Error checking admin status:', error);
// //         setIsAdmin(false);
// //       } finally {
// //         setIsLoading(false);
// //       }
// //     };

// //     checkAdminStatus();
// //   }, [user, supabaseClient]);

// //   return { isAdmin, isLoading };
// // };

// // export default useAdmin;


// import { useEffect, useState } from 'react';
// import { useSupabaseClient } from '@supabase/auth-helpers-react';
// import { useUser } from '@/Store/useUser';

// export const useAdmin = () => {
//   const { user } = useUser();
//   const [isAdmin, setIsAdmin] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);
//   const supabaseClient = useSupabaseClient();

//   useEffect(() => {
//     const checkAdminStatus = async () => {
//       if (!user?.id) {
//         setIsAdmin(false);
//         setIsLoading(false);
//         return;
//       }

//       try {
//         // Fetch user data with authentication validation
//         const { data, error } = await supabaseClient.auth.getUser();
//         if (error) throw error;

//         // Extract role from app_metadata
//         const userRole = data?.user?.app_metadata?.role;

//         console.log("User role:", userRole); // Debugging: Check role in console

//         setIsAdmin(userRole === 'admin');
//       } catch (error) {
//         console.error('Error checking admin status:', error);
//         setIsAdmin(false);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     checkAdminStatus();
//   }, [user, supabaseClient]);

//   return { isAdmin, isLoading };
// };

// export default useAdmin;
