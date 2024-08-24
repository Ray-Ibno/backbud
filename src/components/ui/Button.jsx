const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`mainButtonColor px-4 py-2 rounded shadow-md ${props.style}`}
    >
      {props.buttonLabel}
    </button>
  )
}

export default Button
