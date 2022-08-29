import React from "react";
import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

function App() {
  return (
    <MDBContainer className="d-flex justify-content-center">
      <Link to="/List2">
        <MDBBtn className="ms-3 mt-3">List 2</MDBBtn>
      </Link>
      <Link to="/List3">
        <MDBBtn className="ms-3 mt-3">List 3</MDBBtn>
      </Link>
      <Link to="/List4">
        <MDBBtn className="ms-3 mt-3">List 4</MDBBtn>
      </Link>
      <Link to="/List5">
        <MDBBtn className="ms-3 mt-3">List 5</MDBBtn>
      </Link>
      <Link to="/List6">
        <MDBBtn className="ms-3 mt-3">List 6</MDBBtn>
      </Link>
    </MDBContainer>
  );
}

export default App;
