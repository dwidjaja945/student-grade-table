import React, { Component } from "react";
import Header from "./header";
import AddStudent from "./add_student";
import StudentList from "./student_list";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <Header />
        <div className="">
          <StudentList />
          <AddStudent />
        </div>
      </div>
    );
  }
}

export default App;
