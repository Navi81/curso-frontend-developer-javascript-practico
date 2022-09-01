const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');
    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');
    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}


function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive')
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 125,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Pantalla',
    price: 225,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Compu',
    price: 625,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

//Se creo una funcion para reutilizarla si se necesita.
function renderProducts(arr){
    for (product of arr){
        //creando elemento div con clase product-card
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        //creando elemento imagen con el valor que tenga el objeto.
        const productImg = document.createElement('img');
        productImg.setAttribute('src',product.image);
        //Sin olvidar que product = {name, price, image} -> el argumento a usar es product.image
    
        //creando elemento div
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        //se le puso ese nombre porque no tiene ninguna clase para relacionarlo.
        const productInfodiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price; //de una vez se agrega precio. igual con el nombre.
        const productName = document.createElement('p');
        productName.innerText = product.name;
        productInfodiv.appendChild(productPrice);//Encapsulando precio 
        productInfodiv.appendChild(productName);//Encapsulando nombre
    
        const productInfoFigure = document.createElement('figure');
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src','./icons/bt_add_to_cart.svg');
        
        //De aqui en adelante nos regresamos encapsulando cada elemento.
    
        productInfoFigure.appendChild(productImgCard); //Encapsulando imagen en elemento figure.
    
        productInfo.appendChild(productInfodiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productInfo);
        productCard.appendChild(productImg);
    
        //Finalmente ponemos productCard dentro de cardsContainer PERO primeramente tenemos que crear el selector de .cards-container.
        cardsContainer.appendChild(productCard);
    }
}
renderProducts(productList);