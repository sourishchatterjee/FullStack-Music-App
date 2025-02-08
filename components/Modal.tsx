// import React from 'react'
// import * as Dialog from "@radix-ui/react-dialog";
// import { IoMdClose } from 'react-icons/io';

// interface ModalProps {

//     isOpen:boolean;
//     onChange:(open:boolean)=>void;
//     title:string;
//     description:string;
//     children: React.ReactNode;
// }

// const  Modal: React.FC <ModalProps>=({
//  isOpen,
//  onChange,
//  children,
//  description,
//  title,



// })=> {
//   return (
//     <Dialog.Root
//     open={isOpen}
//     defaultOpen={isOpen}
//     onOpenChange={onChange}
//     >
//    <Dialog.Portal>
//     <Dialog.Overlay
//     className='
//     bg-neutral-900/90
//     backdrop-blur-sm
//     fixed
//     inset-0
    
//     '/>
//     <Dialog.Content 
//     className='
//     fixed
//     drop-shadow-sm
//     border
//     border-neutral-700
//     top-[50%]
//     left-[50%]
//     max-h-full
//     h-full
//     md:h-auto
//     md:max-h-[85vh]
//     w-full
//     md:w-[90vw]
//     md:max-w-[450px]
//     translate-x-[-50%]
//     translate-y-[-50%]
//     rounded-md
//     bg-neutral-800
//     p-[25px]
//     focuse:outline-none
    
//     '>
//         <Dialog.Title
        
        
//         className='text-xl text-center font-bold mb-4'>

//             {title}
//         </Dialog.Title>
//     <Dialog.Description className='
//     mb-5 text-sm leading-normal text-center'>
//     {description}
//     </Dialog.Description >

//     <div >
//         {children}
//     </div>
//     <Dialog.Close asChild>
//         <button 
//    className='
//    text-neutral-400
//    hover:text-white
//    absolute
//    top-[10px]
//    right-[10px]
//    inline-flex
//    h-[25px]
//    w-[25px]
//    appearence-none
//    items-center
//    justify-center
//    rounded-full
//    focus:outline-none
   
//    '

//         >
//      <IoMdClose/>
//         </button>
//     </Dialog.Close>
    
//     </Dialog.Content>
//    </Dialog.Portal>




//     </Dialog.Root>
//   )
// }

// export default Modal


// import React from 'react';
// import * as Dialog from '@radix-ui/react-dialog';
// import { IoMdClose } from 'react-icons/io';

// interface ModalProps {
//   isOpen: boolean;
//   onChange: (open: boolean) => void;
//   title: string;
//   description: string;
//   children: React.ReactNode;
  
  
// }

// const Modal: React.FC<ModalProps> = ({ isOpen, onChange, children, description, title, }) => {
//   return (
//     <Dialog.Root open={isOpen} onOpenChange={onChange}>
//       <Dialog.Portal>
//         {/* Overlay */}
//         <Dialog.Overlay className="bg-neutral-900/90 backdrop-blur-sm fixed inset-0" />

//         {/* Modal Content */}
//         <Dialog.Content
//           className="fixed drop-shadow-sm border border-neutral-700 top-[50%] left-[50%] max-h-full h-full md:h-auto md:max-h-[85vh] w-full md:w-[90vw] md:max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-md bg-neutral-800 p-[25px] focus:outline-none"
//         >
//           {/* Modal Title */}
//           <Dialog.Title className="text-xl text-center font-bold mb-4">{title}</Dialog.Title>

//           {/* Modal Description */}
//           <Dialog.Description className="mb-5 text-sm leading-normal text-center">
//             {description}
//           </Dialog.Description>

//           {/* Modal Children (content) */}
//           <div>{children}</div>

//           {/* Close Button */}
//           <Dialog.Close asChild>
//             <button
//               className="text-neutral-400 hover:text-white absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:outline-none"
//             >
//               <IoMdClose />
//             </button>
//           </Dialog.Close>
//         </Dialog.Content>
//       </Dialog.Portal>
//     </Dialog.Root>
//   );
// };

