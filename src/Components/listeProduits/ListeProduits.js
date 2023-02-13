import { Component } from "react";
import './listeProduits.css';
import { Produit } from "../produit/Produit";


export class ListeProduits extends Component{
    
        

 // fonction pour ajouter un produit au panier
    render(){
        // destructuration de la props pour récupérer la liste des produits et la fonction addCart
        const{listItem,addCart}=this.props
        return(
            <>
            <div className="divListe divCart">
                <h1>Liste produits</h1>
                {/* boucle pour afficher la liste des produits*/}
                {listItem.map((produit,i)=>(
                <Produit key={i} produit={produit} addCart={addCart}/>
               
                ))}
            
            </div>
            </>
        )
    }
}
