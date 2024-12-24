import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const isClicked = false;

  const [contents, setContents] = useState([]);

  
  function addContent(createNew) {
    setContents(prevContents => {
        return [...prevContents, createNew]
    })
  }

  function deleteContent(id) {
    setContents(prevContents => {
        return prevContents.filter((content, index) =>{
          return index !== id
        })
    })

  }



  return (
    <div>
      <Header />
      <CreateArea 
        addContent = {addContent}
        isClicked = {isClicked}
      />
        {contents.map((create, index)=> (
          <Note key={index}
           id = {index}
           title={create.title} 
           content={create.content}
           delete = {deleteContent} 
           />
        ))}
      
      <Footer />
    </div>
  );
}

export default App;
