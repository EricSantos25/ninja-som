const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';
    const URL =
      'http://econverse.digital/teste-front-end/junior/ninja-som/lista-produtos/produtos.json';

    fetch(`${corsAnywhere}${URL}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.products)
        
        const htmls = data.products.map( 
          objeto => `
          <div class="products-container">
            <div class ="product-data">
              <img src="${objeto.photo}">
              <h1 class="name">${objeto.productName}</h1>
              <p class="description">${objeto.descriptionShort}</p>
              <span class="price">R$ ${fixPrice(objeto.price)}</span>
            </div>
          </div>
      `
      );

      function fixPrice(price){
        const priceString = price.toString();
        const priceArray = priceString.split('');

        const virgula = priceArray.splice(priceString.length - 2);
        priceArray.push(',');

        const fixedPriceArray = priceArray.concat(virgula);

        return fixedPriceArray.join('');
      };

      htmls.forEach((html) => {
        const containerProdutos = document.querySelector('.products-container');
        
        return containerProdutos.innerHTML += (html);
      })
    });


  $(".banners-container").slick({
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 7000,
    pauseOnHover: false,
  });


