import React, { Component } from 'react';

import Dropzone from 'react-dropzone';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

const imageMaxSize = 10000000; // byte
class ImgDropAndCrop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSrc: null,
      crop: {
        aspect: 1 / 1
      }
    };
  }

  handleOnDrop = (files, rejectedFiles) => {
    // console.log(files);
    // console.log(rejectedFiles);

    if (!!files && files.length > 0) {
      const currentfile = files[0];
      // for easy use
      // this.setState({
      //   imgSrc: currentfile.preview
      // });

      // convert image to base64 image
      const myFileReader = new FileReader();
      myFileReader.addEventListener("load", () => {
        // console.log(myFileReader.result);
        this.setState({
          imgSrc: myFileReader.result
        });
      }, false);

      myFileReader.readAsDataURL(currentfile);
    }

    if (!!rejectedFiles && rejectedFiles.length > 0) {
      const currentRejectedFile = rejectedFiles[0];
      // const currentRejectedFileType = currentRejectedFile.type;
      const currentRejectedFileSize = currentRejectedFile.size;

      if (currentRejectedFileSize > imageMaxSize) {
        alert("File is too big!");
      }
    }
  }

  handleOnCropChange = (crop) => {
    // console.log(crop);
    this.setState({ crop });
  }

  handleOnImageLoaded = (image) => {
    console.log("loaded", image);
  }

  handleOnCropComplete = (crop, pixelCrop) => {
    console.log("On complete", crop, pixelCrop);
  }

  render() {
    const { imgSrc } = this.state;
    const { crop } = this.state;
    return (
      <div>
        <h1>Drop and Crop</h1>

        {imgSrc !== null ?

          <div>
            <ReactCrop
              src={imgSrc}
              crop={crop}
              onChange={this.handleOnCropChange}
              onComplete={this.handleOnCropComplete}
              onImageLoaded={this.handleOnImageLoaded} />
          </div>

          :

          <Dropzone onDrop={this.handleOnDrop} accept='image/*' multiple={false} maxSize={imageMaxSize}>Drop image here or Click to upload image</Dropzone>

        }

      </div>
    );
  }
}

export default ImgDropAndCrop;