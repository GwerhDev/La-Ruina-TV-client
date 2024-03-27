import s from './SecondaryButton.module.css';

export const SecondaryButton = (props) => {
  const { text, icon, iconId, onClick, onMouseEnter, onMouseLeave } = props;

  return (
    <button className={s.secondaryButton} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {
        icon &&
        <img id={iconId || ""} src={icon} alt="" />
      }
      {text}
    </button>
  )
}
