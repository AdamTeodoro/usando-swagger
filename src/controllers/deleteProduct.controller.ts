import { IProduct } from "../interfaces/IProduct"
import { productModel } from "../models/product.model";

import { Response } from 'express';

type Request = {
    query: {
        id: number
    }
}

export const deleteProduct = async (req: Request, res: Response) => {
    try {
        //delete product by id
        await productModel.deleteProduct(req.query.id)
        .then((product) => {
            res.json({ 
                code: "success-to-delete-product",
                product
            })
            .status(200)
            .end();
            return;
        })
        .catch((error) => {
            res.json(error)
            .status(200)
            .end();
            return;
        });
    } catch { }
}
