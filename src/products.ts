interface Product{
    name:string,
    price:number
}

let products:Product[] = [
    {name:"bread", price: 2.50},
    {name:"oranges", price: 4.89},
    {name:"milk", price: 3.49},
];

function calcAverageProductPrice(products:Product[]) : number {
    let sum = 0;
   
    for (let product of products){
        sum += product.price;
    }
    return (sum / products.length) || 0;
    

}
console.log(calcAverageProductPrice(products));

export {calcAverageProductPrice, Product}