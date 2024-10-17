function AddTodo() {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-sm-6">
          <input type="text" placeholder="Enter your TODO" />
        </div>
        <div className="col-sm-4">
          <input type="date" />
        </div>
        <div className="col-sm-2">
          <button type="button" className="btn btn-success">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
