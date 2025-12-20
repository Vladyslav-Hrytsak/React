import type { ICart } from "../../models/ICart.tsx";

interface CartComponentProps {
    cart: ICart;
}

const CartComponent = ({ cart }: CartComponentProps) => {
    return (
        <div className="border-2 bg-blue-200">
            <p>ID: {cart.id}</p>
            <p>User ID: {cart.userId}</p>
            <p>Total Products: {cart.totalProducts}</p>
            <p>Total Quantity: {cart.totalQuantity}</p>
            <p>Total: ${cart.total}</p>
            <p>Discounted Total: ${cart.discountedTotal}</p>

            <ul>
                {cart.products.map((product, index) => (
                    <li key={index}>
                        {product.title} - ${product.price} x {product.quantity || 1}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CartComponent;
