import "./text-input.css";

const inputTypes = {
  email: "email",
  birthday: "date",
};
const textareaTypes = [
  "message",
  "skills",
  "qualifications",
  "reasonForLeaving",
];
const TextInput = ({ value, handleInput, name, label }) => {
  return (
    <div className="text-input-container">
      <label htmlFor={name}>{label}</label>
      {textareaTypes.includes(name) ? (
        <textarea
          id={name}
          value={value}
          onInput={handleInput}
          rows={10}
          // autoComplete="off"
        />
      ) : (
        <input
          type={inputTypes[name] || "text"}
          id={name}
          value={value}
          onInput={handleInput}
          autoComplete="off"
        />
      )}
    </div>
  );
};

export default TextInput;
