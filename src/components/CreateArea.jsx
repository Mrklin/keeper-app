import React , { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {

  const [create, setCreate] = useState({
    title: "",
    content: ""
  });

  const [click, setClick] = useState(false);


  function handleContent(event) {
    const {name, value} = event.target;

    setCreate(prevContents => {
      return{ ...prevContents,
        [name]: value
      }
    });
  }

  function isClicked() {
    setClick(true);
  }
    

  return (
    <div>
      <form className="create-note" onSubmit={(event) => {
        event.preventDefault();
      }}>
        {click && <input onChange={handleContent} 
        value={create.title} 
        name="title" 
        placeholder="Title" />}

        <textarea onChange={handleContent} 
          onClick={isClicked}
         name="content" 
         value={create.content} 
         placeholder="Take a note..." 
         rows= {click ? "3" : "1" } /> 

        <Zoom in={click}>
        <Fab color="secondary" onClick={() => {
            props.addContent(create);
            setCreate({title:"",content:""});
        }}>
          <AddIcon />
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
