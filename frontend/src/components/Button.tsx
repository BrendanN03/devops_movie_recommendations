import { useState } from "react";
import { getLikedMovie } from "../lib/api";

export default function Button() {
  const [likedMovie, setLikedMovie] = useState("");
  const handleClick = async () => {
    try {
      const { message } = await getLikedMovie();
      setLikedMovie(message)
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };
  return (
    <>
      <div onClick={() => handleClick()}>Click me to get likedMovie</div>
      <div>{likedMovie}</div>
    </>
  );
}
