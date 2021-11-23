import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{
    const notesInitial = [
        {
          "_id": "6194c78df9bg14488c3afa02976",
          "user": "6192905fea724b97757a820b",
          "title": "my title",
          "description": "please wake up early",
          "tag": "personal",
          "date": "2021-11-17T09:12:41.360Z",
          "__v": 0
        },
        {
          "_id": "6194caa0vdbf0f9f39a98e2fffb",
          "user": "6192905fea724b97757a820b",
          "title": "my title",
          "description": "please wake up early",
          "tag": "personal",
          "date": "2021-11-17T09:25:52.132Z",
          "__v": 0
        },
        {
          "_id": "6194caafvd0bf0f939a9f8e2fffb",
          "user": "6192905fea724b97757a820b",
          "title": "my title",
          "description": "please wake up early",
          "tag": "personal",
          "date": "2021-11-17T09:25:52.132Z",
          "__v": 0
        },
        {
          "_id": "6194caa0fvfbf0f939a98de2fffb",
          "user": "6192905fea724b97757a820b",
          "title": "my title",
          "description": "please wake up early",
          "tag": "personal",
          "date": "2021-11-17T09:25:52.132Z",
          "__v": 0
        },
        {
          "_id": "6194caa0bf0f939afdfx98e2fffb",
          "user": "6192905fea724b97757a820b",
          "title": "my title",
          "description": "please wake up early",
          "tag": "personal",
          "date": "2021-11-17T09:25:52.132Z",
          "__v": 0
        },
      ]
      const [notes,setNotes] = useState(notesInitial)

      // Add a note
      const addNote = (title, description, tag)=>{
        const note = {
          "_id": "6194caa0bf0f939a98hggae2fffb",
          "user": "6192905fea724b97757a820b",
          "title": title,
          "description":description,
          "tag": tag,
          "date": "2021-11-17T09:25:52.132Z",
          "__v": 0
        };
        setNotes(notes.concat(note))
        
      }
      // edit a note
      const editNote = (id,title,description,tag)=>{
        for (let index = 0; index < notes.length; index++) {
          const element = notes[index];
          if(element.id===id){
            element.title=title;
            element.description=description;
            element.tag=tag;
          }
        }

      }
      // delete a note
      const deleteNote = (id)=>{
        console.log(id)
        const newNotes = notes.filter((note)=>{return note._id!==id})
        setNotes(newNotes);

      }
    

    return(
        <NoteContext.Provider value = {{notes,addNote,editNote,deleteNote}}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default NoteState