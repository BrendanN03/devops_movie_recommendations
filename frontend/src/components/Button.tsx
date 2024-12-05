import { useState } from "react";
import { getLikedMovie } from "../lib/api";

export default function Button() {
  const [likedMovie, setLikedMovie] = useState("");
  const handleClick = async () => {
    try {
      const { message } = await getLikedMovie();
      setLikedMovie(message);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };
  return (
    <>
      <div className="bg-gray-200">
        <div onClick={() => handleClick()}>Click me to get a random movie</div>
        <div>{likedMovie}&nbsp;</div>
      </div>
    </>
  );
}
