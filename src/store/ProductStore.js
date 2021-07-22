import {makeAutoObservable} from "mobx";

export default class ProductStore {
    constructor() {

        this._types = [
            {id: 2, name: 'dress'},
            {id: 3, name: 'T-SHIRTS'}
        ]
        this._brands = [
            {id: 2, name: 'dzyi'},
            {id: 3, name: 'BOLAINI'}
        ]
        this._products = [
            {
                id: 2,
                name: 'Платье из лиоцклла с воланом',
                price: 2200,
                rating: 5,
                img: 'https://ledixbeauty.ru/wp-content/uploads/2020/04/modnye-bluzki-42.jpg'
            },
            {
                id: 3,
                name: 'Блуза в англиском стиле',
                price: 3400,
                rating: 7,
                img: 'https://img.ltwebstatic.com/images3_pi/2021/01/12/161042860324dd01c2860318489a686d4b68bc89e5_thumbnail_900x.webp'
            }
        ]
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



        get types() {
            return this._types
        }
        get brands() {
            return this._brands
        }
        get product() {
            return this._products


}

}
