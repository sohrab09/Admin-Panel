import React from 'react';

const AddProduct = () => {

    return (
        <div className="md:ml-64">
            <div className="md:py-20 md:bg-gray-200 flex items-center justify-center">
                <div className="mt-10 md:mt-0 rounded-xl py-10 md:w-3/5 bg-gray-100 flex flex-col items-center justify-evenly">
                    <h1 className="text-4xl font-bold text-green-400">Add Product</h1>
                    <form className="w-full flex items-center flex-col mt-5 md:mt-10">
                        <input
                            className="w-10/12 md:w-4/6 py-1 px-1 outline-none bg-transparent placeholder-black border-b-2 border-black"
                            type="text"
                            placeholder="Product Name"
                            required=""
                        />
                        <br />
                        <input
                            className="w-10/12 md:w-4/6 py-1 px-1 outline-none bg-transparent placeholder-black border-b-2 border-black"
                            type="number"
                            placeholder="Product Price"
                            required=""
                        />
                        <br />
                        <input
                            className="w-10/12 md:w-4/6 py-1 px-1 outline-none bg-transparent placeholder-black border-b-2 border-black"
                            type="text"
                            placeholder="Profit Percentage"
                            required=""
                        />
                        <br />
                        <input
                            className="w-10/12 md:w-4/6 py-1 px-1 outline-none bg-transparent placeholder-black border-b-2 border-black"
                            type="text"
                            placeholder="Product Type"
                            required=""
                        /> <br /> <br />
                        <button
                            id="adminFile"
                            className="w-4/6 bg-black rounded-lg py-2 text-white text-lg font-bold submitBtn" type="submit"
                        >SUBMIT</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;