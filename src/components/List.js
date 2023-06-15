import React, { useState, useEffect, useRef } from 'react';
import Switch from './Switch';
import '../App.css'
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { MdOutlineEdit, MdOutlineMenu } from 'react-icons/md';

function List({ description, id, descriptionSummary}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(description);
  const [showDescription, setShowDescription] = useState(false);
  const ticketRef = useRef(null);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (e) => {
    setEditedDescription(editedDescription);
    setIsEditing(false);
  };

  const handleDescriptionChange = (e) => {
    setEditedDescription(e.target.value);
  };

  const handleInfoClick = () => {
    setShowDescription(!showDescription);
  };

  const handleClickOutside = (event) => {
    if (ticketRef.current && !ticketRef.current.contains(event.target)) {
      setShowDescription(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return (
    <div className="list-container">
      <div className="left-icons">
        <MdOutlineMenu className="menu-icon" size={25} />
        <AiOutlineInfoCircle onClick={handleInfoClick} size={21} />
      </div>
      <div className="description-edit-container">
        {!isEditing ? (
          <>
            {editedDescription}
          </>
        ) : (
          <>
            <input className="edit-input" type="text" value={editedDescription} onChange={handleDescriptionChange} />
            <span onClick={handleSaveClick}>
              {' '}
              <span className="save-edited">Save</span>
            </span>
          </>
        )}
      </div>
      <div className="right-icons">
        {!isEditing && (
          <span onClick={handleEditClick}>
            <MdOutlineEdit className="edit-icon" size={22} />
          </span>
        )}
        <Switch id={id} rounded={true} />
      </div>
      {showDescription && (
        <div ref={ticketRef} className="ticket">
          <p className="description">{descriptionSummary}</p>
        </div>
      )}
      {/* <hr/> */}
    </div>
  );
}

export default List;