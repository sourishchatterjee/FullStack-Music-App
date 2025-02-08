


// // //oSuUcyrLxkmwkEJv


// import getSongs from "@/actions/getSongs";
// import Header from "@/components/Header";
// import ListItems from "@/components/ListItems";
// import PageContent from "./components/PageContent";
// import Sidebar from "@/components/Sidebar";
// import getSongsByUserId from "@/actions/getSongsByUserId";

// export const revalidate = 0;

// export default async function Home() {
//   const songs = await getSongs();
//   const userSongs = await getSongsByUserId();
//   const currentDate = new Date();
//   const formattedDate = currentDate.toLocaleDateString('en-US', {
//     weekday: 'long',
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric'
//   });
//   const formattedTime = currentDate.toLocaleTimeString('en-US', {
//     hour: '2-digit',
//     minute: '2-digit',
//     hour12: true
//   });

//   return (
//     <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
//       <Sidebar songs={userSongs}>
//         <Header>
//           <div className="mb-2">
//             <h1 className="text-white text-3xl font-semibold">🎵 Welcome Back!</h1>
//             <div className="text-gray-300 mb-4">
//               {formattedDate} | {formattedTime}
//             </div>
//             <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-4">
//               <ListItems
//                 image="/images/love.png"
//                 name="Liked Songs"
//                 href="/myplaylist"
//               />
//             </div>
//           </div>
//         </Header>
//         <div className="mt-2 mb-7 px-6">
//           <div className="flex justify-between items-center">
//             <h1 className="text-white text-2xl font-semibold fade-in">
//               🔥 Newest Releases
//             </h1>
//           </div>
//           <PageContent songs={songs}/>
//         </div>
//       </Sidebar>
//     </div>
//   );
// }




import getSongs from "@/actions/getSongs";
import Header from "@/components/Header";
import ListItems from "@/components/ListItems";
import PageContent from "./components/PageContent";
import Sidebar from "@/components/Sidebar";
import getSongsByUserId from "@/actions/getSongsByUserId";

export const revalidate = 0;

export default async function Home() {
  const songs = await getSongs();
  const userSongs = await getSongsByUserId();
  
  const now = new Date();
  const musicEmojis = ['🎵', '🎸', '🎹', '🥁', '🎺', '🎷'];
  const currentEmoji = musicEmojis[now.getHours() % musicEmojis.length];
  
  const timeOfDay = 
    now.getHours() < 12 ? 'Morning' : 
    now.getHours() < 17 ? 'Afternoon' : 
    now.getHours() < 21 ? 'Evening' : 'Night';
  
  const seasonEmojis = {
    winter: '❄️',
    spring: '🌱',
    summer: '☀️',
    autumn: '🍁'
  };

  const getSeasonEmoji = () => {
    const month = now.getMonth();
    if (month >= 2 && month <= 4) return seasonEmojis.spring;
    if (month >= 5 && month <= 7) return seasonEmojis.summer;
    if (month >= 8 && month <= 10) return seasonEmojis.autumn;
    return seasonEmojis.winter;
  };

  return (
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Sidebar songs={userSongs}>
        <Header>
          <div className="mb-2">
            <h1 className="text-white text-3xl font-semibold">
              {currentEmoji} Good {timeOfDay}! {getSeasonEmoji()}
            </h1>
            <div className="text-gray-300 text-sm mb-4">
              {now.toLocaleString('default', { 
                weekday: 'long', 
                month: 'long', 
                day: 'numeric' 
              })} | {now.toLocaleTimeString('en-US', { 
                hour: '2-digit', 
                minute: '2-digit', 
                hour12: true 
              })}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-4">
              <ListItems
                image="/images/love.png"
                name="Liked Songs"
                href="/myplaylist"
              />
            </div>
          </div>
        </Header>
        <div className="mt-2 mb-7 px-6">
          <div className="flex justify-between items-center">
            <h1 className="text-white text-2xl font-semibold fade-in">
              🔥 Newest Releases
            </h1>
          </div>
          <PageContent songs={songs}/>
        </div>
      </Sidebar>
    </div>
  );
}