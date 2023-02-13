import { Component } from 'react';
import { Cart } from '../cart/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import {MdAdd} from 'react-icons/md';




import './produit.css';


export class Produit extends Component{
    constructor(props){
        super(props)
    }



 

    render(){
        // destructuration de la props pour récupérer le produit et la fonction addCart, attention à bien mettre avant le return
        const{produit,addCart} = this.props;

        return(
            <>
            <div className='divProduit'> 
            Nom: {produit.nom}<br></br>
            Description: {produit.description}<br></br>
            Prix: {produit.prix}€<br></br>
            <button className='btnAdd btn btn-primary' onClick={()=>addCart(produit)}><MdAdd/>Ajouter Produit</button>
            </div>
            </>
        )
    }


}