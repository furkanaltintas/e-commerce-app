"use client";
import { CardProductProps } from "@/app/components/detail/DetailClient";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import toast from "react-hot-toast";

interface CartContextProps {
  productCartQty: number;
  cartPrdcts: CardProductProps[] | null;
  addToBasket: (product: CardProductProps) => void;
  addToBasketIncrease: (product: CardProductProps) => void;
  addToBasketDecrease: (product: CardProductProps) => void;
  removeFromCart: (product: CardProductProps) => void;
  removeCart: () => void;
}
const CartContext = createContext<CartContextProps | null>(null);

interface Props {
  [propName: string]: any;
}
export const CartContextProvider = (props: Props) => {
  const [productCartQty, setProductCartQty] = useState(0);
  const [cartPrdcts, setCartPrdcts] = useState<CardProductProps[] | null>(null);

  useEffect(() => {
    const getItem: any = localStorage.getItem("cart");
    const getItemParse: CardProductProps[] | null = JSON.parse(getItem);
    setCartPrdcts(getItemParse);
  }, []);

  const addToBasketIncrease = useCallback(
    (product: CardProductProps) => {
      let updatedCart;
      if (product.quantity == 10) {
        return toast.error("Daha fazla ekleyemezsin...", { id: "add-to-basket-increase-error" });
      }
      if (cartPrdcts) {
        updatedCart = [...cartPrdcts];
        const existingItem = cartPrdcts.findIndex(
          (item) => item.id === product.id
        );

        if (existingItem > -1) {
          updatedCart[existingItem].quantity += 1;
        }
        setCartPrdcts(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
      }
    },
    [cartPrdcts]
  );

  const addToBasketDecrease = useCallback(
    (product: CardProductProps) => {
      let updatedCart;
      if (product.quantity == 1) {
        return toast.error("Daha az ekleyemezsin...", { id: "add-to-basket-decrease-error" });
      }
      if (cartPrdcts) {
        updatedCart = [...cartPrdcts];
        const existingItem = cartPrdcts.findIndex(
          (item) => item.id === product.id
        );

        if (existingItem > -1) {
          updatedCart[existingItem].quantity -= 1;
        }
        setCartPrdcts(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
      }
    },
    [cartPrdcts]
  );

  const removeCart = useCallback(() => {
    setCartPrdcts(null);
    toast.success("Sepet Temizlendi...", { id: "remove-cart" });
    localStorage.setItem("cart", JSON.stringify(null));
  }, []);

  const addToBasket = useCallback(
    (product: CardProductProps) => {
      setCartPrdcts((prev) => {
        const updatedCart = prev ? [...prev, product] : [product];
        toast.success("Ürün Sepete Eklendi...", { id: "add-to-basket" });
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return updatedCart;
      });
    },
    []
  );

  const removeFromCart = useCallback(
    (product: CardProductProps) => {
      if (cartPrdcts) {
        const filteredProducts = cartPrdcts.filter(
          (cart) => cart.id !== product.id
        );

        setCartPrdcts(filteredProducts);
        toast.success("Ürün Sepetten Silindi...", { id: "remove-from-cart" });
        localStorage.setItem("cart", JSON.stringify(filteredProducts));
      }
    },
    [cartPrdcts]
  );

  const value = {
    productCartQty,
    addToBasket,
    cartPrdcts,
    removeFromCart,
    removeCart,
    addToBasketIncrease,
    addToBasketDecrease,
  };
  return <CartContext.Provider value={value} {...props} />;
};

const UseCart = () => {
  const context = useContext(CartContext);
  if (context == null) {
    throw new Error("Bir hata durumu mevcut");
  }
  return context;
};

export default UseCart;
