import { SliderCard } from "./SliderCard";
import { SliderButtons } from "./SliderButtons";
import { $d } from "../../../functions";

export const Slider = (props) => {
    const { title, data, s, id } = props;

    return (
        <div className={s.sliderCont}>
            <h3>{title}</h3>
            <div 
                className={s.slidercategories}
                onMouseEnter={() => {
                    if(data?.length <= 1) {
                        return(
                            $d(`#${id}PostBtn`).style.display="none",
                            $d(`#${id}PostBtn`).style.transitionDuration='1s'
                        )
                    }
                    return (
                        $d(`#${id}PostBtn`).style.transitionDuration='1s',
                        $d(`#${id}PostBtn`).style.cursor='pointer',
                        $d(`#${id}PostBtn`).style.opacity='1',
                        $d(`#${id}PrevBtn`).style.opacity='1',
                        $d(`#${id}PostBtn`).style.background='linear-gradient(to left, rgb(255, 255, 255), transparent)'
                    )}
                }
                onMouseLeave={() => {
                    return (
                        $d(`#${id}PostBtn`).style.transitionDuration='1s',
                        $d(`#${id}PrevBtn`).style.opacity='0',
                        $d(`#${id}PostBtn`).style.opacity='0',
                        $d(`#${id}PostBtn`).style.background='linear-gradient(to left, rgb(255, 255, 255), transparent)'
                    )}
                }>
                <div className={s.sliderContItems}>
                    <SliderButtons
                        name = {title}
                        keyID = {id}
                        categories = {data}
                        style = {s} />
                    <SliderCard
                        data = {data}
                        keyID = {id}
                        key = {`${title}Sldr`}
                        style = {s} />
                </div>
            </div>
        </div>
    )
}
