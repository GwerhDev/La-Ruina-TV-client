import { useState } from 'react';
import { SearchBar } from './SearchBar';
import navBack from './js/Navigator';

export const NavSearchBar = () => {
    const [posNav, setPosNav] = useState()
    window.onscroll = function () { navBack(setPosNav, posNav) };

    return (
        <ul className='navSearchBar'>
            <div className='divSearchBarResponsive'>
                <SearchBar/>
            </div>
        </ul>
    )
};
