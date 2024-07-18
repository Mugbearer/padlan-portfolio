interface CloseMenuButtonProps {
  onButtonClick: () => void;
}

const CloseMenuButton: React.FC<CloseMenuButtonProps> = ({ onButtonClick }) => {
  return (
    <button
      onClick={onButtonClick}
      style={{
        width: "30px", // Match SVG width
        height: "30px", // Match SVG height
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "none",
        backgroundColor: "transparent",
        cursor: "pointer",
        padding: 0, // Remove default padding
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="30"
        viewBox="0 96 960 960"
        width="30"
      >
        <path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
      </svg>
    </button>
  );
};

export default CloseMenuButton;
