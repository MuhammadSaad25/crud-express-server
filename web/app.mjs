// import axios from "axios";

let baseUrl = "";

let addProduct = () => {
  let name = document.querySelector("#name").value;
  let price = document.querySelector("#price").value;
  let desc = document.querySelector("#desc").value;

  axios
    .post(`https://localhost:3000/product`, {
      name: name,
      price: price,
      description: desc,
    })
    .then(function (response) {
      // handle success
      console.log("response is success");
      console.log(response.data);

      document.querySelector("#result").innerHTML = response.data.message;

      getAllProducts();
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      document.querySelector("#result").innerHTML = error.data.message;
    });
};
let getAllProducts = () => {
  axios
    .get(`https://localhost:3000/products`)
    .then(function (response) {
      // handle success
      console.log("response is success");
      console.log(response.data.data);
      document.querySelector("#productList").innerHTML = "";

      response?.data?.data.map((eachProduct, index) => {
        document.querySelector("#productList").innerHTML += `
                    <div>
                        <h1>${eachProduct.name} </h1>
                        <p>${eachProduct.price} </p>
                        <p>${eachProduct.category} </p>
                        <p>${eachProduct.description} </p>
                        <button onclick="deleteProduct('${eachProduct._id}')">delete </button>
                    </div>
                    `;
      });
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      document.querySelector("#result").innerHTML = error.data.message;
    });
};
let deleteProduct = (id) => {
  axios
    .delete(`https://localhost:3000/product/${id}`)
    .then(function (response) {
      // handle success
      console.log("response is success");
      console.log(response.data);

      document.querySelector("#result").innerHTML = response.data.message;

      getAllProducts();
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      document.querySelector("#result").innerHTML = error.data.message;
    });
};
