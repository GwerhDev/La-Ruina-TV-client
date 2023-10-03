import { $d } from ".";

export function CanvasMenuFunction() {
    document.addEventListener('mouseup', function (e) {
        var container = $d('.contCanvasMenu');
        if (!container?.contains(e.target)) return $d('.contCanvasMenu').style.display='none';
        return;
    });
};
