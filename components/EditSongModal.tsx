// "use client";

// import { useState } from "react";
// import { Dialog, DialogContent, DialogTitle } from "@mui/material";
// import { useSessionContext } from "@supabase/auth-helpers-react";
// import toast from "react-hot-toast";

// interface EditSongModalProps {
//   open: boolean;
//   onClose: () => void;
//   song: { id: string; title: string; author: string };
//   onUpdate: (updatedSong: { id: string; title: string; author: string }) => void;
// }

// const EditSongModal: React.FC<EditSongModalProps> = ({ open, onClose, song, onUpdate }) => {
//   const { supabaseClient } = useSessionContext();
//   const [title, setTitle] = useState(song.title);
//   const [author, setAuthor] = useState(song.author);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSave = async () => {
//     setIsLoading(true);
//     const { error } = await supabaseClient
//       .from("songs")
//       .update({ title, author })
//       .eq("id", song.id);

//     setIsLoading(false);

//     if (error) {
//       toast.error("Failed to update song");
//     } else {
//       onUpdate({ id: song.id, title, author });
//       toast.success("Song updated successfully");
//       onClose();
//     }
//   };

//   return (
//     <Dialog open={open} onClose={onClose}>
//       <DialogTitle>Edit Song</DialogTitle>
//       <DialogContent className="p-4">
//         <input
//           type="text"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           className="w-full p-2 border rounded mb-2"
//           placeholder="Song Title"
//         />
//         <input
//           type="text"
//           value={author}
//           onChange={(e) => setAuthor(e.target.value)}
//           className="w-full p-2 border rounded mb-2"
//           placeholder="Artist"
//         />
//         <div className="flex justify-end mt-4">
//           <button onClick={onClose} className="mr-2 px-4 py-2 bg-gray-500 text-white rounded">
//             Cancel
//           </button>
//           <button
//             onClick={handleSave}
//             disabled={isLoading}
//             className="px-4 py-2 bg-blue-600 text-white rounded"
//           >
//             {isLoading ? "Saving..." : "Save"}
//           </button>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default EditSongModal;



// "use client";

// import { useState, useEffect } from "react";
// import Modal from "@/components/Modal";
// import { Song } from "@/types";
// import { useSessionContext } from "@supabase/auth-helpers-react";
// import toast from "react-hot-toast";

// interface EditSongModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   song: Song;
//   onUpdate: (updatedSong: Song) => void;
// }

// const EditSongModal: React.FC<EditSongModalProps> = ({ isOpen, onClose, song, onUpdate }) => {
//   const { supabaseClient } = useSessionContext();
//   const [formData, setFormData] = useState({ title: "", author: "" });
//   const [isUpdating, setIsUpdating] = useState(false);

//   // Reset form data when modal opens
//   useEffect(() => {
//     if (isOpen) {
//       setFormData({ title: song.title, author: song.author });
//     }
//   }, [isOpen, song]);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     // Prevent unnecessary updates
//     if (formData.title === song.title && formData.author === song.author) {
//       toast("No changes detected.", { icon: "ℹ️" });
//       onClose();
//       return;
//     }

//     setIsUpdating(true);

//     const { error } = await supabaseClient
//       .from("songs")
//       .update({ title: formData.title, author: formData.author })
//       .eq("id", song.id);

//     setIsUpdating(false);

//     if (error) {
//       toast.error(`Failed to update song: ${error.message}`);
//       return;
//     }

//     toast.success("Song updated successfully!");
//     onUpdate({ ...song, title: formData.title, author: formData.author });
//     onClose();
//   };

//   return (
//     <Modal isOpen={isOpen} onClose={onClose} title="Edit Song">
//       <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//         <input
//           type="text"
//           name="title"
//           value={formData.title}
//           onChange={handleChange}
//           placeholder="Song Title"
//           className="p-2 rounded bg-neutral-700 text-white w-full"
//         />
//         <input
//           type="text"
//           name="author"
//           value={formData.author}
//           onChange={handleChange}
//           placeholder="Artist Name"
//           className="p-2 rounded bg-neutral-700 text-white w-full"
//         />
//         <div className="flex justify-end gap-2">
//           <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-500 text-white rounded">
//             Cancel
//           </button>
//           <button type="submit" disabled={isUpdating} className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-blue-300">
//             {isUpdating ? "Updating..." : "Save"}
//           </button>
//         </div>
//       </form>
//     </Modal>
//   );
// };

