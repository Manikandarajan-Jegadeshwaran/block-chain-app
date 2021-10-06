const App = () => {
  const [amount, setAmount] = React.useState(0);
  const [email, setEmail] = React.useState("");
  const [totalAmount, setTotalAmount] = React.useState(0);

  React.useEffect(() => {
    getTotalAmount();
  }, []);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const getTotalAmount = async () => {
    const totalAmountResponse = await axios.get("/totalAmount");
    setTotalAmount(totalAmountResponse?.data?.[0]?.totalAmount ?? 0);
  };

  const handleSave = async () => {
    const response = await axios.post("/lotter_info", { email, amount });
    if (response.data === "Success") {
      getTotalAmount();
    }
  };

  return (
    <>
      <h2>Total Amount {totalAmount}</h2>
      <input placeholder="email" value={email} onChange={handleEmailChange} />
      <input
        placeholder="amount"
        value={amount}
        onChange={handleAmountChange}
      />
      <button onClick={handleSave}>Save</button>
    </>
  );
};

ReactDOM.render(
  <div>
    <App />
  </div>,
  document.getElementById("root")
);
