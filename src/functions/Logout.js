export function logout(history) {
  return (
    localStorage.clear(),
    history.push('/browser'),
    window.location.reload()
  )
}