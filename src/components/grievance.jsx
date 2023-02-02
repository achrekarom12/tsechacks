import React from "react";
import "./components.css";

function grievance() {
  return (
    <div>
      <br />
      <h1 className="center_h">Grievance Submission</h1>
      <p className="center_h">
        We hear your problems. We will be the voice for you.
      </p>
      <div className="center">
        <form>
          <div class="mb-3"></div>

          <div className="input-group">
            <span clasName="input-group-text">Explain your issue here:</span>
            <textarea
              className="form-control"
              aria-label="With textarea"
            ></textarea>
          </div>
          <br />
          <label for="exampleInputPassword1" className="form-label m-2  ">
            Choose your Ward:
          </label>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Wards
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="/">
                Ward A
              </a>
              <a className="dropdown-item" href="/">
                Ward B
              </a>
              <a className="dropdown-item" href="/">
                Ward C  
              </a>
            </div>
          </div>
          <div className="center_h">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default grievance;
