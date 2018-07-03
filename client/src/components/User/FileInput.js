import React, { Component } from "react";

class FileInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
  }

  handleSubmit(event) {
    event.preventDefault();
    let fileInput = this.fileInput.current.files[0].name;
  
    console.log(
      `Selected file: ${
        fileInput
      }`
    )
  }
  
  
  render() {
    return (
      
      <form onSubmit={this.handleSubmit}>
        <label>
          Upload file:
          <input type="file" ref={this.fileInput} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

const imageFile = () => {

}
 
export { imageFile };
export default FileInput;