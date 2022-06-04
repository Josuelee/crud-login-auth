const Message = ({ color, msj }) => {
  return (
    <div
      style={{
        backgroundColor: color,
        color: "#fff",
        margin: "1rem auto",
        width: "40%",
        padding: "1rem",
        textAlign: "center",
      }}
    >
      {msj}
    </div>
  );
};
export default Message;