// export default Modal;



// import React from 'react';
// import * as Dialog from '@radix-ui/react-dialog';
// import { IoMdClose } from 'react-icons/io';

// interface EditSongModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   title: string;
//   description: string;
//   children: React.ReactNode;
//   onChange?: (open: boolean) => void;
// }

// const EditSongModal: React.FC<EditSongModalProps> = ({ isOpen, onClose, children, description, title }) => {
//   return (
//     <Dialog.Root open={isOpen} onOpenChange={onClose}>
//       <Dialog.Portal>
//         {/* Overlay */}
//         <Dialog.Overlay className="bg-neutral-900/90 backdrop-blur-sm fixed inset-0" />

//         {/* Modal Content */}
//         <Dialog.Content
//           className="fixed drop-shadow-lg border border-neutral-700 top-[50%] left-[50%] max-h-full h-full md:h-auto md:max-h-[85vh] w-full md:w-[90vw] md:max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-lg bg-neutral-800 p-6 focus:outline-none"
//         >
//           {/* Modal Header */}
//           <div className="flex justify-between items-center mb-4">
//             <Dialog.Title className="text-xl font-bold">{title}</Dialog.Title>
//             <Dialog.Close asChild>
//               <button
//                 className="text-neutral-400 hover:text-white h-[25px] w-[25px] rounded-full focus:outline-none"
//                 onClick={onClose}
//               >
//                 <IoMdClose size={20} />
//               </button>
//             </Dialog.Close>
//           </div>

//           {/* Modal Description */}
//           <Dialog.Description className="mb-5 text-sm leading-normal text-center">
//             {description}
//           </Dialog.Description>

//           {/* Modal Children (content) */}
//           <div>{children}</div>
//         </Dialog.Content>
//       </Dialog.Portal>
//     </Dialog.Root>
//   );
// };

// export default EditSongModal;


// import React from 'react';
// import * as Dialog from '@radix-ui/react-dialog';
// import { IoMdClose } from 'react-icons/io';
// import { Song } from '@/types';

// interface EditSongModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   onUpdate: (updatedSong: Song) => void;
//   title: string;
//   description: string;
//   children: React.ReactNode;
//   song: Song;
// }

// const EditSongModal: React.FC<EditSongModalProps> = ({ 
//   isOpen, 
//   onClose, 
//   children, 
//   description, 
//   title,
//   onUpdate,
//   song
// }) => {
//   return (
//     <Dialog.Root open={isOpen} onOpenChange={onClose}>
//       <Dialog.Portal>
//         {/* Overlay */}
//         <Dialog.Overlay className="bg-neutral-900/90 backdrop-blur-sm fixed inset-0" />
        
//         {/* Modal Content */}
//         <Dialog.Content
//           className="fixed drop-shadow-lg border border-neutral-700 top-[50%] left-[50%] max-h-full h-full md:h-auto md:max-h-[85vh] w-full md:w-[90vw] md:max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-lg bg-neutral-800 p-6 focus:outline-none"
//         >
//           {/* Modal Header */}
//           <div className="flex justify-between items-center mb-4">
//             <Dialog.Title className="text-xl font-bold">{title}</Dialog.Title>
//             <Dialog.Close asChild>
//               <button
//                 className="text-neutral-400 hover:text-white h-[25px] w-[25px] rounded-full focus:outline-none"
//                 onClick={onClose}
//               >
//                 <IoMdClose size={20} />
//               </button>
//             </Dialog.Close>
//           </div>
          
//           {/* Modal Description */}
//           <Dialog.Description className="mb-5 text-sm leading-normal text-center">
//             {description}
//           </Dialog.Description>
          
