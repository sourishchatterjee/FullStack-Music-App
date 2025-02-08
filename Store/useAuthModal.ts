import {create} from "zustand"



interface AuthModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    onChange?: (open: boolean) => void; // This is still optional, but you can implement it if needed
  }
  
  const useAuthModal = create<AuthModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
    // Optionally add onChange if you need it in the future, otherwise you can leave it out
    onChange: (open: boolean) => set({ isOpen: open }),
  }));
  
  export default useAuthModal;
  

