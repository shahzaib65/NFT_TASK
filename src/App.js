import PopupModal from "./popup/PopupModal";
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'


function App() {

  const [isModalOpen, setModalOpen] = useState(false);


  const openModal = () => {
    setModalOpen(true);
    console.log(isModalOpen)
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="w-full h-full">
    <div className=" w-full flex justify-end">
    <button className=" bg-[#DF4747] rounded-full text-white text-sm px-5 h-8 items-center m-5" onClick={openModal}>Open Popup</button>
    </div>

    <PopupModal isOpen={isModalOpen} onRequestClose={closeModal} />

    </div>
  );
}

export default App;

