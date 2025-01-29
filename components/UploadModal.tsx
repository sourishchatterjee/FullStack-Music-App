// "use client";
// import uniqid from "uniqid";
// import useUploadModal from "@/hooks/useUploadModal";
// import Modal from "./Modal";
// import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
// import { title } from "process";
// import { useState } from "react";
// import Input from "./Input";
// import Button from "./Button";
// import toast from "react-hot-toast";
// import { useUser } from "@/hooks/useUser";
// import { useSupabaseClient } from "@supabase/auth-helpers-react";
// import { useRouter } from "next/navigation"

// const uploadModal = () => {
//   const uploadModal = useUploadModal();
//   const [isLoading, setIsLoading] = useState(false);
//   const { user } = useUser();
//   const supabaseClient = useSupabaseClient();
//   const router =useRouter()

//   const { register, handleSubmit, reset } = useForm<FieldValues>({
//     defaultValues: {
//       author: "",
//       title: "",
//       song: null,
//       image: null,
//     },
//   });

//   const onChange = (open: boolean) => {
//     if (!open) {
//       reset();
//       uploadModal.onClose();
//     }
//   };

//   const onSubmit: SubmitHandler<FieldValues> = async (values) => {
//     try {
//       setIsLoading(true);

//       const imageFile = values.image?.[0];
//       const songFile = values.song?.[0];

//       if (!imageFile || !songFile || !user) {
//         toast.error("Missing fields");
//         return;
//       }
//       const uniqueID = uniqid();
//       //Upload song

//       const { data: songData, error: songError } = await supabaseClient.storage
//         .from("songs")
//         .upload(`song-${values.title}-${uniqueID}`, songFile, {
//           cacheControl: "3600",
//           upsert: false,
//         });

//       if (songError) {
//         setIsLoading(false);
//         return toast.error("Failed song upload.");
//       }
//       //upload image

//       const { data: imageData, error: imageError } =
//         await supabaseClient.storage
//           .from("images")
//           .upload(`image-${values.title}-${uniqueID}`, imageFile, {
//             cacheControl: "3600",
//             upsert: false,
//           });

//       if (imageError) {
//         setIsLoading(false);
//         return toast.error("fail image upload");
//       }

//       const { error: supabaseError } = await supabaseClient
//         .from("songs")
//         .insert({
//           user_id: user.id,
//           title: values.title,
//           author: values.author,
//           image_path: imageData.path,
//           song_path: songData.path,
//         });
//       if (supabaseError) {
//         setIsLoading(false);
//         return toast.error(supabaseError.message);
//       }

//      router.refresh();
//      setIsLoading(false)
//      toast.success('song created');
//      reset()
//      uploadModal.onClose();

//     } catch (error) {
//       toast.error("Something went wrong");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <Modal
//       title="Add a song"
//       description=" Upload an mp3 file"
//       isOpen={uploadModal.isOpen}
//       onChange={onChange}
//     >
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="
//         flex flex-col gap-y-4"
//       >
//         <Input
//           id="title"
//           disabled={isLoading}
//           {...register("title", { required: true })}
//           placeholder="Song title"
//         />
//         <Input
//           id="author"
//           disabled={isLoading}
//           {...register("author", { required: true })}
//           placeholder="Song author"
//         />

//         <div>
//           <div className="pb-1">select a song file</div>
//           <Input
//             id="song"
//             type="file"
//             disabled={isLoading}
//             accept=".mp3"
//             placeholder="mp3 file"
//             {...register("song", { required: true })}
//           />
//         </div>
//         <div>
//           <div className="pb-1">select an img</div>


//           <Input
//             id="image"
//             type="file"
//             disabled={isLoading}
//             accept="image/*"
//             {...register("image", { required: true })}
//           />

//         </div>
//         <Button disabled={isLoading} type="submit">
//           Create
//         </Button>
//       </form>
//     </Modal>
//   );
// };

// export default uploadModal;




// "use client";
// import uniqid from "uniqid";
// import useUploadModal from "@/Store/useUploadModal";
// import Modal from "./Modal";
// import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
// import { useState } from "react";
// import Input from "./Input";
// import Button from "./Button";
// import toast from "react-hot-toast";
// import { useUser } from "@/Store/useUser";
// import { useSupabaseClient } from "@supabase/auth-helpers-react";
// import { useRouter } from "next/navigation";

// const uploadModal = () => {
//   const uploadModal = useUploadModal();
//   const [isLoading, setIsLoading] = useState(false);
//   const { user } = useUser();
//   const supabaseClient = useSupabaseClient();
//   const router = useRouter();

//   const { register, handleSubmit, reset } = useForm<FieldValues>({
//     defaultValues: {
//       author: "",
//       title: "",
//       song: null,
//       image: null,
//     },
//   });

//   const onChange = (open: boolean) => {
//     if (!open) {
//       reset();
//       uploadModal.onClose();
//     }
//   };

//   const onSubmit: SubmitHandler<FieldValues> = async (values) => {
//     try {
//       setIsLoading(true);

//       const imageFile = values.image?.[0];
//       const songFile = values.song?.[0];

//       if (!imageFile || !songFile || !user) {
//         toast.error("All fields are required.");
//         return;
//       }

//       const uniqueID = uniqid();

//       // Upload song file
//       const { data: songData, error: songError } = await supabaseClient.storage
//         .from("songs")
//         .upload(`song-${values.title}-${uniqueID}`, songFile, {
//           cacheControl: "3600",
//           upsert: false,
//         });

