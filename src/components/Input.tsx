interface inputProps {
  value: string;
  label: string;
  setHandler: ((string: string) => void);
  type?: string;
  placeholder?: string;
}


export const Input = ({ value, label, setHandler, type="text", placeholder="" }: inputProps) => {
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
          padding: '2px 5px',
          border: '2px solid #303030',
          borderRadius: "2px",
          backgroundColor: 'transparent',
        }}
      />
    </div>
  )
}
