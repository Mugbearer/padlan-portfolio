interface OpenMenuButtonProps {
  onButtonClick: () => void;
}

const OpenMenuButton: React.FC<OpenMenuButtonProps> = ({ onButtonClick }) => {
  return (
    <button onClick={onButtonClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="30"
        viewBox="0 96 960 960"
        width="30"
      >
        <path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" />
      </svg>
    </button>
  );
};

export default OpenMenuButton;
