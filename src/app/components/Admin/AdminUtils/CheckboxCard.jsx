import s from './CheckboxCard.module.css';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

export const CheckboxCard = (props) => {
  const dispatch = useDispatch();
  const { data, selector, actionFunction } = props;
  const [checked, setChecked] = useState(false);

  function handleCheck() {
    dispatch(actionFunction(data));
  };

  useEffect(() => {
    setChecked(selector?.find(e => e.id === data.id));
  }, [selector, data]);

  return (
    <input
      className={s.checkbox}
      type="checkbox"
      name={data.name}
      value={data.name || ''}
      checked={checked || false}
      onChange={handleCheck}
    />
  )
}
