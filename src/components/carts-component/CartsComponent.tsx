import {useParams} from "react-router";
import {useEffect, useState} from "react";
import type {ICart} from "../../models/ICart.tsx";
import type {ICartResponceModel} from "../../models/ICartResponceModel.ts";
import CartComponent from "./CartComponent.tsx";
import {cartService} from "../../services/api.service.ts";

const CartsComponent = () => {
    const {id} = useParams();

    const [carts, setCarts] = useState<ICart[]>([]);
    useEffect(() => {
    if(id){
        cartService.getCartsOfUsers(id)
            .then(({carts}:ICartResponceModel) => setCarts(carts));
    }
    }, [id]);

    return (
        <div>
            {
                carts.map((cart: ICart) => <CartComponent  cart={cart} key = {cart.id}/>)
            }
        </div>
    );
};

export default CartsComponent;