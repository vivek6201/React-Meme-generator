import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();
const API_KEY = "CpJdLK9U07LN9ZjKw1IVreTJ9PXWP5wU";

export const AppContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [gif, setGif] = useState("");
  const [customGif, setCustomGif] = useState("");

  const fetchRandomGif = async () => {
    try {
      setLoading(true);
      const baseUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
      const { data } = await axios.get(baseUrl);
      const imageUrl = data.data.images.downsized_medium.url;
      setGif(imageUrl);
      setLoading(false);
    } 
    catch (e) {
      console.log(e);
    }
  };

  const fetchCustomGif = async (tag) => {
    try{
        setLoading(true);
        const tagUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
        const { data } = await axios.get(tagUrl);
        const imageUrl = data.data.images.downsized_medium.url;
        setCustomGif(imageUrl);
        setLoading(false);
    }
    catch(e){
        console.log(e);
    }
  };

  useEffect(() => {
    fetchRandomGif();
    fetchCustomGif("car");
  }, []);

  const value = {
    loading,
    setLoading,
    setGif,
    gif,
    fetchRandomGif,
    fetchCustomGif,
    customGif,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
