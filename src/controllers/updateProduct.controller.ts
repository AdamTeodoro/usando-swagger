import { IProduct } from "../interfaces/IProduct"
import { productModel } from "../models/product.model";

import { Response } from 'express';

type Request = {
    body: {
        product: IProduct
    }
}

export const updateProduct = async (req: Request, res: Response) => {
    try {
        //get request product
        const { product } = req.body;
        //update product by id
        await productModel.updateProduct(product)
        .then((product) => {
            res.json({ product })
            .status(200)
            .end();
            return;
        })
        .catch((error) => {
            res.json(error)
            .status(error.status)
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
