import './App.css';
import React from 'react';
import List from './components/List'
import Button from './components/Button'

function App() {

  return (
    <div className="App">
      <h1>Select your sections</h1>

      <List 
        description="Profile Summary"
        descriptionSummary="Profile Summary description"
        id="list1"
      />
      <hr />
      <List 
        description="Academic and Cocurricular Achievements"
        descriptionSummary="Academic and Cocurricular Achievements description"
        id="list2"
      />
      <hr />
      <List 
        description="Summer Internship Experience"
        descriptionSummary="Summer Internship Experience description"
        id="list3"
      />
      <hr />
      <List 
        description="Work Experience"
        descriptionSummary="Work Experience description"
        id="list4"
      />
      <hr />
      <List 
        description="Projects"
        descriptionSummary="Projects description"
        id="list5"
      />
      <hr />
      <List 
        description="Certifications"
        descriptionSummary="Certificates description"
        id="list6"
      />
      <hr />
      <List 
        description="Leadership Positions"
        descriptionSummary="Leadership Positions description"
        id="list7"
      />
      <hr />
      <List 
        description="Extracurricular"
        descriptionSummary="Extracurricular description"
        id="list8"
      />
      <hr />
      <List 
        description="Education"
        descriptionSummary="Education description"
        id="list9"
      />
      <hr />
      <Button className="large-button"/>
    </div>
  );
}

export default App;