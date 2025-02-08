// import { prisma } from "@/app/lib/db";

// // Get all songs
// export async function getAllSongs() {
//   return await prisma.songs.findMany({ include: { users: true } });
// }

// // Get a single song by ID
// export async function getSongById(songId: number) {
//   return await prisma.songs.findUnique({ where: { id: BigInt(songId) } });
// }

// // Create a new song
// export async function createSong(data: { title: string; author: string; song_path: string; image_path: string; user_id: string }) {
//   return await prisma.songs.create({ data });
// }

// // Update a song
// export async function updateSong(songId: number, data: Partial<{ title: string; author: string; song_path: string; image_path: string }>) {
//   return await prisma.songs.update({ where: { id: BigInt(songId) }, data });
// }

// // Delete a song
// export async function deleteSong(songId: number) {
//   return await prisma.songs.delete({ where: { id: BigInt(songId) } });
// }
