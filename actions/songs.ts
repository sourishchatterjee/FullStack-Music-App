import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/app/lib/db"; // Ensure Prisma is correctly imported

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      const allSongs = await prisma.songs.findMany({
        include: { users: true }, // Fetch songs with user details
      });
      return res.status(200).json(allSongs);
    } catch (error) {
      return res.status(500).json({ message: "Error fetching songs", error });
    }
  }

  if (req.method === "POST") {
    try {
      const { title, author, song_path, image_path, user_id } = req.body;
      const newSong = await prisma.songs.create({
        data: { title, author, song_path, image_path, user_id },
      });
      return res.status(201).json(newSong);
    } catch (error) {
      return res.status(500).json({ message: "Error adding song", error });
    }
  }

  if (req.method === "DELETE") {
    try {
      const { id } = req.body;
      if (!id) return res.status(400).json({ message: "Song ID is required" });

      await prisma.songs.delete({ where: { id: BigInt(id) } });
      return res.status(200).json({ message: "Song deleted successfully" });
    } catch (error) {
      return res.status(500).json({ message: "Error deleting song", error });
    }
  }

  return res.status(405).json({ message: "Method Not Allowed" });
}
