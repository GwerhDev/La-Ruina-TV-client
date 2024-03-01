import s from "./Slider.module.css";
import { SliderList } from "./SliderList";
import { SliderButtons } from "./SliderButtons";
import { $d } from "../../../functions";

export const Slider = (props) => {
    const { title, data, id } = props;

    return (
        <>
            {
                data?.length > 1
                    ?
                    <div className={s.sliderCont}>
                        <h3>{title}</h3>
                        <div
                            className={s.slidercategories}
                            onMouseEnter={() => {
                                if (data?.length <= 1) {
                                    return (
                                        $d(`#${id}PostBtn`).style.display = "none",
                                        $d(`#${id}PostBtn`).style.transitionDuration = '1s'
                                    )
                                }
                                return (
                                    $d(`#${id}PostBtn`).style.transitionDuration = '1s',
                                    $d(`#${id}PostBtn`).style.cursor = 'pointer',
                                    $d(`#${id}PostBtn`).style.opacity = '1',
                                    $d(`#${id}PrevBtn`).style.opacity = '1',
                                    $d(`#${id}PostBtn`).style.background = 'linear-gradient(to left, rgb(255, 255, 255), transparent)'
                                )
                            }
                            }
                            onMouseLeave={() => {
                                return (
                                    $d(`#${id}PostBtn`).style.transitionDuration = '1s',
                                    $d(`#${id}PrevBtn`).style.opacity = '0',
                                    $d(`#${id}PostBtn`).style.opacity = '0',
                                    $d(`#${id}PostBtn`).style.background = 'linear-gradient(to left, rgb(255, 255, 255), transparent)'
                                )
                            }
                            }>
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
    )
}