// export default EditSongModal;

// "use client"

// import { useState, useEffect } from "react";
// import Modal from "@/components/Modal";
// import { Song } from "@/types";
// import { useSessionContext } from "@supabase/auth-helpers-react";
// import toast from "react-hot-toast";

// interface EditSongModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   song: Song;
//   onUpdate: (updatedSong: Song) => void;
//   onClick: boolean;
// }

// const EditSongModal: React.FC<EditSongModalProps> = ({ isOpen, onClose, song, onUpdate }) => {
//   const { supabaseClient } = useSessionContext();
//   const [formData, setFormData] = useState({ title: "", author: "" });
//   const [isUpdating, setIsUpdating] = useState(false);

//   useEffect(() => {
//     if (isOpen) {
//       setFormData({ title: song.title, author: song.author });
//     }
//   }, [isOpen, song]);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (formData.title === song.title && formData.author === song.author) {
//       toast("No changes detected.", { icon: "ℹ️" });
//       onClose();
//       return;
//     }

//     setIsUpdating(true);

//     const { error } = await supabaseClient
//       .from("songs")
//       .update({ title: formData.title, author: formData.author })
//       .eq("id", song.id);

//     setIsUpdating(false);

//     if (error) {
//       toast.error(`Failed to update song: ${error.message}`);
//       return;
//     }

//     toast.success("Song updated successfully!");
//     onUpdate({ ...song, title: formData.title, author: formData.author });
//     onClose();
//   };

//   return (

//     <Modal isOpen={isOpen} 
//     onClose={onClose} title="Edit Song">
//       <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//         <input
//           type="text"
//           name="title"
//           value={formData.title}
//           onChange={handleChange}
//           placeholder="Song Title"
//           className="p-2 rounded bg-neutral-700 text-white w-full"
//         />
//         <input
//           type="text"
//           name="author"
//           value={formData.author}
//           onChange={handleChange}
//           placeholder="Artist Name"
//           className="p-2 rounded bg-neutral-700 text-white w-full"
//         />
//         <div className="flex justify-end gap-2">
//           <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-500 text-white rounded">
//             Cancel
//           </button>
//           <button type="submit" disabled={isUpdating} className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-blue-300">
//             {isUpdating ? "Updating..." : "Save"}
//           </button>
//         </div>
//       </form>
//     </Modal>
//   );
// };

// export default EditSongModal;






// import { useState, useEffect } from "react";
// import Modal from "@/components/Modal";
// import { Song } from "@/types";
// import { useSessionContext } from "@supabase/auth-helpers-react";
// import toast from "react-hot-toast";
// import Image from "next/image";

// interface EditSongModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   song: Song;
//   onUpdate: (updatedSong: Song) => void;
// }

// const EditSongModal: React.FC<EditSongModalProps> = ({ isOpen, onClose, song, onUpdate }) => {
//   const { supabaseClient } = useSessionContext();
//   const [formData, setFormData] = useState({ title: "", author: "", imageUrl: "" });
//   const [isUpdating, setIsUpdating] = useState(false);
//   const [selectedFile, setSelectedFile] = useState<File | null>(null);

//   useEffect(() => {
//     if (isOpen) {
//       setFormData({ title: song.title, author: song.author, imageUrl: song.imageUrl || "" });
//     }
//   }, [isOpen, song]);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files.length > 0) {
//       setSelectedFile(e.target.files[0]);
//     }
//   };
// const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsUpdating(true);
  
//     let newImageUrl = formData.imageUrl;
  
//     if (selectedFile) {
//       const filePath = `songs/${song.id}.${selectedFile.name.split(".").pop()}`; // ✅ Ensure unique file extension
  
//       // ✅ Upload image to Supabase
//       const { data, error } = await supabaseClient.storage
//         .from("images") // ✅ Ensure correct bucket
//         .upload(filePath, selectedFile, { upsert: true });
  
//       if (error) {
//         toast.error(`Upload failed: ${error.message}`);
//         setIsUpdating(false);
//         return;
//       }
  
