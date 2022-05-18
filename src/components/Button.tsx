interface buttonProps {
  label: string;
  onClickHandler: () => void;
}


export const Button = ({ label, onClickHandler }: buttonProps) => {
  return (
    <button
      onClick={onClickHandler}
      type='button'
    >{label}</button>
  )
}
