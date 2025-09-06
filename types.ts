
export interface Product {
    id: string;
    name: string;
    img: string;
    price: number;
    priceOld?: number;
    sale: boolean;
    product: string;
    description: string;
    gallery: string[];
}

export interface Package {
    id: string;
    name: string; // Dutch name for cart consistency
    price: number;
    priceOld: number;
    img: string;
    popular: boolean;
    name_pl: string;
    description_pl: string;
    features_pl: string[];
    name_nl: string;
    description_nl: string;
    features_nl: string[];
}


export interface CartItem {
    id: string;
    name: string;
    price: number;
    img: string;
    qty: number;
}

export type MediaItem = {
    src?: string;
    url?: string;
    poster?: string;
    title: string;
    product: string;
    lang: 'PL' | 'NL';
    alt?: string;
};