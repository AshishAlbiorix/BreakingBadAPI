import axios from "axios";
import React, { useEffect, useState } from "react";

function Quotes() {
    
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios.get(`https://breakingbadapi.com/api/quotes`).then((res) => {
      setQuotes(
        res.data.sort(() => Math.random(1) - Math.random(1)).find(() => true)
      );
    });
    setLoading(false);
  }, []);

  return (
    <>
      {
        !loading ? 
            <h3>
            "{quotes.quote}"
            </h3>
        :
        null
      }
    </>
  );
}
export default Quotes;
