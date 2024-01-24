import "./select.css";

const Select = ({ label, name, value, handleChange, options }) => {
  return (
    <div key={name} className="select-container">
      <label htmlFor={name}>{label}</label>
      <select
        className="select"
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
      >
        {(options || []).map(({ desc, name }, index) => (
          <option key={index} value={name}>
            {desc}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
