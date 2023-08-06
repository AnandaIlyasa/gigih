export default function Button({label, handleClick, bg="green"}) {
    return (
        <button
            onClick={handleClick}
            style={{
                padding: "1rem 2rem",
                backgroundColor: bg === "green" ? "springgreen" : "salmon",
                color: "black",
                fontWeight: "bold",
                fontSize: "1rem",
                borderRadius: "2rem"
            }}
        >
            {label}
        </button>
    )
}