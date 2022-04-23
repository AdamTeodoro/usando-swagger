import * as express from 'express';

import { createProduct } from './controllers/createProduct.controller';
import { deleteProduct } from './controllers/deleteProduct.controller';
import { getProduct } from './controllers/getProduct.controller';
import { updateProduct } from './controllers/updateProduct.controller';

const router = express.Router();
//Products
router.post('/api/createProduct', createProduct);
router.put('/api/updateProduct', updateProduct);
router.get('/api/getProduct', getProduct);
router.delete('/api/deleteProduct', deleteProduct);

export { router };
