import { useDispatch } from 'react-redux';
import s from './Checkbox.module.css';
import { useState } from 'react';
import { CheckboxItem } from './CheckboxItem';

export const Checkbox = (props) => {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);

  const { label, data, checkbox, handleNewAttribute, newAttribute, setNewAttribute, deleteFunction, selector } = props;

  return (
    <div>
      <span className={s.checkboxTitle}>
        <label>{label}</label>
        <button type='button' onClick={() => setEdit(!edit)}>{!edit ? "Editar" : "Cancelar"}</button>
      </span>

      <ul>
        {
          data?.map((t, index) => (
            <li className={s.checkboxItem} key={`${t.name}-${index}`}>
              <CheckboxItem item={t} checkbox={checkbox} selector={selector} />
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
