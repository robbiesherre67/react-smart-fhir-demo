export default function Button({ children, onClick, variant = "default" }) {
    return (
      <button
        onClick={onClick}
        className={`btn ${variant === "primary" ? "btn-primary" : ""}`}
      >
        {children}
      </button>
    );
  }
  