import { useState } from 'react';
import { SearchBar } from './SearchBar';
import navBack from '../../../functions/Navigator';

export const NavSearchBar = () => {
    const [posNav, setPosNav] = useState()
    window.onscroll = function () { navBack(setPosNav, posNav) };

    return (
        <ul className='nav-searchbar'>
            <div className='divSearchBarResponsive'>
                <SearchBar/>
            </div>
        </ul>
    )
};
