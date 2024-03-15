import { $d } from "."

export function enterSlider(data, id) {
  if (data?.length < 2) {
    return (
      $d(`#${id}PostBtn`).style.display = "none",
      $d(`#${id}PostBtn`).style.transitionDuration = '1s'
    )
  }
  return (
    $d(`#${id}PostBtn`).style.transitionDuration = '1s',
    $d(`#${id}PostBtn`).style.cursor = 'pointer',
    $d(`#${id}PostBtn`).style.opacity = '1',
    $d(`#${id}PrevBtn`).style.opacity = '1',
    $d(`#${id}PostBtn`).style.background = 'linear-gradient(to left, rgb(255, 255, 255), transparent)'
  )
}

export function leaveSlider(id) {
  return (
    $d(`#${id}PostBtn`).style.transitionDuration = '1s',
    $d(`#${id}PrevBtn`).style.opacity = '0',
    $d(`#${id}PostBtn`).style.opacity = '0',
    $d(`#${id}PostBtn`).style.background = 'linear-gradient(to left, rgb(255, 255, 255), transparent)'
)
}