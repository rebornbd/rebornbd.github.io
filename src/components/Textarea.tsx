interface textareaProps {
  value: string;
  label: string;
  setHandler: ((string: string) => void);
  rows?: number;
  placeholder?: string;
  isValid?: boolean;
}

export const Textarea = ({ value, label, setHandler, rows=5, placeholder="", isValid=true }: textareaProps) => {
  const boder = (isValid)
    ? "2px solid #303030"
    : "2px solid #FF5D5D";
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', paddingBottom: '10px' }}>
      <label>{label}</label>
      <textarea
        value={value}
        onChange={(e) => setHandler(e.target.value)}
        placeholder={placeholder}
        rows={rows}
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
