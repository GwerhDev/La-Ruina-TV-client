import s from "./Slider.module.css";
import { SliderList } from "./SliderList";
import { SliderButtons } from "./SliderButtons";
import { enterSlider, leaveSlider } from "../../../functions/Slider";

export const Slider = (props) => {
    const { title, data, id } = props;

    return (
        <>
            {
                data?.length
                ?
                <div className={s.sliderCont}>
                    <h3>{title}</h3>
                    <div className={s.slidercategories}
                        onMouseEnter={() => enterSlider(data, id)}
                        onMouseLeave={() => leaveSlider(id)}
                    >
                        <div className={s.sliderContItems}>
                            <SliderButtons name={title} keyID={id} categories={data} />
                            <SliderList data={data} keyID={id} key={`${title}Sldr`} />
                        </div>
                    </div>
                </div>
                :
                <div className={s.emptySliderContItems}>
                    <span className={s.emptyTitle}></span>
                    <div className={s.emptySliderList}>
                        <span className={s.emptySlider}></span>
                        <span className={s.emptySlider}></span>
                    </div>
                </div>
            }
        </>
    );
}
