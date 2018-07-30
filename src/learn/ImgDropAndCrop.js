import React, { Component } from 'react';

import Dropzone from 'react-dropzone';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

import {
  base64StringtoFile,
  downloadBase64File,
  image64toCanvasRef,
  extractImageFileExtensionFromBase64
} from './ReusableUtils';

const imageMaxSize = 10000000; // byte
class ImgDropAndCrop extends Component {
  constructor(props) {
    super(props);
    this.imagePreviewCanvasRef = React.createRef();
    this.fileSelectRef = React.createRef();
    this.state = {
      imgSrc: null,
      imgExt: null,
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
        const myResult = myFileReader.result;
        this.setState({
          imgSrc: myResult,
          imgExt: extractImageFileExtensionFromBase64(myResult)
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

    const canvasRef = this.imagePreviewCanvasRef.current;
    const { imgSrc } = this.state;

    image64toCanvasRef(canvasRef, imgSrc, pixelCrop)
  }

  handleDownload = (event) => {
    event.preventDefault();
    const { imgSrc } = this.state;

    if (!!imgSrc) {

      const canvasRef = this.imagePreviewCanvasRef.current;
      const { imgExt } = this.state;

      const imageData64 = canvasRef.toDataURL('image/' + imgExt);
      const downloadFileName = "previewFile." + imgExt;

      console.log("downloadFileName", downloadFileName);
      // file to be uploaded
      const myNewCroppedFile = base64StringtoFile(imageData64, downloadFileName);

      // download file
      downloadBase64File(imageData64, downloadFileName);
      this.handleSetToDefault();
    }
  }

  handleSetToDefault = (event) => {
    if (event) event.preventDefault();
    const canvas = this.imagePreviewCanvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    this.setState({
      imgSrc: null,
      imgExt: null,
      crop: {
        aspect: 1 / 1
      }
    });

    this.fileSelectRef.current.value = null;
  }

  handleFileSelect = (event) => {
    // console.log(event);
    const files = event.target.files;
    if (!!files && files.length > 0) {
      const currentfile = files[0];

      // convert image to base64 image
      const myFileReader = new FileReader();
      myFileReader.addEventListener("load", () => {
        const myResult = myFileReader.result;
        this.setState({
          imgSrc: myResult,
          imgExt: extractImageFileExtensionFromBase64(myResult)
        });
      }, false);

      myFileReader.readAsDataURL(currentfile);
    }

  }

  render() {
    const { imgSrc } = this.state;
    const { crop } = this.state;
    return (
      <div>
        <h1>Drop and Crop</h1>

        <input ref={this.fileSelectRef} type="file" accept="image/*" multiple={false} onChange={this.handleFileSelect} />

        {imgSrc !== null ?

          <div>
            <ReactCrop
              src={imgSrc}
              crop={crop}
              onChange={this.handleOnCropChange}
              onComplete={this.handleOnCropComplete}
              onImageLoaded={this.handleOnImageLoaded} />

            <br />

            <p>Image preview</p>
            <canvas
              ref={this.imagePreviewCanvasRef}>
            </canvas>

            <br />
            <button onClick={this.handleDownload}>Download croped image</button>
            <button onClick={this.handleSetToDefault}>Clear</button>
          </div>

          :

          <Dropzone onDrop={this.handleOnDrop} accept='image/*' multiple={false} maxSize={imageMaxSize}>Drop image here or Click to upload image</Dropzone>

        }

      </div>
    );
  }
}

export default ImgDropAndCrop;