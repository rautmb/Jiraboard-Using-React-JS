import { useState } from 'react';
import '../DragComp/DragArea.css';

const DragArea = ({ onDrop }) => {

    const [showDrop, setShowDrop] = useState(false);

    return (
        <section className={showDrop ? 'drop-area' : 'hide-area'}
            onDragEnter={() => { setShowDrop(true) }}
            onDragLeave={() => { setShowDrop(false) }}
            onDrop={() => { onDrop(); setShowDrop(false);}}
             onDragOver={(e)=>{e.preventDefault()}}>
            Drop area here
        </section>
    )
}

export default DragArea
