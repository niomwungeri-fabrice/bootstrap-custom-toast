import './App.css';
import React, { useState } from 'react';
import { ToastManager } from './components/Toast';

const App = () => {
  const [toast, setToast] = useState(false);
  const message = {
    title: 'Bootstrap 5 React Examples',
    content: 'no jquery, no reactstrap, no react-bootstrap'
  }

  const anyAction = () => setToast(true);

  return (
    <div className="container py-4">
      <h3>Bootstrap 5 React Examples</h3>
      <h6>no jquery, no reactstrap, no react-bootstrap</h6>

      <button className="btn btn-success" onClick={anyAction}>
        Toast
      </button>

      <div>
        <ToastManager position="bottom-left" type="info" autoHide={true} setToast={setToast} isVisible={toast} message={message} />
      </div>

    </div>
  )

}

export default App;
