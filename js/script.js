let products = [{
    image: 'https://i2.rozetka.ua/goods/17618407/samsung_sm_m215fzgusek_images_17618407627.jpg',
    title: 'Мобильный телефон Samsung Galaxy M21',
    price: 5799,
    availability: true,
    tags: ['Новинка'],
    id: 1
}, {
    image: "https://i8.rozetka.ua/goods/16041151/copy_samsung_sm_a515fzwusek_5e04c47d16006_images_16041151806.jpg",
    title: "Мобильный телефон Samsung Galaxy A51",
    price: 8499,
    availability: true,
    tags: ["-11%"],
    id: 2
}, {
    image: 'https://i8.rozetka.ua/goods/16893927/samsung_galaxy_m31_6_128gb_blue_images_16893927576.jpg',
    title: 'Мобильный телефон Samsung Galaxy M31',
    price: 7499,
    availability: false,
    tags: ['Топ Продаж'],
    id: 3
}, {
    image:
        "https://i1.rozetka.ua/goods/14627865/copy_apple_iphone_11_pro_64gb_space_gray_5daee6335b321_images_14627865209.png",
    title: "Мобильный телефон Apple iPhone 11 Pro",
    price: 32999,
    availability: true,
    tags: [],
    id: 4
}, {
    image: "https://i8.rozetka.ua/goods/16893927/samsung_galaxy_m31_6_128gb_blue_images_16893927576.jpg",
    title: "Мобильный телефон Samsung Galaxy M31",
    price: 7499,
    availability: true,
    tags: ['top'],
    id: 5
}, {
    image: 'https://i8.rozetka.ua/goods/16041151/copy_samsung_sm_a515fzwusek_5e04c47d16006_images_16041151897.jpg',
    title: 'Мобильный телефон Samsung Galaxy A51 6/128GB White (SM-A515FZWWSEK)',
    price: '8 499',
    availability: true,
    tags: [],
    id: 6
}, {
    image: 'https://i2.rozetka.ua/goods/16621311/copy_honor_51093fbq_5e312264c4ebb_images_16621311834.jpg',
    title: 'Мобильный телефон Honor 10 Lite 3/64GB',
    price: 3999,
    availability: true,
    tags: ['ТОЛЬКО В РОЗЕТКЕ'],
    id: 7
}, {
    image: 'https://i1.rozetka.ua/goods/9396115/huawei_p_smart_2019_blue_images_9396115064.jpg',
    title: 'Мобильный телефон Huawei P Smart 2019 3/64GB Aurora Blue (51093FTA) + фитнес-браслет в подарок!',
    price: 4499,
    availability: true,
    tags: ['action'],
    id: 8
}, {
    image: 'https://i2.rozetka.ua/goods/10900209/copy_tp_link_neffos_c5_plus_grey_5c63fcf92217d_images_10900209891.jpg',
    title: 'Мобильный телефон TP-Link Neffos C5 Plus',
    price: 11999,
    availability: true,
    tags: ['-20%'],
    id: 9
}, {
    image: 'https://i1.rozetka.ua/goods/12177864/huawei_p30_lite_4_128gb_iris_purple_images_12177864256.jpg',
    title: 'Мобильный телефон Realme XT 8/128 Blue Gradient',
    price: 9999,
    availability: true,
    tags: ['Новинка']
}, {
    image: 'https://i1.rozetka.ua/goods/9396115/huawei_p_smart_2019_blue_images_9396115064.jpg',
    title: 'Мобильный телефон TP-Link Neffos C5 Plus',
    price: 45000,
    availability: true,
    tags: ['Скидка'],
    id: 10
}, {
    image: 'https://i8.rozetka.ua/goods/16041151/copy_samsung_sm_a515fzwusek_5e04c47d16006_images_16041151897.jpg',
    title: 'Мобильный телефон Samsung Galaxy',
    price: 5000,
    availability: true,
    tags: ['Ожидается'],
    id: 11
}, {
    image: 'https://i2.rozetka.ua/goods/10900212/copy_tp_link_neffos_c5_plus_grey_5c63fcf92217d_images_10900212267.jpg',
    title: 'Мобильный телефон Nokia 2.3 2/32GB Charcoal',
    price: 4500,
    availability: true,
    tags: ['Акция'],
    id: 12
}];

class Product {
    constructor(data) {
        this.image = data.image;
        this.title = data.title;
        this.price = data.price;
        this.availability = data.availability;
        this.tags = data.tags;
        this.id = data.id;
    }
    print() {
        let result = `<div class="cell"><div class="product-thumb">`;
        result += `<div class="image"><img src="${this.image || 'images/no-image.jpg'}" alt="${this.title}"></div>`;
        result += `<div class="title">${this.title}</div>`;
        result += `<div class="group-wrapper">`;
        result += `<div class="price">${this.price} <span>₴</span></div>`;
        if (this.availability) {
            result += `<div class="availability">Есть в наличии</div>`;
        } else {
            result += `<div class="availability not">Нет в наличии</div>`;
        }
        result += `</div>`;

        if (this.tags && this.tags.length) {
            result += `<div class="tags">`;
            for (let tag of this.tags) {
                result += `<span>${tag}</span>`;
            }
            result += `</div>`;
        }

        result += `<button class="btn remove" title="Remove" onclick="removeProduct(${this.id})"><i class="fas fa-remove"></i></button>`;

        result += `</div></div>`;
        document.getElementById('product-list').innerHTML += result;
    }
}

class Products {
    constructor(_data) {
        this.data = _data;
    }

    set removeItem(id) {
        let newProducts = [];
        for (let item of this.data) {
            if (item.id !== id) {
                newProducts.push(item);
            }
        }
        this.data = newProducts;
    }

    set addItem(item) {
        this.data.push(item);
    }

    print() {
        for (let item of this.data) {
            const productItem = new Product(item);
            productItem.print();
        }
        let result = `<div class="cell empty"></div><div class="cell empty"></div>`;
        document.getElementById('product-list').innerHTML += result;
        document.getElementById('product-total').innerHTML = this.data.length;
    }
    clearData() {
        document.getElementById('product-list').innerHTML = '';
    }
}

const productList = new Products(products);
productList.print();

function removeProduct(id) {
    if (confirm('Are you sure?')) {
        productList.removeItem = id;
        productList.clearData();
        productList.print();
    }
}

function addProduct(form) {
    const newProduct = {
        title: form.querySelector("[name = 'title']").value,
        price: form.querySelector("[name = 'price']").value,
        image: form.querySelector("[name = 'image']").value,
        availability: form.querySelector("[name = 'availability']").checked,
        id: Math.round(Math.random() * 1000)
    }

    productList.addItem = newProduct;
    productList.clearData();
    productList.print();
}

// product delete
// product add
// filter price sort
// filter avail