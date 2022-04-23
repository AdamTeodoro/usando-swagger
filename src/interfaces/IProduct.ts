export interface IProduct {
    id: number;
    name: string;
    status: boolean; // disponível: true ou indisponível: false
    price: number;
    quantity: number;
    details?: string; 
};