//       // ✅ Fetch Public URL properly
//       const { data: urlData } = supabaseClient.storage.from("images").getPublicUrl(filePath);
      
//       if (!urlData) {
//         toast.error("Failed to get image URL");
//         setIsUpdating(false);
//         return;
//       }
  
//       newImageUrl = urlData.publicUrl;
//     }
  
//     // ✅ Update song record in database
//     const { error } = await supabaseClient
//       .from("songs")
//       .update({ title: formData.title, author: formData.author, image_path: newImageUrl })
//       .eq("id", song.id);
  
//     setIsUpdating(false);
  
//     if (error) {
//       toast.error(`Failed to update song: ${error.message}`);
//       return;
//     }
  
//     toast.success("Song updated successfully!");
//     onUpdate({ ...song, title: formData.title, author: formData.author, imageUrl: newImageUrl });
//     onClose();
//   };
  
//   return (
//     //@ts-ignore
//     <Modal isOpen={isOpen} onChange={onClose} title="Edit Song">
//       <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//         <input
//           type="text"
//           name="title"
//           value={formData.title}
//           onChange={handleChange}
//           placeholder="Song Title"
//           className="p-2 rounded bg-neutral-700 text-white w-full"
//         />
//         <input
//           type="text"
//           name="author"
//           value={formData.author}
//           onChange={handleChange}
//           placeholder="Artist Name"
//           className="p-2 rounded bg-neutral-700 text-white w-full"
//         />
//         <div className="flex flex-col items-center gap-4">
//           {formData.imageUrl && (
//             <Image src={formData.imageUrl} alt="Song Image" width={100} height={100} className="rounded-md" />
//           )}
//           <input type="file" accept="image/*" onChange={handleFileChange} className="text-white" />
//         </div>
//         <div className="flex justify-end gap-2">
//           <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-500 text-white rounded">
//             Cancel
//           </button>
//           <button type="submit" disabled={isUpdating} className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-blue-300">
//             {isUpdating ? "Updating..." : "Save"}
//           </button>
//         </div>
//       </form>
//     </Modal>
//   );
// };

// export default EditSongModal;











// import { useState, useEffect } from "react";
// import Modal from "@/components/Modal";
// import { Song } from "@/types";
// import { useSessionContext } from "@supabase/auth-helpers-react";
// import toast from "react-hot-toast";
// import Image from "next/image";

// interface EditSongModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   song: Song;
//   onUpdate: (updatedSong: Song) => void;
// }

// const EditSongModal: React.FC<EditSongModalProps> = ({ 
//   isOpen, 
//   onClose, 
//   song, 
//   onUpdate 
// }) => {
//   const { supabaseClient } = useSessionContext();
//   const [formData, setFormData] = useState({
//     title: "",
//     author: "",
//     imageUrl: ""
//   });
//   const [isUpdating, setIsUpdating] = useState(false);
//   const [selectedFile, setSelectedFile] = useState<File | null>(null);
//   const [imageLoadError, setImageLoadError] = useState(false);

//   // Advanced URL cleaning function
//   const cleanImageUrl = (url?: string) => {
//     if (!url) return "";

//     try {
//       // Remove duplicate base URL
//       const baseUrl = "https://qxqwpafhumbdkzkmdsfj.supabase.co/storage/v1/object/public/images/";
//       let cleanedUrl = url;

//       // Remove duplicate base URL if present
//       if (cleanedUrl.includes(baseUrl + baseUrl)) {
//         cleanedUrl = cleanedUrl.replace(baseUrl + baseUrl, baseUrl);
//       }

//       // Remove any leading base URL that might be duplicated
//       if (cleanedUrl.startsWith(baseUrl + baseUrl)) {
//         cleanedUrl = cleanedUrl.replace(baseUrl + baseUrl, baseUrl);
//       }

//       // Ensure the URL ends with an actual image path
//       const imagePath = cleanedUrl.split('/').slice(-1)[0];
//       if (!imagePath.includes('.')) {
//         console.warn('Invalid image path:', cleanedUrl);
//         return "";
//       }

//       // Validate URL
//       new URL(cleanedUrl);

//       return cleanedUrl;
//     } catch (error) {
//       console.error('URL cleaning error:', error);
//       return "";
//     }
//   };

