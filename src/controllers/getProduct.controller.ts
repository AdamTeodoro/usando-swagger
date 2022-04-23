import { IProduct } from "../interfaces/IProduct"
import { productModel } from "../models/product.model";

import { Response } from 'express';

type Request = {
    query: {
        id: number
    }
}

export const getProduct = async (req: Request, res: Response) => {
    try {
        //get product by id
        await productModel.getProduct(req.query.id)
        .then((product) => {
            res.json({ product })
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
