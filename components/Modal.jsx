import React from 'react';
import { useEffect } from 'react';
// import nft from './nft.jpg';

const Modal = ({ open, onClose }) => {


  const [isOpen, setIsOpen] = useState(false);


  useEffect(() => {
    // Auto-pop-up after a delay
    const timeout = setTimeout(() => {
      setIsOpen(true);
    }, 3000); // Auto-pop-up after 3 seconds

    return () => clearTimeout(timeout);
  }, []);

  const closeModal = () => {
    setIsOpen(false);
  };


  if (!open) return null;
  return (
    <div onClick={onClose} className='overlay'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'
      >
        <img src="/logo.png" alt='/' />
        <div className='modalRight'>
          <p className='closeBtn' onClick={onClose}>
            X
          </p>
          <div className='content'>
            <p>Do you want a</p>
            <h1>$20 CREDIT</h1>
            <p>for your first tade?</p>
          </div>
          <div className='btnContainer'>
            <button className='btnPrimary'>
              <span className='bold'>YES</span>, I love NFT's
            </button>
            <button className='btnOutline'>
              <span className='bold'>NO</span>, thanks
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;