//   useEffect(() => {
//     if (isOpen) {
//       // Log original and cleaned URLs for debugging
//       console.log('Original image path:', song.image_path);
//       console.log('Original imageUrl:', song.imageUrl);

//       // Clean up the image URL
//       const cleanedImageUrl = cleanImageUrl(song.image_path || song.imageUrl);
//       console.log('Cleaned image URL:', cleanedImageUrl);

//       setFormData({
//         title: song.title,
//         author: song.author,
//         imageUrl: cleanedImageUrl
//       });
      
//       // Reset image load error
//       setImageLoadError(false);
//     }
//   }, [isOpen, song]);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files.length > 0) {
//       setSelectedFile(e.target.files[0]);
//       // Reset image load error when a new file is selected
//       setImageLoadError(false);
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsUpdating(true);

//     try {
//       let newImagePath = formData.imageUrl;

//       // If a new file is selected, upload it
//       if (selectedFile) {
//         const fileExt = selectedFile.name.split(".").pop();
//         const filePath = `songs/${song.id}.${fileExt}`;

//         // Upload the file
//         const { data, error: uploadError } = await supabaseClient.storage
//           .from("images")
//           .upload(filePath, selectedFile, { upsert: true });

//         if (uploadError) {
//           throw uploadError;
//         }

//         // Get the public URL
//         const { data: { publicUrl } } = supabaseClient.storage
//           .from("images")
//           .getPublicUrl(filePath);
        
//         newImagePath = cleanImageUrl(publicUrl);
//       }

//       // Update the database record
//       const { error: updateError } = await supabaseClient
//         .from("songs")
//         .update({
//           title: formData.title,
//           author: formData.author,
//           image_path: newImagePath
//         })
//         .eq("id", song.id);

//       if (updateError) {
//         throw updateError;
//       }

//       // Update the song in the UI
//       onUpdate({
//         ...song,
//         title: formData.title,
//         author: formData.author,
//         image_path: newImagePath,
//         imageUrl: newImagePath
//       });

//       toast.success("Song updated successfully!");
//       onClose();

//     } catch (error) {
//       toast.error(`Error updating song: ${error instanceof Error ? error.message : String(error)}`);
//     } finally {
//       setIsUpdating(false);
//     }
//   };

//   return (
//     //@ts-ignore
//     <Modal
//       isOpen={isOpen}
//       onChange={onClose}
//       title="Edit Song"
//     >
//       <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//         <input
//           type="text"
//           name="title"
//           value={formData.title}
//           onChange={handleChange}
//           placeholder="Song Title"
//           className="p-2 rounded bg-neutral-700 text-white w-full"
//           required
//         />
//         <input
//           type="text"
//           name="author"
//           value={formData.author}
//           onChange={handleChange}
//           placeholder="Artist Name"
//           className="p-2 rounded bg-neutral-700 text-white w-full"
//           required
//         />
//         <div className="flex flex-col items-center gap-4">
//           {formData.imageUrl && !imageLoadError && (
//             <div className="relative w-32 h-32">
//               <Image
//                 src={formData.imageUrl}
//                 alt="Song Image"
//                 fill
//                 className="object-cover rounded-md"
//                 sizes="(max-width: 128px) 100vw"
//                 onError={(e) => {
//                   console.error('Image load error', e);
//                   setImageLoadError(true);
//                 }}
//               />
//             </div>
//           )}
//           {imageLoadError && (
//             <div className="text-red-500">
//               Unable to load image. Please select a new image.
//             </div>
//           )}
//           <input 
//             type="file" 
//             accept="image/*" 
//             onChange={handleFileChange} 
//             className="text-white" 
//           />
//         </div>
//         <div className="flex justify-end gap-2">
//           <button
//             type="button"
//             onClick={onClose}
//             className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
//           >
//             Cancel
//           </button>
//           <button
//             type="submit"
//             disabled={isUpdating}
//             className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-blue-300 hover:bg-blue-600 transition"
//           >
//             {isUpdating ? "Updating..." : "Save"}
//           </button>
//         </div>
//       </form>
//     </Modal>
//   );
// };

// export default EditSongModal;




























// import { useState, useEffect } from "react";
// import Modal from "@/components/Modal";
// import { Song } from "@/types";
// import { useSessionContext } from "@supabase/auth-helpers-react";
// import toast from "react-hot-toast";
// import Image from "next/image";

