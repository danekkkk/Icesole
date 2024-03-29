import { ICartProduct } from "../constants/interfaces";
import { createContext } from "react";



export const CartContext = createContext<ICartProduct | null>(null);


