# book-store-api
Book Store CRUD API

<h4>Required Applications/package/framework</h4>
<ul>
    <li>Node JS - JavaScript cross-platform runtime environment </li>
    <li>Mongo DB Atlas Cloud Database - No SQL document database</li>
    <li>Express Js - Backend Nodejs Framework</li>
    <li>Mongoose - Object modeling tool for MongoDB.</li>
    <li>DotEnv - manage environment variables</li>
</ul>

<h4>Postman Documentation</h4>
<a href="https://documenter.getpostman.com/view/26157365/2s93CUKAzg">View Postman Documentation</a>

<h4>API Demo Link</h4>
https://book-store-api-h59n.onrender.com

<h3>Create New Product (Book Object)</h3>
<p>POST Request => https://book-store-api-h59n.onrender.com/api/v1/create</p>
<span>Example =></span>
<pre>
{
    "title":"Kasht or Jeevan",
    "author":"Suraj Aswal",
    "isbn":1234567890,
    "unitPrice":550,
    "unitInStock":24,
    "discount":20,
    "numOfPages":400,
    "condition":"New"
}
</pre>

<h3>Read One Product</h3>
<p>GET Request => https://book-store-api-h59n.onrender.com/api/v1/read/PRODUCT_ID</p>
<span>Example =></span>
<pre>
https://book-store-api-h59n.onrender.com/api/v1/read/6444f5aa72722d308c8e3ac5
</pre>

<h3>Read All Product</h3>
<p>GET Request => https://book-store-api-h59n.onrender.com/api/v1/readAll</p>
<span>Example =></span>
<pre>
https://book-store-api-h59n.onrender.com/api/v1/readAll
</pre>

<h3>Read Product with Filter</h3>
<p>GET Request => https://book-store-api-h59n.onrender.com/api/v1/filter/?priceLessthan=PRICE&priceGreaterThan=PRICE</p>
<span>Example =></span>
<pre>
https://book-store-api-h59n.onrender.com/api/v1/filter?priceLessthan=5000&priceGreaterThan=5000
</pre>

<h3>Read Product With Sorting (Asc/Dsc)</h3>
<p>GET Request => https://book-store-api-h59n.onrender.com/api/v1/readall?sortby=SORT_TYPE</p>
<span>Example =></span>
<pre>
https://book-store-api-h59n.onrender.com/api/v1/readall?sortby=desc
</pre>

<h3>Update Product</h3>
<p>PUT Request => https://book-store-api-h59n.onrender.com/api/v1/update/PRODUCT_ID</p>
<span>Example =></span>
<pre>
 https://book-store-api-h59n.onrender.com/api/v1/update/643ef5e8de1bbc99e32a3be0
</pre>

<h3>Delete Product</h3>
<p>DELETE Request => https://book-store-api-h59n.onrender.com/api/v1/delete/PRODUCT_ID</p>
<span>Example =></span>
<pre>
 https://book-store-api-h59n.onrender.com/api/v1/delete/6402dc96fe130fc6c4fb3fb6
</pre>
