import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import TableComponent from './component/tableComponent'
import SchoolData from './service/datas/schoolList.json';
import StandardData from './service/datas/standardList.json';
import StudentsDetail from "./service/datas/studentsDetail.json";
import './App.css';


const App = () => {
  const [selectedSchool, setSelectedSchool] = useState(null);
  const [selectedStandard, setSelectedStandard] = useState(null);
  const [schoolLists, setSchoolLists] = useState([]);
  const [standardLists, setStandardLists] = useState([]);
  const [ totalStudent, setTotalStudent ] = useState("");

  const handleSelectedSchool = (selectedOption) => {
    const { schoolId } = selectedOption;
    setSelectedSchool(selectedOption);
    setSelectedStandard("")

    const filterStandard = StandardData.filter(standard => standard.schoolId === schoolId)
    setStandardLists(filterStandard);
  };

  const handleSelectedStandard = (selStandard) => {
    setSelectedStandard(selStandard);
  };

  useEffect(() => {
      setSchoolLists(SchoolData);
  }, [])

  useEffect(() => {
    setStandardLists(StandardData);
}, [])

const getData = (data) => {
  setTotalStudent(data);
}

  return (
    <div className="App">
    <header className="App-header">
        List of Schools
    </header>
      <div className="app-body">
        <div className="d-flex">
          <div className="pr-12">
        <label>School Lists</label>
      <Select
        value={selectedSchool}
        onChange={handleSelectedSchool}
        options={schoolLists}
        className="schoolLists"
      />
      </div>
    <div className="pr-12">
      <label>Standards</label>
      <Select
        value={selectedStandard}
        onChange={handleSelectedStandard}
        options={standardLists}
        className="standardLists"
      />
      </div>
      <div>
        <label>Total Students:</label>
        <p className="totalCount">{totalStudent !== "" ? totalStudent : StudentsDetail.length > 0 ? StudentsDetail.length : "0"}</p>
      </div>
      </div>
      <TableComponent sendDataToApp={getData} selectedSchool={selectedSchool ? selectedSchool : ""} selectedStandard={selectedStandard ? selectedStandard : ""} />
      </div>
    </div>
  );
}

export default App;
