import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetOption } from '../../../middlewares/redux/actions';
import navBack from './js/Navigator';
import ruinaLogo from '../../../assets/images/ruina-logo.png';
import { reset } from './js/Reset';

export const Logo = () => {
    const dispatch = useDispatch();
    const [posNav, setPosNav] = useState();
    window.onscroll = function () { navBack(setPosNav, posNav) };

    return (
        <div className='ruinaLogoCont'>
            <Link to='/browser'>
                <img
                    className='ruinaLogo'
                    src={ruinaLogo}
                    alt="La Ruina TV"
                    width='120'
                    onClick={() => {
                        window.scrollTo(0, 0)
                        return (
                            dispatch(resetOption()),
                            reset()
                        )
                    }}
                />
            </Link>
        </div>
    )
}