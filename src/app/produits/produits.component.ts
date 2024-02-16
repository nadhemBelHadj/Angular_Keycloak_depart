import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

     produits! : Produit[]; //un tableau de Produit
     
     constructor(private produitService: ProduitService ) {
      
      }
   

      ngOnInit(): void {

        this.chargerProduits();
      }
    
      chargerProduits(){
        this.produitService.listeProduit().subscribe(prods => {
          console.log(prods);
          this.produits = prods;
          });
      }
   

 
  

}
