const products=[
    {name:'ibijumba',price:'500'},
    {name:'ibiraya',price:'700'},
    {name:'insibe',price:'1000'},
    {name:'iwunga',price:'1200'}
];
 const filtered=products.filter(product=>product.price>600);
const promo=filtered.map(product=>{
  return `the ${product.name} is ${product.price}`;
 });
// const promo=products.filter(product=>product.price>600)
 console.log(promo);