//           {/* Modal Children (content) */}
//           <div>{children}</div>
//         </Dialog.Content>
//       </Dialog.Portal>
//     </Dialog.Root>
//   );
// };

// export default EditSongModal;



// import React from 'react';
// import * as Dialog from '@radix-ui/react-dialog';
// import { IoMdClose } from 'react-icons/io';
// import { Song } from '@/types';

// interface EditSongModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   onUpdate: (updatedSong: Song) => void;
//   title: string;
//   description: string;
//   children: React.ReactNode;
//   song: Song;
//   onChange?: (open: boolean) => void;
// }

// const EditSongModal: React.FC<EditSongModalProps> = ({ 
//   isOpen, 
//   onClose, 
//   children, 
//   description, 
//   title,
//   onUpdate,
//   song,
//   onChange
// }) => {
//   const handleOpenChange = (open: boolean) => {
//     onChange?.(open);
//     if (!open) {
//       onClose();
//     }
//   };

//   return (
//     <Dialog.Root open={isOpen} onOpenChange={handleOpenChange}>
      // <Dialog.Portal>
      //   <Dialog.Overlay className="bg-neutral-900/90 backdrop-blur-sm fixed inset-0" />
        
      //   <Dialog.Content
      //     className="fixed drop-shadow-lg border border-neutral-700 top-[50%] left-[50%] max-h-full h-full md:h-auto md:max-h-[85vh] w-full md:w-[90vw] md:max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-lg bg-neutral-800 p-6 focus:outline-none"
      //   >
      //     <div className="flex justify-between items-center mb-4">
      //       <Dialog.Title className="text-xl font-bold">{title}</Dialog.Title>
      //       <Dialog.Close asChild>
      //         <button
      //           className="text-neutral-400 hover:text-white h-[25px] w-[25px] rounded-full focus:outline-none"
      //           onClick={onClose}
      //         >
      //           <IoMdClose size={20} />
      //         </button>
      //       </Dialog.Close>
      //     </div>
          
      //     <Dialog.Description className="mb-5 text-sm leading-normal text-center">
      //       {description}
      //     </Dialog.Description>
          
      //     <div>{children}</div>
      //   </Dialog.Content>
      // </Dialog.Portal>
//     </Dialog.Root>
//   );
// };

// export default EditSongModal;

import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { IoMdClose } from 'react-icons/io';
import { Song } from '@/types';

export interface ModalProps {
  children: React.ReactNode;
  title: string;
  description: string;
  isOpen: boolean;
  onChange?: (open: boolean) => void;
  onClose: () => void;
}

export interface EditSongModalProps extends ModalProps {
  onUpdate: (updatedSong: Song) => void;
  song: Song;
}

export const Modal: React.FC<ModalProps> = ({ 
  children, 
  title, 
  description, 
  isOpen, 
  onChange, 
  onClose 
}) => {
  const handleOpenChange = (open: boolean) => {
    onChange?.(open);
    if (!open && typeof onClose === 'function') {
      onClose();
    }
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={handleOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-neutral-900/90 backdrop-blur-sm fixed inset-0" />
        
        <Dialog.Content
          className="fixed drop-shadow-lg border border-neutral-700 top-[50%] left-[50%] max-h-full h-full md:h-auto md:max-h-[85vh] w-full md:w-[90vw] md:max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-lg bg-neutral-800 p-6 focus:outline-none"
        >
          <div className="flex justify-between items-center mb-4">
            <Dialog.Title className="text-xl font-bold">{title}</Dialog.Title>
            <Dialog.Close asChild>
              <button
                className="text-neutral-400 hover:text-white h-[25px] w-[25px] rounded-full focus:outline-none"
                onClick={onClose}
              >
                <IoMdClose size={20} />
              </button>
            </Dialog.Close>
          </div>
          
          <Dialog.Description className="mb-5 text-sm leading-normal text-center">
            {description}
          </Dialog.Description>
          
          <div>{children}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;