function Random() {
  let number = Math.round(Math.random() * 20);

  return <h1>Random number is: {number}</h1>;
}

export default Random;
