import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const Header = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => console.log('log out'))
            .catch(e => console.log(e.message))
    }

    return (
        <div className="navbar w-10/12 mx-auto">
            <div className="flex-1">
                <Link to='/' className="btn btn-ghost normal-case text-2xl">Royal Stay</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    {
                        user
                            ?
                            <>
                                <li>
                                    <Link to='/room'>Room</Link>
                                </li>
                                <li>
                                    <Link to='/profile'>Profile</Link>
                                </li>
                                <li>
                                    <p>{user.displayName}</p>
                                </li>
                                <li>
                                    <button onClick={handleLogOut} className="btn btn-primary">Log Out</button>
                                </li>
                            </>
                            :
                            <>
                                <li>
                                    <Link to='/login'>Login</Link>
                                </li>
                                <li>
                                    <Link to='/signup'>Sign Up</Link>
                                </li>
                            </>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Header;