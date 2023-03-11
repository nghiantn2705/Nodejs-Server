import express  from "express";
const app = express();
const port = 8000;
import router from "./routes/product.js";

// const products = [
//   { id: 1, name: "laptop dell vostro", price: 2000 },
//   { id: 2, name: "laptop acer", price: 3000 },
//   { id: 3, name: "laptop hp vostro", price: 1000 },
// ];

app.use(express.json()); // JSON.stringify()

app.use("/api",router);

// app.use chỉ quan tâm đến router, không quan tâm đến method
// app.get("/products", (req, res) => {
//   // code lai noi dung ben server.js
//   res.send(products);
// });

// GET, POST, PUT, DELETE, PATH đều phải đúng cả về router và method

// app.get("/product/:id", (req, res) => {
//   // req.params
//   // req.query
//   // req.body

//   const id = req.params.id;
//   const product = products.find((item) => item.id == id);
//   res.send(product);
// });

// app.post("/product/create", (req, res) => {
//   products.push(req.body);
//   res.send(products);
// });
// app.put("/product/update/:id",(req,res)=>{
//     const id = req.params.id
//     const UpdateProduct = products.map((item)=>item.id == id ? req.body :item)
//     res.send({
//         massenger: "Update sản phẩm thành công!",
//         data:UpdateProduct
//     })
// })
// app.delete("/product/delete/:id",(req,res)=>{
//     const id = req.params.id
//     const DeleteProduct = products.filter((item)=>item.id != id );
//     res.send({
//         massenger: "Đã xoá thành công sản phẩm!",
//         data:DeleteProduct
//     })
// })

//////////
// app.get("/products", async (req, res) => {
//   try {
//     const { data: products } = await axios.get(
//       "http://localhost:3000/products"
//     );
//     if (products.length === 0) {
//       res.send({
//         messenger: "Danh sách sản phẩm trống!",
//       });
//     }
//     return res.status(200).json(products);
//   } catch (error) {
//     res.status(500).send({
//       messenger: error,
//     });
//   }
// });
// app.get("/product/:id", async (req,res)=>{
//   try {
//     const {data: product} = await axios.get(`http://localhost:3000/products/${req.params.id}`)
    
//     if(!product){
//       res.send({
//         messenger: "Không tồn tại sản phẩm"
//       });
//     }
//     return res.status(200).json(product)
    
//   } catch (error) { 
//     res.status(500).send({
//       messenger: error,
//     });
//   }
// })
// app.post("/products/creat", async (req,res)=>{
//   try {
//     const {data : product} = await axios.post("http://localhost:3000/products",
//     req.body
//     )
//     if(!product){
//       res.send({
//         messenger: "Thêm sản phẩm thất bại"
//       });
//     }
//     return   res.status(200).json(product)
    
//   } catch (error) { 
//     res.status(500).send({
//       messenger: error,
//     });
//   }
// })
// app.delete("/products/delete/:id", async (req,res)=>{
//   try {
//     const {data : products} = await axios.delete(`http://localhost:3000/products/${req.params.id}`
//     )
//     return   res.send({
//       messenger: "Xoá sản phẩm thành công!"
//     });
    
//   } catch (error) { 
//     res.status(500).send({
//       messenger: error,
//     });
//   }
// })
// app.put("/products/update/:id", async (req,res)=>{
//   try {
//     const {data : products} = await axios.post(`http://localhost:3000/products/${req.params.id}`,
//     req.body
//     )
//     if(!products){
//       res.send({
//         messenger: "sửa sản phẩm thành công"
//       });
//     }
//     return   res.status(200).json(products)
    
//   } catch (error) { 
//     res.status(500).send({
//       messenger: error,
//     });
//   }
// })
app.listen(port, () => {
  console.log(`ung dung dang chay vao file app tren port: ${port}`);
});
