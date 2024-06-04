import './Modall.css'

function Modal({title}) {
  function cancelClicked(){
    console.log('Cancel')
  }
  function confirmClicked(){
    console.log('Confirm')
  }
    return (
        <div>
        <div className="modal">
          <p className="modal__title">{title}</p>
          <div className="modal__buttons">
            <button className="btn btn__cancel" onClick={cancelClicked}>Cancel</button>
            <button className="btn" onClick={confirmClicked}>Confirm</button>
          </div>
        </div>
        <div className="backdrop" />
      </div>
      
    )
}

export default Modal