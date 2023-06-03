const productsContainer=document.getElementById('products')
const getProducts=()=>{
    return fetch('https://dummyjson.com/products?limit=8')
    .then(response => response.json())
    .then(response=>response)
    .catch(error=>error)
}
getProducts();
const displayProducts=async()=>{
    const products=await getProducts()
    console.log(products);
    products.products.map(item=>{
        console.log(item);
        let div=document.createElement('div');
        let images=document.createElement('img');
        let title=document.createElement('h2');
        let category=document.createElement('p');
        let price=document.createElement('p');
        let ratings=document.createElement('h4');
        images.src=item.thumbnail
        title.innerHTML=item.title;
        category.innerHTML=item.category
        price.innerHTML=item.price
        ratings.innerHTML=item.rating
        div.appendChild(images)
        div.appendChild(title)
        div.appendChild(category)
        div.appendChild(price)
        div.appendChild(ratings)
        div.setAttribute('key',item.id);
        div.setAttribute('class','product');
        productsContainer.appendChild(div)
    })
}
displayProducts()







// const productContainer = document.getElementById("products");
// const getProducts = ()=>{
//     return fetch('https://dummyjson.com/products')
//     .then(response => response.json())
//     .then(response=>response)
//     .catch(error=>error)
// }
// getProducts();

// const displayProducts = async()=>{
//     const product = await getProducts();
//     console.log(product);

//     product.products.map((item)=>{
//        let div = document.createElement('div');
//        let images=document.createElement('img');
//        let category = document.createElement('h2')
//        let rating=document.createElement('p');
//        let totalPrice = document.createElement('p')

//        images.src = item.image;
//        category.innerHTML=  item.category;
//        rating.innerHTML = item.rating;
//        totalPrice.innerHTML = `${item.price} ${item.cart}`;

//     div.appendChild(images);
//     div.appendChild(category);
//     div.appendChild(rating);
//     div.appendChild(totalPrice);
//     div.setAttribute('key', item.id);
//     // div.setAttribute('class', 'people')
//     productContainer.appendChild(div);

//     })
// }

// displayProducts();





// const userContainer = document.getElementById('users')

// const getUsers = () =>{
//    return fetch('https://dummyjson.com/users')
//     .then(response=>response.json())
//     .then(response=>response)
//     .catch(error=>error)
// }
// // getUsers();

// // display
// const displayUsers = async()=>{
//     const user = await getUsers();
//     console.log(user);
  

//    user.users.map((item)=>{
//     let div = document.createElement('div');
//     let image=document.createElement('img');
//     let name = document.createElement('h2');
//     let userName = document.createElement('p')


//     image.src = item.image;
//     name.innerHTML = `${item.firstName} ${item.lastName}`;
//     userName.innerHTML = item.username;


//     div.appendChild(image);
//     div.appendChild(name);
//     div.appendChild(userName);
//     div.setAttribute('key', item.id);
//     div.setAttribute('class', 'people')
//     userContainer.appendChild(div);
// })

// }
// displayUsers();