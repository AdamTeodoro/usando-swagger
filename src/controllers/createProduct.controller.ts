import { IProduct } from "../interfaces/IProduct"
import { productModel } from "../models/product.model";

import { Response } from 'express';

type Request = {
    body: {
        product: IProduct
    }
}

export const createProduct = async (req: Request, res: Response) => {
    try {
        //get request product
        const { product } = req.body;
        //create product and generate id
        await productModel.createProduct(product)
        .then((product) => {
            res.json({ product })
                .status(200)
                .end();
            return;
        });
    } catch {
        res.json({ code: 'internal-server-error' })
        .status(500)
        .end();
        return;
    }
}
