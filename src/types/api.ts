export type ProductItemType = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: ItemRatingType;
};

export type ItemRatingType = {
    rate: number;
    count: number;
};
