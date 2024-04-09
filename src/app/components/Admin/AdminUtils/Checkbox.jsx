import s from './Checkbox.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CheckboxCard } from './CheckboxCard';

export const Checkbox = (props) => {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const {
    selector,
    data,
    label,
    newAttribute,
    createFunction,
    deleteFunction,
    actionFunction,
    setNewAttribute,
  } = props;

  function handleNewAttribute(e) {
    e.preventDefault();
    dispatch(createFunction(newAttribute));
    setNewAttribute("");
  };

  return (
    <div>
      <span className={s.checkboxTitle}>
        <label>{label}</label>
        <button type='button' onClick={() => setEdit(!edit)}>{edit ? "Cancelar" : "Editar"}</button>
      </span>

      <ul>
        {
          data?.map((t, index) => (
            <li className={s.checkboxItem} key={`${t.name}-${index}`}>
              <CheckboxCard
                data={t}
                selector={selector}
                actionFunction={actionFunction}
              />
              <label htmlFor={t.name}>{t.name}</label>
              {
                edit &&
                <div className={s.deleteButtonContainer}>
                  <button type='button' onClick={() => dispatch(deleteFunction(t.id))} disabled={!t.name?.length}>
                    x
                  </button>
                </div>
              }
            </li>
          ))
        }
        {
          edit &&
          <div>
            <input value={newAttribute || ''} className={s.inputCreate} onInput={(e) => setNewAttribute(e.target.value)} type="text" />
            <button type='button' onClick={handleNewAttribute} className={s.buttonCreate} disabled={!newAttribute?.length}>
              Agregar
            </button>
          </div>
        }
      </ul>
    </div>
  )
}
