import { promises as fs } from "fs";

export default async function getHeros() {
  const herosFile = "./data/heros.json";
  //Read the json data file data.json
  const fileContents = await fs.readFile(herosFile, "utf8");
  //Return the content of the data file in json format
  return JSON.parse(fileContents);
}
