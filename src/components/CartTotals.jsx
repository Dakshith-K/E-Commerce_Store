import { useSelector } from 'react-redux';
import { formatPrice } from '../utils';

const CartTotals = () => {
    const { cartTotal, shipping, tax, orderTotal } = useSelector((state) => state.cartState);

    return (
        <div className='card bg-base-200'>
            <div className="card-body">

                <p className='flex justify-between text-sm border-b border-base-300 pb-2 font-medium'>
                    <span>Subtotal</span>
                    <span className='font-medium'>{formatPrice(cartTotal)}</span>
                </p>

                <p className='flex justify-between text-sm border-b border-base-300 pb-2 font-medium'>
                    <span>Shipping</span>
                    <span className='font-medium'>{formatPrice(shipping)}</span>
                </p>

                <p className='flex justify-between text-sm border-b border-base-300 pb-2 font-medium'>
                    <span>Tax</span>
                    <span className='font-medium'>{formatPrice(tax)}</span>
                </p>

                <p className='flex justify-between text-md pb-2 font-bold'>
                    <span>Order Total</span>
                    <span className='font-bold'>{formatPrice(orderTotal)}</span>
                </p>
            </div>
        </div>
    )
}

export default CartTotals