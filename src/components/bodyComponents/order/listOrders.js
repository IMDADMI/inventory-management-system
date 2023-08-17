import productList from "../inventory/productList";

const customer = {
    firstName: "ADMI",
    lastName: "ZAKARYAE",
    position: "Software Engineer",
    mobile: "+212 6 51 88 61 51",
  };

  const orders = [
    {
      id: 1,
      products: [{quantity:5,product:productList[0]}, {quantity:5,product:productList[1]},{quantity:5,product: productList[2]}],
      customer: customer,
    },
    {
      id: 2,
    
      products: [{quantity:5,product:productList[1]}, {quantity:5,product:productList[1]},{quantity:5,product: productList[2]}],
      customer: customer,
    },
    {
      id: 3,
     
      products: [{quantity:5,product:productList[2]}, {quantity:5,product:productList[1]},{quantity:5,product: productList[2]}],
      customer: customer,
    },
    {
      id: 4,
    
      products: [{quantity:5,product:productList[3]}, {quantity:5,product:productList[1]},{quantity:5,product: productList[2]}],
      customer: customer,
    },
    {
      id: 5,
    
      products: [{quantity:5,product:productList[4]}, {quantity:5,product:productList[1]},{quantity:5,product: productList[2]}],
      customer: customer,
    },
    {
      id: 6,
   
      products: [{quantity:5,product:productList[5]}, {quantity:5,product:productList[1]},{quantity:5,product: productList[2]}],
      customer: customer,
    },
    {
      id: 7,
  
      products: [{quantity:5,product:productList[6]}, {quantity:5,product:productList[1]},{quantity:5,product: productList[2]}],
      customer: customer,
    },
    {
      id: 8,
     
      products: [{quantity:5,product:productList[7]}, {quantity:5,product:productList[1]},{quantity:5,product: productList[2]}],
      customer: customer,
    },
    {
      id: 9,
    
      products: [{quantity:5,product:productList[8]}, {quantity:5,product:productList[1]},{quantity:5,product: productList[2]}],
      customer: customer,
    },
    {
      id: 10,
    
      products: [{quantity:5,product:productList[9]}, {quantity:5,product:productList[1]},{quantity:5,product: productList[2]}],
      customer: customer,
    },
    {
      id: 11,
     
      products: [{quantity:5,product:productList[10]},{quantity:5,product: productList[1]},{quantity:5,product: productList[2]}],
      customer: customer,
    },
    {
      id: 12,
    
      products: [{quantity:5,product:productList[11]},{quantity:5,product: productList[1]},{quantity:5,product: productList[2]}],
      customer: customer,
    },
    {
      id: 13,
   
      products: [{quantity:5,product:productList[12]},{quantity:5,product: productList[1]},{quantity:5,product: productList[2]}],
      customer: customer,
    },
    {
      id: 14,
    
      products: [{quantity:5,product:productList[0]}, {quantity:5,product:productList[1]},{quantity:5,product: productList[2]}],
      customer: customer,
    },
    {
      id: 15,
     
      products: [{quantity:5,product:productList[12]},{quantity:5,product: productList[1]},{quantity:5,product: productList[2]}],
      customer: customer,
    },
    {
      id: 16,
     
      products: [{quantity:5,product:productList[3]}, {quantity:5,product:productList[1]},{quantity:5,product: productList[2]}],
      customer: customer,
    },
    {
      id: 17,
     
      products: [{quantity:5,product:productList[5]}, {quantity:5,product:productList[1]},{quantity:5,product: productList[2]}],
      customer: customer,
    },
    {
      id: 18,
    
      products: [{quantity:5,product:productList[6]}, {quantity:5,product:productList[1]},{quantity:5,product: productList[2]}],
      customer: customer,
    },
    {
      id: 19,
     
      products: [{quantity:5,product:productList[8]}, {quantity:5,product:productList[1]},{quantity:5,product: productList[2]}],
      customer: customer,
    },
  ];

  export default orders;