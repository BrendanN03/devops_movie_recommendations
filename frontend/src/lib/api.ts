export const VITE_API_ROOT_URL: string | undefined = import.meta.env
  .VITE_API_ROOT_URL;

export type MyResponseType = {
  message: string;
};
export const getLikedMovie = async () => {
  const response = await fetch(`${VITE_API_ROOT_URL}/getLikedMovie`);
  const data = await response.json();
  return data;
};
export const getMovieRec = async () => {
  const response = await fetch(`${VITE_API_ROOT_URL}/getTopSimilarToCurrMovie`);
  const data = await response.json();
  return data;
}