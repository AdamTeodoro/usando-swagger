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
        res.status(500)
        .json({ code: 'internal-server-error' })
        .end();
        return 
    }
}
