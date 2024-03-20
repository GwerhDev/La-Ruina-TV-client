import s from './FilteredCard.module.css'
import { Link } from "react-router-dom";
import { RenderImageGwerhdinary } from '../../../functions/RenderImageGwerhdinary';

export const FilteredCard = (props) => {
    const { id, title, img, artist } = props;

    return (
        <div className={s.container}>
            <div className={s.cardContainer} style={{ backgroundImage: `url(${RenderImageGwerhdinary(img)})` }}>
                <Link to={`/view/v=${id}`}>
                    <div className={s.divContSearch}>
                        <h2 className={s.artist}>{artist}</h2>
                        <h1 className={s.title}>{title}</h1>
                    </div>
                </Link>
            </div>
        </div>
    )
}