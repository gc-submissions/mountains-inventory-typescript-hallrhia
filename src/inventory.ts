
import { Product } from './products';

interface InventoryItem{
    product:Product,
    quantity:number
}

let inventory:InventoryItem[] = [
    {product:{name:"motor", price: 10.00},  quantity: 10},
    {product:{name:"sensor", price: 12.50},  quantity: 4},
    {product:{name:"LED", price: 1.00},  quantity: 20},
];

function calcInventoryValue(inventory:InventoryItem[]) : number {
    // let sum = 0;
    //for each inventoryitem take price * quantity
    inventory.forEach()

    // for (let product of inventory){
    //    sum = product.product.price * product.quantity;
    // }
    // return sum;    
        

    //add sum together

    //returns total value of all products in array

    //total should be 170
}
console.log(calcInventoryValue(inventory));