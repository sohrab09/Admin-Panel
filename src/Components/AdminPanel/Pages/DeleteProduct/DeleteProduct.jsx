import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';


const blogList = [
    {
        Name: "Sony RM-1050",
        Percentage: 10,
        price: 100,
        category: "Laptop",
        delete: <FontAwesomeIcon icon={faTrashAlt} />,
    }, {
        Name: "Sony RM-1050",
        Percentage: 10,
        price: 100,
        category: "Laptop",
        delete: <FontAwesomeIcon icon={faTrashAlt} />,
    }, {
        Name: "Sony RM-1050",
        Percentage: 10,
        price: 100,
        category: "Laptop",
        delete: <FontAwesomeIcon icon={faTrashAlt} />,
    }, {
        Name: "Sony RM-1050",
        Percentage: 10,
        price: 100,
        category: "Laptop",
        delete: <FontAwesomeIcon icon={faTrashAlt} />,
    }, {
        Name: "Sony RM-1050",
        Percentage: 10,
        price: 100,
        category: "Laptop",
        delete: <FontAwesomeIcon icon={faTrashAlt} />,
    }, {
        Name: "Sony RM-1050",
        Percentage: 10,
        price: 100,
        category: "Laptop",
        delete: <FontAwesomeIcon icon={faTrashAlt} />,
    },

]

const DeleteProduct = () => {
    return (
        <div className="md:ml-64 bg-gray-200">
            <div className="px-2 py-2 md:px-10 md:py-10 ">
                <h1 className="text-center text-blue-400 font-bold text-5xl mb-10">Delete Product Information</h1>
                <div className="py-2 hidden md:grid grid-cols-12 justify-around items-center rounded-lg bg-black text-white">
                    <p className="col-start-2 col-end-4">Product Name</p>
                    <p className="col-start-4 col-end-6">Product Percentage</p>
                    <p className="text-center col-start-9 col-end-11">Product Type</p>
                    <p className="text-center col-start-11 col-end-13">Delete</p>
                </div>
                {
                    blogList.map((item) => (
                        <div className="px-2 py-2 mt-4 flex-col flex md:flex-row justify-around items-center rounded-lg bg-gray-100">
                            <p className="mt-2 md:mt-2 text-center md:text-left">{item.Name}</p>
                            <p className="mt-2 md:mt-2 text-center md:text-left">{item.Percentage}</p>
                            <p className="mt-2 md:mt-2">{item.category}</p>
                            <div className="mt-2 mb-2 md:mt-2 md:mb-0 flex">
                                <a href="/" className="cursor-pointer text-red-500">{item.delete}</a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default DeleteProduct;