// import Stripe from "stripe";



// export interface Song {
//     id: bigint|string;
//     user_id: string;
//     author: string;
//     title: string;
//     song_path: string;
//     image_path: string;
//     created_at?: string;
//     imageUrl?: string | undefined;
//     user?: string;
//   }

// export interface UserDeatails{
// id:string;
// first_name: string;
// last_name: string;
// full_name?: string;
// avatar_Url?:string;
// billing_address?: Stripe.Address;
// payment_method?:Stripe.PaymentMethod[Stripe.PaymentMethod.Type];
// }

// export interface Product{

//     id:string;
//     active?:boolean;
//     name?:string;
//     description?:string;
//     image?:string;
//    metadata?:Stripe.Metadata;
    

// }



// export interface Price{
//     id:string;
//     product_id?:string;
//     active?:boolean;
//     description?:string;
//     unit_amount?:number;
//     currency?:string;
//     type?:Stripe.Price.Type;
//     interval?:Stripe.Price.Recurring.Interval;
//     interval_count?:number;
//     trial_Period_days?:number|null;
//     metadata?:Stripe.Metadata;
//     products?: Product;

// }

// export interface Subscription {

//     id:string;
//     user_id:string;
//     status?:Stripe.Subscription.Status;
//     metadata?:Stripe.Metadata;
//     price_id?:string;
//     quantity?:number;
//     cancel_at_period_end?: boolean;
//     create: string;
//     current_period_start:string;
//     current_period_end:string;
//     ended_at?:string;
//     cancel_at?:string;
//     canceled_at?:string;
//     trial_start?:string;
//     prices?:Price;
// }



import Stripe from "stripe";

// export interface Song {
    
//     id:  string;
//     user_id: string;
//     author: string;
//     title: string;
//     song_path: string;
//     image_path: string;
//     created_at?: string;
//     imageUrl?: string | undefined;
//     user?: string;
// }

export interface Song {
    id: string;
    user_id: string;
    author: string;
    title: string;
    song_path: string;
    image_path: string;
    created_at?: string | Date;
    imageUrl?: string;
    user?: string;
  }
export interface UserDetails {
    id: string;
    first_name: string;
    last_name: string;
    full_name?: string;
    avatarUrl?: string;  // camelCase for consistenc
    billing_address?: Stripe.Address;
    payment_method?: Stripe.PaymentMethod[Stripe.PaymentMethod.Type];


   
}

export interface Product {
    id: string;
    active?: boolean;
    name?: string;
    description?: string;
    image?: string;
    metadata?: Stripe.Metadata;
}

export interface Price {
    id: string;
    product_id?: string;
    active?: boolean;
    description?: string;
    unit_amount?: number;
    currency?: string;
    type?: Stripe.Price.Type;
    interval?: Stripe.Price.Recurring.Interval;
    interval_count?: number;
    trial_period_days?: number | null; // Use camelCase for consistency
    metadata?: Stripe.Metadata;
    products?: Product;
}

export interface Subscription {
    id: string;
    user_id: string;
    status?: Stripe.Subscription.Status;
    metadata?: Stripe.Metadata;
    price_id?: string;
    quantity?: number;
    cancel_at_period_end?: boolean;
    create: string;
    current_period_start: string;
    current_period_end: string;
    ended_at?: string;
    cancel_at?: string;
    canceled_at?: string;
    trial_start?: string;
    prices?: Price[];  // Array of prices if multiple prices can be attached
}



interface EditSongModalProps {
    isOpen: boolean;
    onClose: () => void;
    song: Song;
    onUpdate: (updatedSong: Song) => void;
    onChange?: (open: boolean) => void; // Add this line
  }
  