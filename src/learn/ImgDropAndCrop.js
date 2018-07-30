import React, { Component } from 'react';

import Dropzone from 'react-dropzone';

const imageMaxSize = 10; // byte
class ImgDropAndCrop extends Component {

  handleOnDrop = (files, rejectedFiles) => {
    console.log(files);
    console.log(rejectedFiles);

    if (!!rejectedFiles && rejectedFiles.length > 0) {
      const currentRejectedFile = rejectedFiles[0];
      const currentRejectedFileType = currentRejectedFile.type;
      const currentRejectedFileSize = currentRejectedFile.size;

      if (currentRejectedFileSize > imageMaxSize) {
        alert("File is too big!");
      }
    }
  }

  render() {
    return (
      <div>
        <h1>Drop and Crop</h1>
        <Dropzone onDrop={this.handleOnDrop} accept='image/*' multiple={false} maxSize={imageMaxSize}>Drop file here</Dropzone>
      </div>
    );
  }
}

export default ImgDropAndCrop;