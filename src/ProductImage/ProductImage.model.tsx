import React, { useEffect, useRef, useState } from "react";
import { initialState } from "./ProductImage.constants";
import { ModelPropTypes } from "./ProductImage.types";
import axios from "axios";
import { blob } from "stream/consumers";

const useModel = (parentProps: ModelPropTypes) => {
  const { props } = parentProps;
  const { data, totalRetry, setImageError } = props;
  const [retryCount, setRetryCount] = useState(0);
  const [imageData, setImageData] = useState<any>('');
  const [errorImage, setErrorImage] = useState(false);
  const [loading, setLoading] = useState(true);
  
  let timeOutCallRef: any = undefined;


  useEffect(() => {
    fetchImage();
    return () => clearTimeout(timeOutCallRef)
  }, []);

  useEffect(() => {
    fetchImage();
  }, [retryCount]);

  const fetchImage = async () => {
    clearTimeout(timeOutCallRef);
    try {
      setLoading(true);
      const response = await axios.get(data.url, {responseType: 'arraybuffer'});
      console.log(response);
      if(response.status === 200) {
        const blob = new Blob([response.data]);
        const srcBlob = URL.createObjectURL(blob);
        setLoading(false);
        setImageData(srcBlob);
      }

    } catch (err) {
      console.log({err})
      if(err) {
        if (retryCount !== totalRetry) {
          clearTimeout(timeOutCallRef)
          timeOutCallRef = setTimeout(() => {
            setRetryCount(prev => prev + 1);
          }, 5000);
        } else {
          setLoading(false);
          setImageError(true);
          setErrorImage(true)
        }
      }
    }
  }

  return {
    ...props,
    loading,
    retryCount,
    imageData,
    errorImage
  }
};


export default useModel;
