import { RefObject } from "react";


interface inputProps {
  value: string;
  label: string;
  setHandler: ((string: string) => void);
  type?: string;
  placeholder?: string;
  isValid?: boolean;
}

export const Input = ({ value, label, setHandler, type="text", placeholder="", isValid=true }: inputProps) => {
  const boder = (isValid)
    ? "2px solid #303030"
    : "2px solid #FF5D5D";

  return (
    <div style={{ display: 'flex', flexDirection: 'column', paddingBottom: '10px' }}>
      <label>{label}</label>
      <input
        value={value}
        onChange={(e) => setHandler(e.target.value)}
        type={type}
        placeholder={placeholder}
        required
        style={{
          border: boder,
          padding: '2px 5px',
          borderRadius: "2px",
          backgroundColor: 'transparent',
        }}
      />
    </div>
  )
}
