const menuEmail = document.querySelector('.navbar-email');
const desktopMenu=document.querySelector('.desktop-menu');

const menuHamIcon=document.querySelector('.menu');
const mobileMenu=document.querySelector('.mobile-menu');

const navbarShopping=document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer=document.querySelector('#shoppingCartContainer');

const cardsContainer=document.querySelector('.cards-container');

const productDetail=document.querySelector('#product-detail');
const productDetailClose=document.querySelector('.product-detail-close');

productDetailClose.addEventListener('click',()=>{
    productDetail.classList.add('inactive');
})

menuEmail.addEventListener('click',()=>{
    desktopMenu.classList.toggle('inactive');
})

menuHamIcon.addEventListener('click',()=>{
    const isshoppingCartContainerClosed=shoppingCartContainer.classList.contains('inactive');
    const isProductDetailClosed=productDetail.classList.contains('inactive');

    if(!isProductDetailClosed){
        productDetail.classList.add('inactive');
    }

    if(!isshoppingCartContainerClosed){
        shoppingCartContainer.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
})

navbarShopping.addEventListener('click',()=>{
    const isMobileMenuClosed=mobileMenu.classList.contains('inactive');
    const isProductDetailClosed=productDetail.classList.contains('inactive');
    
    if(!isProductDetailClosed){
        productDetail.classList.add('inactive');
    }

    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');
})


const productList=[];

productList.push(
    {
        name:'Bike',
        price:120,
        image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },

    {
        name:'Pantalla',
        price:220,
        image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },

    {
        name:'Impresora',
        price:600,
        image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"   
    },
    {
        name:'Bike',
        price:120,
        image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },

    {
        name:'Pantalla',
        price:220,
        image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },

    {
        name:'Impresora',
        price:600,
        image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"   
    }
)
// product
function renderProducts(arr){
    for (product of arr){
        const html=document.createElement('div');
        html.classList.add("product-card");
        

        
        const img = document.createElement('img');
        img.setAttribute('src',product.image);
        img.addEventListener("click",()=>{
        const isShoppinClosed=shoppingCartContainer.classList.contains('inactive');
        const isMobileMenuClosed=mobileMenu.classList.contains('inactive');

        if(!isShoppinClosed){
        shoppingCartContainer.classList.add('inactive');
         }

        if(!isMobileMenuClosed){
            mobileMenu.classList.add('inactive');
        }

         productDetail.classList.remove('inactive');
        })

        html.appendChild(img);



        const productInfo=document.createElement('div');
        productInfo.classList.add("product-info");
        productInfo.innerHTML=`<div class="product-info">
        <div>
          <p>$ ${product.price}</p>
          <p>${product.name}</p>
        </div>
        <figure>
          <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
      </div>`
        
        html.appendChild(productInfo);

        

      cardsContainer.appendChild(html);
      

    }
}


renderProducts(productList)




