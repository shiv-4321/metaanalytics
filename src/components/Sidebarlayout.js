import React from 'react'
// import classes from './Sidebar.module.css';
import { Sidebardata } from './Sidebardata';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import Homepage from '../pages/Homepage';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { reset } from '../redux/store/authSlice';
import { resetToken } from '../middleware/authMiddleware';

const Sidebarlayout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logoutHandler = () => {
        resetToken();
        dispatch(reset());
        navigate('/login');
    }

    return (
        <Sidebar rootStyles={{ backgroundColor: 'white' }}>
            <h2>Meta Analytics</h2>
            <Menu
                menuItemStyles={{
                    button: {
                        backgroundColor: 'lavender',
                        color: 'blue'
                    }
                }}
            >
                {
                    Sidebardata.map((val, key) => {
                        return <MenuItem component={<Link to={val.link} />} key={key}>{val.title}</MenuItem>
                    })
                }
                <MenuItem onClick={logoutHandler}>Logout</MenuItem>
            </Menu>
        </Sidebar>
    )
}

export default Sidebarlayout