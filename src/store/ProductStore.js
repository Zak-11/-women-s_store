import {makeAutoObservable} from "mobx";

export default class ProductStore {
    constructor() {

        this._types = [
            {id: 1, name: 'Dresses'},
            {id: 2, name: 'Tops'},
            {id: 2, name: 'Shirts & Blouses'},
            {id: 4, name: 'Trousers'},
            {id: 5, name: 'Jeans'},
            {id: 6, name: 'Skirts'},
            {id: 7, name: 'Blazers'},
            {id: 8, name: 'Jackets & Coats'},
            {id: 9, name: 'Sweatshirts & Hoodies'},
            {id: 10, name: 'Sportswear'},
            {id: 11, name: 'Shorts'},
            {id: 12, name: 'Basics'},
            {id: 13, name: 'Cardigans & Jumpers'},
            {id: 14, name: 'Knitwear'},
            {id: 15, name: 'Jumpsuits & Rompers'},
            {id: 16, name: 'Shoes'}
        ]
        this._brands = [
            {id: 2, name: 'dzyi'},
            {id: 3, name: 'BOLAINI'}
        ]
        this._products = [
            {
                id: 1,
                name: 'Платье из лиоцклла с воланом',
                price: 2200,
                rating: 5,
                img: 'https://ledixbeauty.ru/wp-content/uploads/2020/04/modnye-bluzki-42.jpg'
            },
            {
                id: 1,
                name: 'Блуза в англиском стиле',
                price: 3400,
                rating: 7,
                img: 'https://img.ltwebstatic.com/images3_pi/2021/01/12/161042860324dd01c2860318489a686d4b68bc89e5_thumbnail_900x.webp'
            },
            {
                id: 3,
                name: 'Платье из лиоцклла с воланом',
                price: 2200,
                rating: 5,
                img: 'https://ledixbeauty.ru/wp-content/uploads/2020/04/modnye-bluzki-42.jpg'
            },
            {
                id: 4,
                name: 'Платье из лиоцклла с воланом',
                price: 2200,
                rating: 5,
                img: 'https://ledixbeauty.ru/wp-content/uploads/2020/04/modnye-bluzki-42.jpg'
            },
            {
                id: 5,
                name: 'Платье из лиоцклла с воланом',
                price: 2200,
                rating: 5,
                img: 'https://ledixbeauty.ru/wp-content/uploads/2020/04/modnye-bluzki-42.jpg'
            },
            {
                id: 6,
                name: 'Платье из лиоцклла с воланом',
                price: 2200,
                rating: 5,
                img: 'https://ledixbeauty.ru/wp-content/uploads/2020/04/modnye-bluzki-42.jpg'
            },
        ]

        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }

    setProducts(products) {
        this._products = products
    }

    setSelectedType(type) {

        this._selectedType = type
    }

    setSelectedBrand(brand) {

        this._selectedBrand = brand
    }


    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get products() {
        return this._products
    }

    get selectedType() {
        return this._selectedType
    }

    get selectedBrand() {
        return this._selectedBrand
    }

}
