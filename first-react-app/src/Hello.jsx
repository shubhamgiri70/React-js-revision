function Hello() {
  let number = 1;
  function fullname() {
    return "Shubham Giri";
  }

  return (
    <h2>
      messageNo: {number} Hello i'm {fullname()}
    </h2>
  );
}
export default Hello;
