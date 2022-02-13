// item class (not required for hardcoded list)
class Item {
    constructor(name, image, price) {
        this._name = name;
        this._image = image;
        this._prince = price;
    }
}
// item list
const itemList = [
    {
        name: 'television',
        image: 'tv.jpg',
        price: 249
    },
    {
        name: 'bluetooth speaker',
        image: 'btSpkr.jpg',
        price: 89
    },
    {
        name: 'earpods',
        image: 'earpods.jpg',
        price: 134
    }
]

// shopping cart item list
const shoppingCart = []
