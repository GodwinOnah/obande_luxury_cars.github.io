import React,{Component} from 'react';
import Card from './cards';
import {AddToCart,CarInfo,Quantity} from './quantity'



const CarCards=({carPropertiesCards,onClickToViewChange,onChangeCatQuantity,})=>{
	


 

     return(

     		<>

     		{
				carPropertiesCards.map((user,i)=>{ 

					


								      	 return (

								      			 	<Card 
								      			 
								      			 	key={i} 
								      			 	image={carPropertiesCards[i].image} 
								      			 	carname={carPropertiesCards[i].name} 
								      			 	id={carPropertiesCards[i].id}
								      			 	details={carPropertiesCards[i].details} 
								      			 	price={carPropertiesCards[i].price}
								      			 	rent={carPropertiesCards[i].rent}
								      			 	onClickToViewChange={onClickToViewChange}
								      			 	onChangeCatQuantity={onChangeCatQuantity}
								      			 

								      			 	/>


								      			 	);
								      			})

			}

     		</>

     	);

     


}


export default CarCards;