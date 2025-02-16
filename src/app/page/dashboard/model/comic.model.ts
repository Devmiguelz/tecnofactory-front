export interface ListComic {
    id: number;
    title: string;
    price: number;
    description: string;
    images: string[];
    thumbnail: string;
    creators: Creator[];
    favorite: boolean;
}

export interface Creator {
    name: string;
    role: string;
}