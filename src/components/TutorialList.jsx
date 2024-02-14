import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
import EditModal from "./EditModal";
import { useState } from "react";

const TutorialList = ({ tutorials, getApi }) => {
  const [editItem, setEditItem] = useState("");

  console.log(editItem);
  // const tutorials = [
  //   {
  //     id: 1,
  //     title: "JS",
  //     description: "JS is a programming language",
  //   },
  //   {
  //     id: 2,
  //     title: "React",
  //     description: "JS library for UI design",
  //   },
  // ]
  const BASE_URL = "https://tutorial-api.fullstack.clarusway.com/tutorials/";

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`${BASE_URL}${id}/`);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
    getApi();
  };

  //?Another way of doing
  // const handleDelete = async(id)=>{
  //   const BASE_URL = "https://tutorial-api.fullstack.clarusway.com/tutorials";
  //  const res =await axios.delete(`${BASE_URL}/${id}/`)
  // }

  // const editTutor = async (tutor) => {
  //   try {
  //     await axios.put(`${BASE_URL}${tutor.id}/`, tutor);
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   getApi();
  // };

  return (
    <div className="container mt-4">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col" className="text-center">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          {tutorials?.map((item) => {
            const { id, title, description } = item;
            return (
              <tr key={id}>
                <th>{id}</th>
                <td>{title}</td>
                <td>{description}</td>
                <td className="text-center text-nowrap">
                  <FaEdit
                    size={20}
                    type="button"
                    className="me-2 text-warning"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    //?Manual Method
                    // onClick={() =>
                    //   editTutor({
                    //     id: 1683,
                    //     title: "react",
                    //     description: "react-1",
                    //   })
                    // }

                    onClick={() => setEditItem(item)}
                  />
                  <AiFillDelete
                    onClick={() => handleDelete(id)}
                    size={22}
                    type="button"
                    className="text-danger "
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <EditModal editItem={editItem} getApi={getApi}/>
    </div>
  );
};

export default TutorialList;
