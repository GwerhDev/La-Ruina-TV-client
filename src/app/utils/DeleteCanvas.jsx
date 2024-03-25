import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { $d } from "../../functions";
import s from "./DeleteCanvas.module.css";
import { useDispatch } from "react-redux";

export const DeleteCanvas = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { keyId, id, deleteFunction } = props;

  function handleDelete() {
    dispatch(deleteFunction(id));
    $d(`#canvas-delete${keyId}${id}`).style.display='none';
    if (history.location.pathname !== '/browser') {
      history.push('/browser');
    }
  };

  function handleCancelDelete() {
    $d(`#canvas-delete${keyId}${id}`).style.display='none';
  };

  return (
    <div className={s.container} id={`canvas-delete${keyId}${id}`} style={{ display:'none' }}>
      <div className={s.canvasContainer}>
        ¿Eliminar?
        <button className={s.secundaryButton} onClick={handleDelete}>Sí</button>
        <button className={s.primaryButton} onClick={handleCancelDelete}>No</button>
      </div>
    </div>
  )
}