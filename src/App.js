import './App.css';
import {React, useState, useRef} from 'react';
import List from './components/List'
import Button from './components/Button'

function App() {

  const dragItem = useRef();
  const dragOverItem = useRef();

    const [list, setList] = useState([
        {
            description: "Profile Summary",
            descriptionSummary: "Profile Summary description",
            id: "list1",
        },
        {
            description: "Academic and Cocurricular Achievements",
            descriptionSummary: "Academic and Cocurricular Achievements description",
            id: "list2"
        },
        {
            description: "Summer Internship Experience",
            descriptionSummary: "Summer Internship Experience description",
            id: "list3"
        },
        {
            description: "Work Experience",
            descriptionSummary: "Work Experience description",
            id: "list4"
        },
        {
            description: "Projects",
            descriptionSummary: "Projects description",
            id: "list5"
        },
        {
            description: "Certifications",
            descriptionSummary: "Certificates description",
            id: "list6"
        },
        {
            description: "Leadership Positions",
            descriptionSummary: "Leadership Positions description",
            id: "list7"
        },
        {
            description: "Extracurricular",
            descriptionSummary: "Extracurricular description",
            id: "list8"
        },
        {
            description: "Education",
            descriptionSummary: "Education description",
            id: "list9"
        }
    ])

    const dragStart = (e, position) => {
      dragItem.current = position;
      console.log(e.target.innerHTML);
    };

    const dragEnter = (e, position) => {
      dragOverItem.current = position;
      console.log(e.target.innerHTML);
    };

    const drop = (e) => {
      const copyListItems = [...list];
      const dragItemContent = copyListItems[dragItem.current];
      copyListItems.splice(dragItem.current, 1);
      copyListItems.splice(dragOverItem.current, 0, dragItemContent);
      dragItem.current = null;
      dragOverItem.current = null;
      setList(copyListItems);
    };

  return (
    <div className="App">
      <h1>Select your sections</h1>
        {list.map((value, index) => {
            return <div
              key={value.id}
              onDragStart={(e) => dragStart(e, index)}
              onDragEnter={(e) => dragEnter(e, index)}
              onDragEnd={drop}
              draggable
            >
                <List
                    description={value.description}
                    descriptionSummary={value.descriptionSummary}
                    id={index}
                />
                <hr />
            </div>
        })}
      <Button className="large-button"/>
    </div>
  );
}

export default App;