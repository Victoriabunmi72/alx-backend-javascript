// The prototype function getResponseFromAPI
function getResponseFromAPI() {
  // We're returning a new Promise here.
  return new Promise((resolve, reject) => {
    // Simulating a delayed response from the API using setTimeout
    setTimeout(() => {
      const apiResponse = { data: "This is the response from the API!" };
      // If everything goes well, we'll resolve the Promise with the API response.
      resolve(apiResponse);
      // If there's an error, we'll reject the Promise with an error message.
      // For simplicity, we won't introduce any errors in this example.
      // If an error occurred during an actual API call, we could reject the Promise here.
    }, 2000); // Simulating a delay of 2000 milliseconds (2 seconds)
  });
}

// Calling the getResponseFromAPI function
getResponseFromAPI()
  .then((response) => {
    // This block will execute when the Promise is resolved successfully.
    console.log("API response:", response);
  })
  .catch((error) => {
    // This block will execute if there was an error during the API call.
    console.error("Error occurred:", error);
  });
