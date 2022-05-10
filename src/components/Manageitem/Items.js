import React, { useEffect, useState } from 'react';

const Items = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleDelete = () =>{
        console.log('good');
    }
    return (
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg w-screen mx-5">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-5 py-3">
              Product name
            </th>
            <th scope="col" class="px-5 py-3">
              Price
            </th>
            <th scope="col" class="px-5 py-3">
              Image
            </th>

            <th scope="col" class="px-5 py-3">
              <span class="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {products?.length ? (
            products.map((product) => {
              return (
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-5 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    {product.name}
                  </th>
                  <td class="px-5 py-4">{product.price}</td>
                  <td class="px-5 py-4">
                    <img style={{width:'50px'}} src={product.img} alt="" />
                  </td>

                  <td class="px-5 py-4 text-right">
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      onClick={() => handleDelete(product._id)}
                    >
                      Delete
                    </a>
                  </td>
                </tr>
              );
            })
          ) : (
            <div>No data found</div>
          )}
        </tbody>
      </table>
        </div>
    );
};

export default Items;