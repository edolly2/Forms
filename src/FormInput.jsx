const FormInput = (props) => {
  return (
    <div className={props.formControlClass}>
      <label className={props.labelClass} htmlFor={props.name}>
        {props.label}
      </label>
      <input
        ref={props.refer}
        className={props.inputClass}
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        value={props.value}
        id={props.id}
        onChange={props.onChange}
      />
    </div>
  );
};

export default FormInput;
