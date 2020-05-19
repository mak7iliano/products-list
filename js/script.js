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
    price: 8499,
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

let favouriteData = [];

const course = 28;

class Product {
    constructor(data) {
        this.image = data.image;
        this.title = data.title;
        this.price = data.price;
        this.availability = data.availability;
        this.tags = data.tags;
        this.id = data.id;
    }
    print(currency) {
        const currencySymbol = currency === 'usd' ? '$' : '₴';
        const price = currency === 'usd' ? Math.floor(this.price / course) : this.price;
        let result = `<div class="cell"><div class="product-thumb" data-id="${this.id}">`;

        result += `<div class="image">`;
        result += `<img src="${this.image || 'images/no-image.jpg'}" alt="${this.title}">`;
        result += `<i class="like fas fa-heart" onclick="toggleFavourite(${this.id}, this)"></i>`;
        result += `</div>`;

        result += `<div class="title">${this.title}</div>`;
        result += `<div class="group-wrapper">`;
        result += `<div class="price">${price} <span class="currency">${currencySymbol}</span></div>`;
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

    set filterPrice(val) {
        this.data.sort(function (a, b) {
            if (val === 'low') {
                return a.price - b.price;
            } else {
                return b.price - a.price;
            }
        });
    }

    print(showHidden = true, currency) {
        for (let item of this.data) {
            const productItem = new Product(item);
            if (productItem.availability || (!productItem.availability && showHidden)) {
                productItem.print(currency);
            }
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

class Favourites {
    constructor(_data) {
        this.data = _data;
    }
    set addToFavourite(item) {
        this.data.push(item);
    }
    set removeFavourite(item) {
        const itemPostion = this.data.indexOf(item);
        this.data.splice(itemPostion, 1);
    }
    print() {
        let result = ``;
        for (let item of this.data) {
            result += `<div class="favourite-item">`;
            result += `<div class="img">`;
            result += `<img src="${item.image || 'images/no-image.jpg'}" alt="${item.title}">`;
            result += `</div>`;
            result += `<div class="data">`;
            result += `<div class="name">${item.title}</div>`;
            result += `<div class="price">${item.price} ₴</div>`;
            result += `<button class="btn remove" onclick="removeFromFavouriteList(${item.id})"><i class="fas fa-remove"></i></button>`;
            result += `</div>`;
            result += `</div>`;
        }

        document.getElementById('favourite-list').innerHTML += result;
        document.getElementById('favourite-count').innerHTML = this.data.length;
    }
    clearData() {
        document.getElementById('favourite-list').innerHTML = '';
    }
}

const favouriteList = new Favourites(favouriteData);

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

    blockAppearance('product-add', 'hide');
}

function blockAppearance(id, type) {
    const block = document.getElementById(id);
    if (type === 'show') {
        block.classList.remove('hidden');
    } else {
        block.classList.add('hidden');
    }
}

function filterPrice(filter) {
    productList.filterPrice = filter.value;
    productList.clearData();
    productList.print();
}

function filterAvailable(filter) {
    productList.clearData();
    productList.print(filter.checked);
}

function toggleFavourite(id, button) {
    for (let product of products) {
        if (product.id === id) {
            if (button.classList.contains('active')) {
                // remove from favourite
                favouriteList.removeFavourite = product;
            } else {
                // add to favourite
                favouriteList.addToFavourite = product;
            }
        }
    }

    button.classList.toggle('active');
    favouriteList.clearData();
    favouriteList.print();
}

function hasFavourites() {
    return !!favouriteList.data.length;
}

function removeFromFavouriteList(id) {
    for (let product of products) {
        if (product.id === id) {
            favouriteList.removeFavourite = product;
        }
    }

    const list = document.querySelectorAll('#product-list .product-thumb');
    for (let i = 0; i < list.length; i++) {
        if (list[i].getAttribute('data-id') == id) {
            list[i].querySelector('.like').classList.remove('active');
        }
    }

    favouriteList.clearData();
    favouriteList.print();

    if (!favouriteList.data.length) {
        blockAppearance('favourite', 'hide');
    }
}

function changeCurrency(currency, button) {
    productList.clearData();
    productList.print(true, currency);

    for (let i = 0; i < button.parentNode.children.length; i++) {
        button.parentNode.children[i].classList.remove('active');
    }
    button.classList.add('active');
}

// document.addEventListener('contextmenu', function (event) {
//     event.preventDefault();
// });

function logout() {
    localStorage.removeItem('login');
    loginMenu();
}

function loginMenu() {
    let authBtns;
    const login = localStorage.getItem('login');
    if (login) {
        authBtns = `<button class="btn" title="Client cabinet"><i class="fas fa-user"></i> Hi, ${login}!</button> <button class="btn" title="Logout" onclick="logout()"><i class="fas fa-key"></i> Logout</button>`;
    } else {
        authBtns = `<button class="btn" title="Login" onclick="blockAppearance('login', 'show')"><i class="fas fa-key"></i> Login</button> <button class="btn" title="Login" onclick="blockAppearance('registration', 'show')"><i class="fas fa-key"></i> Registration</button>`;
    }
    document.getElementById('auth-btns').innerHTML = authBtns;
}

function loginForm(form) {
    const login = form.querySelector("[name = 'login']").value;
    const pass = form.querySelector("[name = 'password']").value;
    let registerList = JSON.parse(localStorage.getItem('regList'));
    if (registerList && registerList.length) {
        let error = true;
        for (let user of registerList) {
            if (user.login === login && user.password === pass) {
                localStorage.setItem('login', login);
                loginMenu();
                blockAppearance('login', 'hide');
                error = false;
                break;
            }
        }
        if (error) {
            alert('Wrong login or password!');
        }
    }
}

function registerForm(form) {
    const login = form.querySelector("[name = 'login']").value;
    const pass = form.querySelector("[name = 'password']").value;
    const passConfirm = form.querySelector("[name = 'passwordConfirm']").value;
    const regData = {
        login: login,
        password: pass
    }

    let registerList = localStorage.getItem('regList');

    if (pass === passConfirm) {
        if (registerList) {
            let list = JSON.parse(registerList);
            list.push(regData);
            localStorage.setItem('regList', JSON.stringify(list));
        } else {
            localStorage.setItem('regList', JSON.stringify([regData]));
        }
        blockAppearance('registration', 'hide');
    } else {
        alert('Password confirm is not correct!');
    }
}

loginMenu();