// interface EditSongModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   song: Song;
//   onUpdate: (updatedSong: Song) => void;
// }

// const EditSongModal: React.FC<EditSongModalProps> = ({ isOpen, onClose, song, onUpdate }) => {
//   const { supabaseClient } = useSessionContext();
//   const [formData, setFormData] = useState({ title: "", author: "", imageUrl: "" });
//   const [isUpdating, setIsUpdating] = useState(false);
//   const [selectedFile, setSelectedFile] = useState<File | null>(null);

//   useEffect(() => {
//     if (isOpen) {
//       setFormData({ title: song.title, author: song.author, imageUrl: song.imageUrl || "" });
//     }
//   }, [isOpen, song]);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files.length > 0) {
//       setSelectedFile(e.target.files[0]);
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsUpdating(true);
  
//     let newImageUrl = formData.imageUrl; // Retain previous image if no new file
  
//     if (selectedFile) {
//       const fileExt = selectedFile.name.split(".").pop();
//       const filePath = `songs/${song.id}.${fileExt}`;
  
//       // ✅ Upload file to Supabase
//       const { data, error } = await supabaseClient.storage
//         .from("images") // Ensure this matches your bucket name
//         .upload(filePath, selectedFile, { upsert: true });
  
//       if (error) {
//         toast.error(`Upload failed: ${error.message}`);
//         setIsUpdating(false);
//         return;
//       }
  
//       // ✅ Fetch the correct public URL
//       newImageUrl = supabaseClient.storage.from("images").getPublicUrl(filePath).publicUrl;
  
//       if (!newImageUrl) {
//         toast.error("Failed to retrieve image URL. Check storage permissions.");
//         setIsUpdating(false);
//         return;
//       }
//     }
  
//     // ✅ Update song in database (Ensure `image_path` is updated correctly)
//     const { error } = await supabaseClient
//       .from("songs")
//       .update({ 
//         title: formData.title, 
//         author: formData.author, 
//         imageUrl: newImageUrl // Ensure correct field name
//       })
//       .eq("id", song.id);
  
//     setIsUpdating(false);
  
//     if (error) {
//       toast.error(`Failed to update song: ${error.message}`);
//       return;
//     }
  
//     toast.success("Song updated successfully!");
//     onUpdate({ ...song, title: formData.title, author: formData.author, imageUrl: newImageUrl });
//     onClose();
//   };
  
  
  
  
//   return (
//     //@ts-ignore
//     <Modal isOpen={isOpen} onChange={onClose} title="Edit Song">
//       <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//         <input
//           type="text"
//           name="title"
//           value={formData.title}
//           onChange={handleChange}
//           placeholder="Song Title"
//           className="p-2 rounded bg-neutral-700 text-white w-full"
//         />
//         <input
//           type="text"
//           name="author"
//           value={formData.author}
//           onChange={handleChange}
//           placeholder="Artist Name"
//           className="p-2 rounded bg-neutral-700 text-white w-full"
//         />
//         <div className="flex flex-col items-center gap-4">
//           {formData.imageUrl && (
//             <Image src={formData.imageUrl} alt="Song Image" width={100} height={100} className="rounded-md" />
//           )}
//           <input type="file" accept="image/*" onChange={handleFileChange} className="text-white" />
//         </div>
//         <div className="flex justify-end gap-2">
//           <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-500 text-white rounded">
//             Cancel
//           </button>
//           <button type="submit" disabled={isUpdating} className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-blue-300">
//             {isUpdating ? "Updating..." : "Save"}
//           </button>
//         </div>
//       </form>
//     </Modal>
//   );
// };

// export default EditSongModal;










































// import { useState, useEffect } from "react";
// import Modal from "@/components/Modal";
// import { Song } from "@/types";
// import { useSessionContext } from "@supabase/auth-helpers-react";
// import toast from "react-hot-toast";
// import Image from "next/image";

// interface EditSongModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   song: Song;
//   onUpdate: (updatedSong: Song) => void;
// }

// const EditSongModal: React.FC<EditSongModalProps> = ({ isOpen, onClose, song, onUpdate }) => {
//   const { supabaseClient } = useSessionContext();
//   const [formData, setFormData] = useState({ title: "", author: "", imageUrl: "" });
//   const [isUpdating, setIsUpdating] = useState(false);
//   const [selectedFile, setSelectedFile] = useState<File | null>(null);

