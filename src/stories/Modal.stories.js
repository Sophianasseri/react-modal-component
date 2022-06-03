import React, {useState} from 'react';
import { storiesOf } from '@storybook/react'

import { Modal } from '../components/Modal';
import '../styles.css'

const stories = storiesOf('Modal', module);

stories.add('App', () => {
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
    </div>) 
})