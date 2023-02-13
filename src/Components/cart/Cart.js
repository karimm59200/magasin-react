import { Component } from "react";
import'./cart.css';
import {RiDeleteBin5Line} from 'react-icons/ri';
import {BsCartCheck} from 'react-icons/bs';

export class Cart extends Component{
    constructor(props){
        super(props)
            this.state={
                cart:this.props.cart
            }
    }



    render(){
        // destructuration de la props pour récupérer les produits dans le panier et la fonction removeCart
        const{productCart,removeCart}=this.props;
        // calcul du nombre de produit dans le panier
        const count=productCart.reduce((total,produit)=>total+produit.qty,0);
        // calcul du prix total du panier
        const total = productCart.reduce((acc, item) => acc + item.prix * item.qty, 0);

        return(
            <>
            <div className="divCart" id="cart">
            <h1><BsCartCheck/>Panier</h1>
                {/* boucle pour afficher les produits dans le panier */}
            {productCart.map((produit,i)=>(

                <div className="divCart Produit   divProduit" key={i}>
                    <div>nom: {produit.nom}</div>
                    <div>description: {produit.description}</div>
                    <div>prix: {produit.prix}€</div>
                    <div>quantité: {produit.qty}</div>
                    <button className="btn btn-danger mb-2" onClick={()=>removeCart(produit)}><RiDeleteBin5Line/>Supprimer</button>
                </div>

                ))}
                <div>Nombre de produit: {count}</div>
                <div>prix total: {total}€</div>
            </div>

            </>
        )
    }
}

