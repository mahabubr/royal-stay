import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

    const rooms = [
        {
            id: 1,
            name: 'Single Bed',
            price: 2500,
            img: 'https://images.unsplash.com/photo-1501780085-dae6a4f6bc7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
        },
        {
            id: 2,
            name: 'Double Bed',
            price: 4500,
            img: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
        },
        {
            id: 3,
            name: 'Triple Bed',
            price: 7500,
            img: 'https://images.unsplash.com/photo-1530334565651-210b286480b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80'
        },
    ]

    return (
        <div>
            <div className='mt-12'>
                <h1 className='text-5xl text-center font-bold'>The Royal Stay</h1>
                <p className='w-7/12 mx-auto mt-6 text-center'>A hotel is an establishment that provides paid lodging on a short-term basis. Facilities provided inside a hotel room may range from a modest-quality mattress in a small room to large suites with bigger</p>
                <div className='flex justify-center items-center mt-4'>
                    <Link to="/login">
                        <button className="btn btn-outline w-40 mr-4">Login</button>
                    </Link>
                    <Link to="/signup">
                        <button className="btn btn-outline w-40 ml-4">Sign Up</button>
                    </Link>
                </div>
            </div>
            <div className='grid grid-cols-3 mx-auto w-9/12 gap-8 mt-12'>
                {
                    rooms.map(room => <div key={room.id} className="card bg-base-100 shadow-xl">
                        <figure><img src={room.img} alt="Shoes" className='h-64 object-cover' /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {room.name}
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>Choose Your Room?</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Room</div>
                                <div className="badge badge-outline">Vip</div>
                            </div>
                            <Link to='/room'>
                                <button className="btn btn-success  mt-4">Book Room</button>
                            </Link>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Home;