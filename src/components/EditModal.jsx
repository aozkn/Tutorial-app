import axios from "axios";
import React, { useEffect, useState } from "react";

const EditModal = ({ editItem, getApi }) => {
  const { id, description: NewDescription, title: NewTitle } = editItem;
  const [title, setTitle] = useState(NewTitle);
  const [description, setDescription] = useState(NewDescription);

  // console.log(NewTitle);
  // console.log(NewDescription);
  // console.log(title);
  // console.log(description);
  //!State degiskeninin degeri , 1.render ile initialState
  //!parametresinin ilk degerini alir .Dolayisiyla bu durumda
  //!prop'tan gelen ilk deger state'e aktarilir.
  //!sonradan degisen props degerleri useState'e aktarilmaz.
  //!Eger props'tan gelen degerleri her degisimde useState'e
  //!aktarmak istersek useEffect hook'unu componentDidUpdate gibi kullanabiliriz.

  //?componenetDidUpdate
  useEffect(() => {
    setTitle(NewTitle);
    setDescription(NewDescription);
  }, [NewTitle, NewDescription]);
  const BASE_URL = "https://tutorial-api.fullstack.clarusway.com/tutorials";
  const editTutor = async (tutor) => {
    try {
      await axios.put(`${BASE_URL}/${id}/`, tutor);
    } catch (error) {
      console.log(error);
    }
    getApi();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editTutor({ title, description });
  };
  return (
    <div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title text-success fs-5"
                id="exampleModalLabel"
              >
                Edit Tutorial
              </h1>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form onClick={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    placeholder="Enter your title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="desc" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="desc"
                    placeholder="Enter your Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </div>
                <div className="text-end">
                  <button
                    type="submit"
                    className="btn btn-danger"
                    data-bs-dismiss="modal"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
