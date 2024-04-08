import s from './CheckboxItem.module.css';

export const CheckboxItem = (props) => {
  const { item, checkbox } = props;

  return (
    <input
      className={s.checkbox}
      type="checkbox"
      name={item.name}
      value={item.name || ''}
      onChange={() => checkbox(item.id)}
    />
  )
}
