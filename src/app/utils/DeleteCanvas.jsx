import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import {$gId } from "../../functions";
import s from "./DeleteCanvas.module.css";
import { useDispatch } from "react-redux";

export const DeleteCanvas = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id, deleteFunction, title } = props;

  function handleDelete() {
    dispatch(deleteFunction(id));
    $gId(`canvas-delete`).style.display='none';
    if (history.location.pathname !== '/browser') {
      history.push('/browser');
    }
  };

  function handleCancelDelete() {
    $gId(`canvas-delete`).style.display='none';
  };

  return (
    <div className={s.container} id={`canvas-delete`}>
      <div className={s.canvasContainer}>
        ¿Eliminar "{title}"?
        <button className={s.secundaryButton} onClick={handleDelete}>Sí</button>
        <button className={s.primaryButton} onClick={handleCancelDelete}>No</button>
      </div>
    </div>
  )
}