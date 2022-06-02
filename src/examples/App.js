import { useState } from "react";
import { Modal} from "../lib";

const App = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
      };
    return (
        <div>
            <button style={{position: 'absolute', top: '50%', left:'50%', transform : 'translate (-50%, -50%)'}} 
            onClick={toggle}>Open Modal</button>
            <Modal isOpen={isOpen} hide={toggle}>
                Some example text
            </Modal>
        </div>
    );
};

export default App;