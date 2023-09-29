import { $d } from "../../../functions";
import s from "./DeleteCanvas.module.css";
import { useDispatch } from "react-redux";

export const DeleteCanvas = (props) => {
  const dispatch = useDispatch();
  const { id, deleteFunction } = props;

  function handleDelete() {
    dispatch(deleteFunction(id));
  };

  function handleCancelDelete() {
    $d(`#deleteCanvas${id}`).style.display='none';
  }

  return (
    <div className={s.container} id={`deleteCanvas${id}`} style={{display:'none'}}>
      <div className={s.canvasContainer}>
        ¿Eliminar?
        <button className={s.secundaryButton} onClick={handleDelete}>Sí</button>
        <button className={s.primaryButton} onClick={handleCancelDelete}>No</button>
      </div>
    </div>
  )
}