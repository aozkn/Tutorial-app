import { useEffect, useState } from "react";
import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios";
const Home = () => {
  const [tutorials, setTutorials] = useState([]);

  const BASE_URL = "https://tutorial-api.fullstack.clarusway.com/tutorials/";

  const getApi = async () => {
    try {
      const { data } = await axios(BASE_URL);
      setTutorials(data);
    } catch (error) {
      console.log(error);
    }
  };
  //? Sending a request at the mount stage
  useEffect(() => {
    getApi();
  }, []);

  console.log(tutorials);

  return (
    <>
      <AddTutorial getApi={getApi} />
      <TutorialList tutorials={tutorials} getApi={getApi} />
    </>
  );
};

export default Home;
