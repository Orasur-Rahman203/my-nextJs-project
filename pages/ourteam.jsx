import React from 'react';
import DummyData from './api/dummy.json'

const ourteam = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
        {
            DummyData.map((data)=>(
                <div className="card w-84 bg-base-100 shadow-xl m-4 p-2" key={data.id} >
        <figure><img className='h-40 w-72 transition-all duration-1000 rounded-lg cursor-pointer filter grayscale hover:grayscale-0' src={data.image} alt="Shoes" /></figure>
        {/* <div className="card-body"> */}
        <div className="">
          <h2 className="card-title">
            {data.name}
            {/* <div className="badge badge-secondary">NEW</div> */}
          </h2>
          <p>{data.email}</p>
          <p>{data.gender}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Read More</div>
            {/* <div className="badge badge-outline">Products</div> */}
          </div>
        </div>
      </div>
            ))
        }
      </div>
    );
};

export default ourteam;