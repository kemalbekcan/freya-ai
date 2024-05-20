export const getData = async () => {
  const res = await fetch(`${process.env.API}?offset=0&limit=10`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
