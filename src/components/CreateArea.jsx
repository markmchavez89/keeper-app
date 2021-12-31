import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {

    const [isExpanded, setExpanded] = useState(false);

    function expand() {
        setExpanded(true);
    }

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const {name, value} = event.target;
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    // function onMouseOver() {
    //     const [plusColor, setPlusColor] = useState();

    // }

    function submitNote(event) {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        })
        event.preventDefault();

    }

    return (
        <div>
          <form className="create-note">
           { isExpanded ?
               <input onChange={handleChange} name="title" placeholder="Title" value={note.title} />
            : null}
            <textarea onClick={expand} onChange={handleChange} name="content" placeholder="Take a note..." rows={isExpanded ? 3 : 1} value={note.content} />
            
            <Zoom in={isExpanded ? true : false}>
            <Fab onClick={submitNote}><AddIcon /></Fab>
            </Zoom>
          </form>
        </div>
      );
}

export default CreateArea;