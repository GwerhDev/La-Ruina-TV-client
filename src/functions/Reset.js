import { $d } from "."

export function reset() {
  $d(`.bodyApp`).style.transform = 'translateX(0)';
  $d(`.bodyApp`).style.transitionDuration = '2s';
  $d(`.navCont`).style.transitionDuration = '.2s';
  $d(`.navCont`).style.width = '100%';
  $d(`.browserBody`).style.height = 'auto';
  $d(`.browserBody`).style.overflowY = 'scroll';
  $d(`.visor`).style.transform = 'translateX(0)';
  $d('#slideCanvasCont').style.overflowY = 'hidden';
  $d('.contCanvasMenu').style.display = 'none';
};