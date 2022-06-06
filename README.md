# React modal component

This is a simple react modal component that can be use in your project.


## Installation

```sh
npm install sn-react-modal-component
```

## How to use

Import the `Modal`component to your project:

```sh
import { Modal } from "sn-react-modal-component"
```

This component is using 2 props:

- `isOpen` : checks if the modal is open or not
- `hide` : toggles the visibility of the modal

This component is also using `children prop` to add the modal content 

### Example

```sh
import { useState } from "react";
import { Modal} from "sn-react-modal-component";

const App = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
      };
    const style = {
    position: 'absolute', 
    top: '50%', 
    left:'50%', 
    transform : 'translate (-50%, -50%)'}
    
    return (
        <div>
            <button style={style} 
            onClick={toggle}>Open Modal</button>
            <Modal isOpen={isOpen} hide={toggle}>
                Some example text
            </Modal>
        </div>
    );
};

export default App;
```
