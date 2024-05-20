import Popup from 'reactjs-popup'
import {FiLogOut} from 'react-icons/fi'
import './index.css'

const LogoutModal = () => (
  <Popup
    trigger={
      <>
        <button type="button" className="button" aria-label="logout">
          <FiLogOut />
        </button>
      </>
    }
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button type="button" className="close" onClick={close}>
          &times;
        </button>
        <div className="header"> Modal Title </div>
        <div className="content">Modal Description</div>
        <div className="actions">
          <Popup
            trigger={
              <button type="button" className="button">
                Cancel
              </button>
            }
            position="top center"
            nested
          >
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              magni omnis delectus nemo, maxime molestiae dolorem numquam
              mollitia, voluptate ea, accusamus excepturi deleniti ratione
              sapiente! Laudantium, aperiam doloribus. Odit, aut.
            </span>
          </Popup>
          <button
            type="button"
            className="button"
            onClick={() => {
              console.log('modal closed ')
              close()
            }}
          >
            Logout
          </button>
        </div>
      </div>
    )}
  </Popup>
)

export default LogoutModal
