import { $d } from "."

export function reset() {
  $d(`.bodyApp`).style.transform = 'translateX(0)';
  $d(`.bodyApp`).style.transitionDuration = '2s';
  $d(`.nav-container`).style.transitionDuration = '.2s';
  $d(`.nav-container`).style.width = '100vw';
  $d(`.browserBody`).style.height = 'auto';
  $d(`.browserBody`).style.overflowY = 'scroll';
  $d(`.visor`).style.transform = 'translateX(0)';
  $d('#slideCanvasCont').style.overflowY = 'hidden';
  $d('.canvas-menu-container').style.display = 'none';
};