import React, {Children, useState} from 'react'

export const UserContext = React.createContext()

function UserContextComponent({children}) {
    const [product, setProduct] = useState([
        {
          "id": 1,
          "title": "iPhone 9",
          "description": "An apple mobile which is nothing like apple",
          "price": 549,
          "discountPercentage": 12.96,
          "rating": 5,
          "stock": 94,
          "brand": "Apple",
          "category": "smartphones",
          "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
          "image": "https://i.dummyjson.com/data/products/1/3.jpg",
        },
        {
          "id": 2,
          "title": "iPhone 11",
          "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display ",
          "price": 900,
          "discountPercentage": 17.94,
          "rating": 4.6,
          "stock": 34,
          "brand": "Apple",
          "category": "smartphones",
          "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
          "image": "https://i.dummyjson.com/data/products/2/3.jpg"
      },
      {
          "id": 3,
          "title": "Samsung Galaxy S20",
          "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
          "price": 1549,
          "discountPercentage": 15.46,
          "rating": 4,
          "stock": 36,
          "brand": "Samsung",
          "category": "smartphones",
          "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
          "image": "https://i.dummyjson.com/data/products/3/1.jpg"
      },
      {
          "id": 4,
          "title": "OPPOF10",
          "description": "OPPO F19 is officially announced on April 2021.",
          "price": 190,
          "discountPercentage": 17.91,
          "rating": 4.32,
          "stock": 123,
          "brand": "OPPO",
          "category": "smartphones",
          "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
          "image": "https://i.dummyjson.com/data/products/4/3.jpg"
      },
      {
          "id": 5,
          "title": "Huawei P10",
          "description": "Huawei's re-badged P30 Pro New Edition was officially unveiled ",
          "price": 460,
          "discountPercentage": 10.58,
          "rating": 3.59,
          "stock": 32,
          "brand": "Huawei",
          "category": "smartphones",
          "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
          "image": "https://i.dummyjson.com/data/products/5/3.jpg"
      }
      ])
    return <>
        <UserContext.Provider value={{product, setProduct}}>
            {children}
        </UserContext.Provider>
    </>
}

export default UserContextComponent;