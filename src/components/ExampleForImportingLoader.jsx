import React, { useEffect, useState } from "react";
import Loader from "./Loader";

function ExampleForImportingLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    try {
      setIsLoading(true);
      /* fetch function here */
      setTimeout(function () {
        setIsLoading(false);
        setErrorMessage(null);
      }, 3000);
      /* but with ".then(setIsLoading(fals..." */
    } catch {
      /* Custom error for fetching results */
      setErrorMessage("Unable to fetch user list");
      setIsLoading(false);
    }
  }, []);

  return (
    <>{isLoading ? <Loader /> : errorMessage ? <span>{errorMessage}</span> : <span>loaded</span>}</>
  );
}

export default ExampleForImportingLoader;
