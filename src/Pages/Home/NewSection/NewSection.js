import React from 'react';
import { Link } from 'react-router-dom';

const NewSection = ({ item }) => {
    const { advertised, name, price, image, categoryId} = item;
    return (
        <div className=''>
            {
                advertised? 
            <div className="card w-96 p-5 glass">
            <figure><img src={image} className="h-40 w-40" alt="laptop"/></figure>
            <div className="card-body">
              <h2 className=" text-center text-xl font-bold">{name}</h2>
              <p className='text-center'>${price}</p>
              <div className="card-actions justify-end">
                <Link to={`/category/${categoryId}`} className="btn btn-primary">Buy Now</Link>
              </div>
            </div>
          </div>
            :
            <></>
            }
            

        </div>


    );
};

export default NewSection;