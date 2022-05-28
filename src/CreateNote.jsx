import React, {useState} from "react";
import Button from '@material-ui/core/Button';
import Add from '@material-ui/icons/Add';

const CreateNote = (props) => {
    const [expand, setExpand] = useState(false);
    const [note, setNote] = useState({
        title: '',
        content: ''
    });

    const InputEvent = (event) => {
        // const value = event.target.value;
        // const name = event.target.name;

        const {name, value} = event.target;

        setNote((prevData) => {
            return {
                ...prevData,
                [name]: value,
            };
        });

        console.log(note);
    };

    const addEvent = () => {
        props.passNote(note);
        setNote({
            title:"",
            content:""
        });
    };

    const expandIt = () => {
        setExpand(true);
    };

    const backToNormal = () => {
        setExpand(false);
    }

    return (
        <>
            <div className='main_note' onDoubleClick={backToNormal}>
                <form>
                    {expand? <input type='text' name="title" value={note.title} onChange={InputEvent} placeholder="Title" autoComplete='off'/>: null}
                    <textarea onClick={expandIt} rows='' name="content" value={note.content} onChange={InputEvent} column='' placeholder='Write a note...' />
                    {expand? <Button onClick={addEvent}>
                        <Add className='plus_sign' />
                    </Button>: null}
                </form>
            </div>
        </>
    );
}

export default CreateNote;