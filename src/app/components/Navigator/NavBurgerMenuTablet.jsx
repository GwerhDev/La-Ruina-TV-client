import menuIcon from '../../../assets/images/menu-icon.png';
import { $d } from '../../../functions';

export const NavBurgerMenuTablet = () => {
    return (
        <div className="navBurgerTabletCont">
            <img 
                className='menuIcon' 
                onClick={()=>{$d('.canvas-menu-container').style.display='flex'}}
                src={menuIcon} 
                alt="menu" 
                height='30px' />
        </div>
    )
}