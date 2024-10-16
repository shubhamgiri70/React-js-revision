function Clock() {
  let date = new Date().toDateString();
  let time = new Date().toTimeString();
  return (
    <div>
      <h2 className="lead">
        this is the current time: {date} {time}
      </h2>
    </div>
  );
}

export default Clock;
