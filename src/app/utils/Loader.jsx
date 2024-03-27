import s from './Loader.module.css';

export const Loader = (props) => {
  const { message, width } = props;

  return (
    <div className={s.container} style={{ width }}>
      <span className={s.loader} style={{ width }}></span>
      {
        message && <p className={s.message}>{message}</p>
      }
    </div>
  )
}
