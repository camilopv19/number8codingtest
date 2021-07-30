let products  = fetch('../../public/productList.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }).then( response =>{
        console.log(response.json());
    })

const getAll = () => {
    return products;
}

const getProduct = (id) => {
    let res = [];
    products.forEach( product => {
        if(product.ProductID === id) res.push(product)
    });
    return res;
}

console.log(getAll());
// console.log(getProduct(8099));
module.exports = { getProduct, getAll};