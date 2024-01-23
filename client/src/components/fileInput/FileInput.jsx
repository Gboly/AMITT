import "./file-input.css";

const accept = {
  essay:
    "application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  lastResult: "image/png, image/gif, image/jpeg",
};

const FileInput = ({ handleChange, name, label, value }) => {
  return (
    <div className="text-input-container file-input-container">
      <label htmlFor={name}>
        {label}
        <div>
          <span>Choose file</span> <span>{value || "No file chosen"}</span>
        </div>
      </label>
      <input
        type={"file"}
        id={name}
        onChange={handleChange}
        accept={accept[name] || "*"}
      />
    </div>
  );
};

export default FileInput;