//       if (songError) {
//         setIsLoading(false);
//         toast.error("Failed to upload the song. Please try again.");
//         return;
//       }

//       // Upload image file
//       const { data: imageData, error: imageError } = await supabaseClient.storage
//         .from("images")
//         .upload(`image-${values.title}-${uniqueID}`, imageFile, {
//           cacheControl: "3600",
//           upsert: false,
//         });

//       if (imageError) {
//         setIsLoading(false);
//         toast.error("Failed to upload the image. Please try again.");
//         return;
//       }

//       // Insert song details into the database
//       const { error: supabaseError } = await supabaseClient
//         .from("songs")
//         .insert({
//           user_id: user.id,
//           title: values.title,
//           author: values.author,
//           image_path: imageData.path,
//           song_path: songData.path,
//         });

//       if (supabaseError) {
//         setIsLoading(false);
//         toast.error(supabaseError.message);
//         return;
//       }

//       router.refresh();
//       setIsLoading(false);
//       toast.success("Song successfully uploaded!");
//       reset();
//       uploadModal.onClose();
//     } catch (error) {
//       toast.error("Something went wrong. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <Modal
//       title="Add a song"
//       description="Upload an mp3 file"
//       isOpen={uploadModal.isOpen}
//       onChange={onChange}
//     >
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="flex flex-col gap-y-4"
//       >
//         <Input
//           id="title"
//           disabled={isLoading}
//           {...register("title", { required: true })}
//           placeholder="Song title"
//         />
//         <Input
//           id="author"
//           disabled={isLoading}
//           {...register("author", { required: true })}
//           placeholder="Song author"
//         />

//         <div>
//           <div className="pb-1">Select a song file</div>
//           <Input
//             id="song"
//             type="file"
//             disabled={isLoading}
//             accept=".mp3"
//             placeholder="mp3 file"
//             {...register("song", { required: true })}
//           />
//         </div>

//         <div>
//           <div className="pb-1">Select an image</div>
//           <Input
//             id="image"
//             type="file"
//             disabled={isLoading}
//             accept="image/*"
//             {...register("image", { required: true })}
//           />
//         </div>

//         <Button disabled={isLoading} type="submit">
//           Create
//         </Button>
//       </form>
//     </Modal>
//   );
// };

// export default uploadModal;




"use client";
import uniqid from "uniqid";
import useUploadModal from "@/Store/useUploadModal";
import Modal from "./Modal";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import toast from "react-hot-toast";
import { useUser } from "@/Store/useUser";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";

const UploadModal = () => {
  const uploadModal = useUploadModal();
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useUser();
  const supabaseClient = useSupabaseClient();
  const router = useRouter();

  const { register, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues: {
      author: "",
      title: "",
      song: null,
      image: null,
    },
  });

  const onChange = (open: boolean) => {
    if (!open) {
      reset();
      uploadModal.onClose();
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    try {
      setIsLoading(true);

      const imageFile = values.image?.[0];
      const songFile = values.song?.[0];

      if (!imageFile || !songFile || !user) {
        toast.error("All fields are required.");
        return;
      }

      const uniqueID = uniqid();

      // Upload song file
      const { data: songData, error: songError } = await supabaseClient.storage
        .from("songs")
        .upload(`song-${values.title}-${uniqueID}`, songFile, {
          cacheControl: "3600",
          upsert: false,
        });

      if (songError) {
        setIsLoading(false);
        toast.error("Failed to upload the song. Please try again.");
        return;
      }

      // Upload image file
      const { data: imageData, error: imageError } = await supabaseClient.storage
        .from("images")
        .upload(`image-${values.title}-${uniqueID}`, imageFile, {
          cacheControl: "3600",
          upsert: false,
        });

      if (imageError) {
        setIsLoading(false);
        toast.error("Failed to upload the image. Please try again.");
        return;
      }

      // Insert song details into the database
      const { error: supabaseError } = await supabaseClient
        .from("songs")
        .insert({
          user_id: user.id,
          title: values.title,
          author: values.author,
          image_path: imageData.path,
          song_path: songData.path,
        });

      if (supabaseError) {
        setIsLoading(false);
        toast.error(supabaseError.message);
        return;
      }

      router.refresh();
      setIsLoading(false);
      toast.success("Song successfully uploaded!");
      reset();
      uploadModal.onClose();
    } catch (error) {
      console.error("Upload error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal
      title="Add a song"
      description="Upload an mp3 file"
      isOpen={uploadModal.isOpen}
      onChange={onChange}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-y-4"
      >
        <Input
          id="title"
          disabled={isLoading}
          {...register("title", { required: true })}
          placeholder="Song title"
        />
        <Input
          id="author"
          disabled={isLoading}
          {...register("author", { required: true })}
          placeholder="Song author"
        />

        <div>
          <div className="pb-1">Select a song file</div>
          <Input
            id="song"
            type="file"
            disabled={isLoading}
            accept=".mp3"
            placeholder="mp3 file"
            {...register("song", { required: true })}
          />
        </div>

        <div>
          <div className="pb-1">Select an image</div>
          <Input
            id="image"
            type="file"
            disabled={isLoading}
            accept="image/*"
            {...register("image", { required: true })}
          />
        </div>

        <Button disabled={isLoading} type="submit">
          Create
        </Button>
      </form>
    </Modal>
  );
};

export default UploadModal;
