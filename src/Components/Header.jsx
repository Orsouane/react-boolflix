function Header() {
  return (
    <div className="bg-black p-3">
      <div className="d-flex justify-content-between ">
        <h2 className="w-25 text-danger"> Boolflix</h2>
        <div className="d-flex  justify-content-end  align-items-center g-5 ">
          <select
            className="form-select w-50"
            aria-label="Default select example "
          >
            <option>Tutti i generi</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>

          {/* search */}
          <nav className="navbar navbar-light ">
            <form className="form-inline d-flex">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search "
                aria-label="Search"
              />
              <button className="btn btn-danger my-2 my-sm-0" type="submit">
                Cerca
              </button>
            </form>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
