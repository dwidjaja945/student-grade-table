import React, { Component } from "react";
import Counter from "./counter";
import Header from "./header";
import AddStudent from "./add_student";
import StudentList from "./student_list";
import "./App.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="row">
          <StudentList />
          <AddStudent />
        </div>
      </div>
    );
  }
}

export default App;
