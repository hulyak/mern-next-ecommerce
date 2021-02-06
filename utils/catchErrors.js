// where to get info about the error and display to user
function catchErrors(error, displayError) {
  let errorMessage;
  if (error.response) {
    // the request was made and the server responded with a status code that is not in the range of 2XX
    errorMessage = error.response.data;
    console.error('Error message: ', errorMessage);

    // For Cloudinary image uploads
    if (error.response.data.error) {
      errorMessage = error.response.data.error.message;
    }
  } else if (error.request) {
    // the request was made and no response was received
    errorMessage = error.request;
    console.error('Error request: ', errorMessage);
  } else {
    // Something else happened in making the request that triggered an error
    errorMessage = error.message;
    console.error('Error message: ', errorMessage);
  }
  displayError(errorMessage);
}

export default catchErrors;