//   useEffect(() => {
//     if (isOpen) {
//       setFormData({ title: song.title, author: song.author, imageUrl: song.imageUrl || "" });
//     }
//   }, [isOpen, song]);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files.length > 0) {
//       setSelectedFile(e.target.files[0]);
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsUpdating(true);

//     let newImageUrl = formData.imageUrl;

//     if (selectedFile) {
//       const fileExt = selectedFile.name.split(".").pop();
//       const filePath = `songs/${song.id}.${fileExt}`;

//       const { error: uploadError } = await supabaseClient.storage
//         .from("images")
//         .upload(filePath, selectedFile, { upsert: true });

//       if (uploadError) {
//         toast.error(`Upload failed: ${uploadError.message}`);
//         setIsUpdating(false);
//         return;
//       }

//       const { data } = supabaseClient.storage.from("images").getPublicUrl(filePath);
//       newImageUrl = data?.publicUrl || "";

//       if (!newImageUrl) {
//         toast.error("Failed to retrieve image URL. Check storage permissions.");
//         setIsUpdating(false);
//         return;
//       }
//     }

//     const { error: updateError } = await supabaseClient
//       .from("songs")
//       .update({ title: formData.title, author: formData.author, imageUrl: newImageUrl })
//       .eq("id", song.id);

//     setIsUpdating(false);

//     if (updateError) {
//       toast.error(`Failed to update song: ${updateError.message}`);
//       return;
//     }

//     toast.success("Song updated successfully!");
//     onUpdate({ ...song, title: formData.title, author: formData.author, imageUrl: newImageUrl });
//     onClose();
//   };

//   return (
//     //@ts-ignore
//     <Modal isOpen={isOpen} onChange={onClose} title="Edit Song">
//       <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//         <input
//           type="text"
//           name="title"
//           value={formData.title}
//           onChange={handleChange}
//           placeholder="Song Title"
//           className="p-2 rounded bg-neutral-700 text-white w-full"
//         />
//         <input
//           type="text"
//           name="author"
//           value={formData.author}
//           onChange={handleChange}
//           placeholder="Artist Name"
//           className="p-2 rounded bg-neutral-700 text-white w-full"
//         />
//         <div className="flex flex-col items-center gap-4">
//           {formData.imageUrl && (
//             <Image src={formData.imageUrl} alt="Song Image" width={100} height={100} className="rounded-md" />
//           )}
//           <input type="file" accept="image/*" onChange={handleFileChange} className="text-white" />
//         </div>
//         <div className="flex justify-end gap-2">
//           <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-500 text-white rounded">
//             Cancel
//           </button>
//           <button type="submit" disabled={isUpdating} className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-blue-300">
//             {isUpdating ? "Updating..." : "Save"}
//           </button>
//         </div>
//       </form>
//     </Modal>
//   );
// };

// export default EditSongModal;





//all things are working this is main

// "use client"
// import { useState, useEffect } from "react";
// import Modal from "@/components/Modal"; 
// import { Song } from "@/types";
// import { useSessionContext } from "@supabase/auth-helpers-react";
// import toast from "react-hot-toast";

// interface EditSongModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   song: Song;
//   onUpdate: (updatedSong: Song) => void;
  
// }

// const EditSongModal: React.FC<EditSongModalProps> = ({ isOpen, onClose, song, onUpdate }) => {
//   const { supabaseClient } = useSessionContext();
//   const [formData, setFormData] = useState({ title: "", author: "" });
//   const [isUpdating, setIsUpdating] = useState(false);

//   useEffect(() => {
//     if (isOpen) {
//       setFormData({ title: song.title, author: song.author });
//     }
//   }, [isOpen, song]);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (formData.title === song.title && formData.author === song.author) {
//       toast("No changes detected.", { icon: "ℹ️" });
//       onClose();
//       return;
//     }

//     setIsUpdating(true);

//     const { error } = await supabaseClient
//       .from("songs")
//       .update({ title: formData.title, author: formData.author })
//       .eq("id", song.id);

//     setIsUpdating(false);

