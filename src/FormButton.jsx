const FormButton = (props) => {
  return (
    <button type={props.type} className={props.className}>
      {props.text}
    </button>
  );
};

export default FormButton;
