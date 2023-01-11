export interface Product {
    id: number;
    name: string;
    price: number;
    image: string
    disabled?: boolean;
    bought?: boolean;
}
