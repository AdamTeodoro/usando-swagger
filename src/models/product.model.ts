import { IProduct } from "../interfaces/IProduct";


/**
 *  Its only fake db for simulate read and write.
 */

export class ProductModel {
    private _lastId: number = 2;

    private _productArray: Array<IProduct> = [
        {
            id: 1,
            name: 'Bola de futebol da puma',
            price: 24.00,
            quantity: 5,
            status: true,

        },
        {
            id: 2,
            name: 'Tênis de corrida',
            price: 70.00,
            quantity: 1,
            status: true,
            details: "Tamanho: 42, com antiderrapante."
        },
    ];

    /**
     * 
     * @param idProduct type number its unique
     * @returns index in array
     */
    private getIndexById(idProduct: number) {
        return this._productArray.findIndex(
            (product) => product.id == idProduct
        );
    }

    /**
     * 
     * @param productData one data with id of product
     * @returns true if product exists or false if not exists
     */
    private productExists(productData: { id: number }) {
        const product: IProduct = this._productArray.filter(
            (product) => product.id == productData.id
        )[0];
        return product? true: false;
    }

    createProduct(newProduct: IProduct): Promise<IProduct> {
        return new Promise((resolve) => {
            newProduct.id = this._lastId + 1;
            this._lastId++;
            this._productArray.push(newProduct);
            resolve(newProduct);
        });
    }

    getProduct(idProduct: number): Promise<IProduct|undefined> {
        return new Promise((resolve, resject) =>  {
            const product: IProduct = this._productArray.filter(
                (product) => product.id == idProduct
            )[0];
            if (product) {
                resolve(product)
            } else {
                resject({ code: 'product-not-found', status: 404 });
            }
        });
    }

    updateProduct(newProduct: IProduct) {
        return new Promise((resolve, reject) => {
            if (this.productExists(newProduct)) {
                const index = this.getIndexById(newProduct.id);
                this._productArray.splice(index);
                this._productArray.push(newProduct);
                resolve(newProduct);
            } else {
                reject({ code: "product-not-found", status: 404 })
            }
        });
    }

    deleteProduct(idProduct: number) {
        return new Promise((resolve, reject) => {
            if (this.productExists({ id: idProduct })) {
                const index = this.getIndexById(idProduct);
                resolve(this._productArray.splice(index)[0]);
            } else {
                reject({ code: "product-not-found", status: 400 })
            }
        });
    }
}

export const productModel = new ProductModel();
