import "./Input.scss"

export function Input(props) {
  return (
    <>
      <label>
        {props.label}
        <div>
          <input 
          type={props.type}
          name={props.name}
          placeholder={props.placeholder} 
          value={props.value} 
          defaultValue={props.defaultValue}
          onChange={props.onChange}
          onFocus={props.onFocus}
          onBlur={props.onBlur} />
        </div>
      </label>
    </>
  );
}