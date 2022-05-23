interface textareaProps {
  value: string;
  label: string;
  setHandler: ((string: string) => void);
  rows?: number;
  placeholder?: string;
}

export const Textarea = ({ value, label, setHandler, rows=5, placeholder="" }: textareaProps) => {
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
          padding: '2px 5px',
          border: '2px solid #303030',
          borderRadius: "2px",
          backgroundColor: 'transparent',
        }}
      />
    </div>
  )
}
