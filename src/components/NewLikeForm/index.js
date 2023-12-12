import { useEffect, useState } from "react";
import styles from "./NewLikeForm.module.scss";
export const NewLikeForm = () => {
  const [like, setLike] = useState("");
  const [likedData, setLikedData] = useState({ title: "", image: "" });
  const fetchFunction = async (endpoint, method, data) => {
    try {
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
      ).then(async (response) => {
        return response.json();
      });
      setLikedData(JSON.parse(fetchLikes.body));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={styles.newLikeForm}>
      <div>
        <input value={like} onChange={(e) => setLike(e.target.value)} />
        <button onClick={submitLike}>Submit</button>
      </div>
      <LikedData data={likedData} />
    </div>
  );
};

const LikedData = ({ data }) => {
  return (
    <div className={styles.likedData}>
      <img src={data.image} alt={data.title} />
      <h3>{data.title}</h3>
      <p>{data.url}</p>
    </div>
  );
};
