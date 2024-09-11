import React from "react";
import "../src/App.css";
import Card from "./components/Card";
import Header from "./components/Header";

let user = {
  username: "john_doe",
  address: "1234 Elm St, Springfield, IL",
  imgLink:
    "https://t3.ftcdn.net/jpg/06/01/17/18/360_F_601171862_l7yZ0wujj8o2SowiKTUsfLEEx8KunYNd.jpg",
  profession: "Software Engineer",
  email: "john@example.com",
  phoneNumber: "555-1234",
  age: 28,
  bio: "Passionate about coding and coffee.",
};

function App() {
  return (
    <>
      <Header />
      <section className="cards">
        <Card user={user} />
        <Card user={user} />
        <Card user={user} />
        <Card user={user} />
      </section>
    </>
  );
}

export default App;
