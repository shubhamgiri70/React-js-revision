function ErrorMessage(props) {
  return props.foodItems.length === 0 && <h3>I'm still hungry</h3>;
}

export default ErrorMessage;
