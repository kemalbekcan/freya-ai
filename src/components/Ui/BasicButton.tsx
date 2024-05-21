const BasicButton = ({ variant, onClick, children }: any) => {
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default BasicButton;
