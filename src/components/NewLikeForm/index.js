import { useState } from "react";
import styles from "./NewLikeForm.module.scss";
export const NewLikeForm = () => {
  const [like, setLike] = useState("");
  const fetchFunction = async (endpoint, method, data) => {
    try {
      console.log(JSON.stringify(data));
      const response = await fetch(endpoint, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      return await response;
    } catch (err) {
      console.error(err);
    }
  };
  const submitLike = async () => {
    try {
      let data = { url: `${like}` };
      const fetchLikes = await fetchFunction(
        "https://ge3tyb1a3k.execute-api.us-east-1.amazonaws.com/staging/likes",
        "POST",
        data
      ).then((response) => {
        console.log(response);
        return response.json();
      });
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className={styles.newLikeForm}>
      <input value={like} onChange={(e) => setLike(e.target.value)} />
      <button onClick={submitLike}>Submit</button>
    </div>
  );
};
