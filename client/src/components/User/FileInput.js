import React, { Component } from "react";

class FileInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.fileInput = React.createRef();
  }

  handleChange(event) {
    event.preventDefault();
    let fileInput = this.fileInput.current.files[0].name;
  
    console.log(
      `Selected file: ${
        fileInput
      }`
    )
    return fileInput;
  }
  
  render() {
    return (
      <div onChange={this.handleChange}>

        <label>
          Upload file:
          <input type="file" ref={this.fileInput} />
        </label>
      </div>
    );
  }
}

export default FileInput;