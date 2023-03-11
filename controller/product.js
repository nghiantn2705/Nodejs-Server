import axios from "axios";

export const getProductAll =  async (req, res) => {
    try {
      const { data: products } = await axios.get(
        "http://localhost:3000/products"
      );
      if (products.length === 0) {
        res.send({
          messenger: "Danh sách sản phẩm trống!",
        });
      }
      return res.status(200).json(products);
    } catch (error) {
      res.status(500).send({
        messenger: error,
      });
    }
  }

  export const getProductDetail = async (req,res)=>{
    try {
      const {data: product} = await axios.get(`http://localhost:3000/products/${req.params.id}`)
      
      if(!product){
        res.send({
          messenger: "Không tồn tại sản phẩm"
        });
      }
      return res.status(200).json(product)
      
    } catch (error) { 
      res.status(500).send({
        messenger: error,
      });
    }
  }
  export const updateProduct = async (req,res)=>{
    try {
      const {data : products} = await axios.post(`http://localhost:3000/products/${req.params.id}`,
      req.body
      )
      if(!products){
        res.send({
          messenger: "Cập nhập sản phẩm thất bại"
        });
      }
      return   res.status(200).json(products)
      
    } catch (error) { 
      res.status(500).send({
        messenger: error,
      });
    }
  }
  export const addProduct = async (req,res)=>{
    try {
      const {data : product} = await axios.post("http://localhost:3000/products",
      req.body
      )
      if(!product){
        res.send({
          messenger: "Thêm sản phẩm thất bại"
        });
      }
      return   res.status(200).json(product)
      
    } catch (error) { 
      res.status(500).send({
        messenger: error,
      });
    }
  }
  export const removeProduct =  async (req,res)=>{
    try {
      await axios.delete(`http://localhost:3000/products/${req.params.id}`)
      return   res.send({
        messenger: "Xoá sản phẩm thành công!"
      });
      
    } catch (error) { 
      res.status(500).send({
        messenger: error,
      });
    }
  }