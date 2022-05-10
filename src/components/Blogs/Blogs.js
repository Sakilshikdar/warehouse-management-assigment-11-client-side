import React from 'react';

const Blogs = () => {
    return (
        <div className='bg-opacity-25 mx-auto w-75 mt-3 shadow-lg p-3 mb-5 bg-white rounded'>
            <div className='p-3'>
                <h4 className='text-center'>1. Difference between javascript and nodejs</h4>
                <h6>NodeJS is a cross-platform that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.Javascript is a Scripting language. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. 
                </h6>
            </div>
            <div className='p-3'>
                <h4 className='text-center'>2. When should you use nodejs and when should you use mongodb?</h4>
                <h6>Mongoose is a Node.The problem that Mongoose aims to solve is allowing developers to enforce a specific schema at the application layer.Mongoose also offers a variety of hooks, model validation, and other features aimed at making it easier to work with MongoDB. In the past, the only way to enforce a schema against a MongoDB collection was to do it at the application level using an ODM like Mongoose, but that posed significant challenges for developers.

                </h6>
            </div>
            <div className='p-3'>
                <h4 className='text-center'>3. What is the purpose of jwt and how does it work?</h4>
                <h6>When JWT authentication and server-to-server authorization, JSON web token JWT is particularly a useful technology. In terms of Single Sign-On, it means that a service provider can receive trustworthy information from the authentication server. Now, if that result matches the signature, the SP knows that the information provided has come from the other entity possessing the key..</h6>
            </div>
        </div>
    );
};

export default Blogs;