import { Component } from "react";
import { ListeProduits } from "../listeProduits/ListeProduits";
import {Cart} from "../cart/Cart";

// le magasin qui contient la liste des produits et le panier vide au début
export class Store extends Component{

    state={
        listProduct:[{
            id:1,
            nom:'produit 1',
            description:'description du produit 1',
            prix: 45
        },{
            id:2,
            nom:'produit 2',
            description:'description du produit 2',
            prix: 50
        },{
            id:3,
            nom:'produit 3',
            description:'description du produit 3',
            prix: 10
        },{
            id:4,
            nom:'produit 4',
            description:'description du produit 4',
            prix: 15
        },{
            id:5,
            nom:'produit 5',
            description:'description du produit 5',
            prix: 20
        }],

        productCart:[]
    }

    // fonction pour ajouter un produit au panier + vérification si le produit est déjà dans le panier
    addCart=(produit)=>{
        console.log(produit)
    const existingProduct = this.state.productCart.find((product)=>product.id ===produit.id);

        if(existingProduct){
            const withoutExistingProduct = this.state.productCart.filter((product)=>product.id !==produit.id);
            const updatedUnitsProduct = {
                ...existingProduct,
                qty: existingProduct.qty +1
            }
            this.setState({
                productCart:[...withoutExistingProduct,updatedUnitsProduct]
            })
        }else{
            this.setState({
                productCart:[...this.state.productCart,{...produit,qty:1}]
            })
        }
    console.log(this.state.productCart)
}

// fonction pour supprimer un produit du panier + vérification si le produit est déjà dans le panier
removeCart=(produit)=>{
    const existingProduct = this.state.productCart.find((product)=>product.id ===produit.id);

    if(existingProduct.qty === 1){
        const withoutExistingProduct = this.state.productCart.filter((product)=>product.id !==produit.id);
        this.setState({
            productCart:[...withoutExistingProduct]
        })
    }else{
        const withoutExistingProduct = this.state.productCart.filter((product)=>product.id !==produit.id);
        const updatedUnitsProduct = {
            ...existingProduct,
            qty: existingProduct.qty -1
        }
        this.setState({
            productCart:[...withoutExistingProduct,updatedUnitsProduct]
        })
    }
}

// affichage du magasin avec la liste des produits et le panier
    render(){
        return(
            <>

            <div className="divCart bg-dark  text-white d-flex my-3 w-100">
                {/* affichage de la liste des produits + méthode pour ajouter un produit au panier*/}
               <ListeProduits listItem={this.state.listProduct} addCart={this.addCart}/>

                {/* affichage du panier + méthode pour supprimer un produit du panier*/}
                <Cart productCart={this.state.productCart} removeCart={this.removeCart}/>
            </div>
            </>
        )
    }
}
