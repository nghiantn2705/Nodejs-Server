import  express  from "express";
import { addProduct, getProductAll, getProductDetail, removeProduct, updateProduct } from "../controller/product.js";


const router = express.Router()
 
router.get("/products",getProductAll)
router.get("/product/:id",getProductDetail)
router.put("/products/update/:id",updateProduct)
router.post("/product/addProduct",addProduct)
router.delete("/product/delete/:id",removeProduct)

export default router