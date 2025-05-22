"use client"
import UseCart from '@/hooks/useCart'
import { useRouter } from 'next/navigation'
import {MdShoppingBasket} from 'react-icons/md'
const CardCount = () => {
    const {cartPrdcts} = UseCart()
    const router = useRouter();
  return (
    <div onClick={() => router.push('/cart')} className="hidden md:flex relative">
        <MdShoppingBasket size="30"/>
        { cartPrdcts && cartPrdcts.length > 0 && (
            <div className="absolute -top-2 -right-2 bg-red-500 rounded-full w-5 h-5 flex items-center justify-center text-white text-sm">
                {cartPrdcts?.length}
            </div>
        )}
    </div>
  )
}

export default CardCount