//     if (error) {
//       toast.error(`Failed to update song: ${error.message}`);
//       return;
//     }

//     toast.success("Song updated successfully!");
//     onUpdate({ ...song, title: formData.title, author: formData.author });
//     onClose();
//   };

//   return (
//     //@ts-ignore
//     <Modal isOpen={isOpen} onChange={onClose} title="Edit Song">
//       <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//         <input
//           type="text"
//           name="title"
//           value={formData.title}
//           onChange={handleChange}
//           placeholder="Song Title"
//           className="p-2 rounded bg-neutral-700 text-white w-full"
//         />
//         <input
//           type="text"
//           name="author"
//           value={formData.author}
//           onChange={handleChange}
//           placeholder="Artist Name"
//           className="p-2 rounded bg-neutral-700 text-white w-full"
//         />
//         <div className="flex justify-end gap-2">
//           <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-500 text-white rounded">
//             Cancel
//           </button>
//           <button type="submit" disabled={isUpdating} className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-blue-300">
//             {isUpdating ? "Updating..." : "Save"}
//           </button>
//         </div>
//       </form>
//     </Modal>
//   );
// };

// export default EditSongModal;



"use client"
import { useState, useEffect } from "react";
import Modal from "@/components/Modal";
import { Song } from "@/types";
import { useSessionContext } from "@supabase/auth-helpers-react";
import toast from "react-hot-toast";
import useLoadImage from "@/Store/useLoadimage";
import Image from "next/image";

interface EditSongModalProps {
  isOpen: boolean;
  onClose: () => void;
  song: Song;
  onUpdate: (updatedSong: Song) => void;
}

const EditSongModal: React.FC<EditSongModalProps> = ({
  isOpen,
  onClose,
  song,
  onUpdate,
}) => {
  const { supabaseClient } = useSessionContext();
  const [formData, setFormData] = useState({ title: "", author: "", imageFile: null as File | null });
  const [isUpdating, setIsUpdating] = useState(false);
  const imageUrl = useLoadImage(song);

  useEffect(() => {
    if (isOpen) {
      setFormData({ title: song.title, author: song.author, imageFile: null });
    }
  }, [isOpen, song]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, imageFile: e.target.files[0] });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.title === song.title && formData.author === song.author && !formData.imageFile) {
      toast("No changes detected.", { icon: "ℹ️" });
      onClose();
      return;
    }

    setIsUpdating(true);
    let imagePath = song.image_path;

    if (formData.imageFile) {
      const { data, error: uploadError } = await supabaseClient.storage
        .from("images") // Updated bucket name
        .upload(`songs/${song.id}`, formData.imageFile, { upsert: true });

      if (uploadError) {
        toast.error(`Image upload failed: ${uploadError.message}`);
        setIsUpdating(false);
        return;
      }
      imagePath = data?.path || song.image_path;
    }

    const { error } = await supabaseClient
      .from("songs")
      .update({ title: formData.title, author: formData.author, image_path: imagePath })
      .eq("id", song.id);

    setIsUpdating(false);

    if (error) {
      toast.error(`Failed to update song: ${error.message}`);
      return;
    }

    toast.success("Song updated successfully!");
    onUpdate({ ...song, title: formData.title, author: formData.author, image_path: imagePath });
    onClose();
  };

  return (
    //@ts-ignore
    <Modal isOpen={isOpen} onChange={onClose} title="Edit Song">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="relative w-24 h-24 rounded-lg overflow-hidden mx-auto">
          {imageUrl ? (
            <Image src={imageUrl} alt={song.title} width={96} height={96} className="object-cover" />
          ) : (
            <div className="w-full h-full bg-neutral-800 flex items-center justify-center">
              <span className="text-gray-400">No Image</span>
            </div>
          )}
        </div>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Song Title"
          className="p-2 rounded bg-neutral-700 text-white w-full"
        />
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
          placeholder="Artist Name"
          className="p-2 rounded bg-neutral-700 text-white w-full"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="p-2 rounded bg-neutral-700 text-white w-full"
        />
        <div className="flex justify-end gap-2">
          <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-500 text-white rounded">
            Cancel
          </button>
          <button
            type="submit"
            disabled={isUpdating}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-blue-300"
          >
            {isUpdating ? "Updating..." : "Save"}
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default EditSongModal;
