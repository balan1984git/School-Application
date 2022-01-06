import React, { useState, useEffect } from "react";
import StudentsDetail from "./../../service/datas/studentsDetail.json";
import "./index.css";

const TableComponent = (props) => {
  const { selectedSchool, selectedStandard } = props;
  const [studentDetail, setStudentDetail] = useState(StudentsDetail);
  const [selectedStudent, setSelectedStudent] = useState([]);
  const [selectedSchoolData, setSelectedSchoolData] = useState([]);
  const [selectedStandardData, setSelectedStandardData] = useState([]);

  useEffect(() => {
    if (selectedSchool !== "" && selectedStandard !== "") {
      const studDetails = studentDetail.filter(
        (data) =>
          data.schoolName === selectedSchool.value &&
          data.classId === selectedStandard.classId
      );
      setSelectedStudent(studDetails);
      setSelectedStandardData(studDetails);
    } else if (selectedSchool !== "") {
      const schoolData = studentDetail.filter(
        (data) => data.schoolName === selectedSchool.value
      );
      setSelectedSchoolData(schoolData);
    } else if (selectedStandard !== "") {
      const standardData = studentDetail.filter(
        (data) => data.classId === selectedStandard.classId
      );
      setSelectedStandardData(standardData);
    }
  }, [selectedSchool, selectedStandard]);

  return (
    <div className="detailsTable">
      <table>
        <thead>
          <tr>
            <td colSpan={4}></td>
            <td colSpan={4} className="marksHead">
              Marks
            </td>
          </tr>
          <tr>
            <td>School Name</td>
            <td>Class</td>
            <td>ID</td>
            <td>Name</td>
            <td>Tamil</td>
            <td>English</td>
            <td>Maths</td>
            <td>Environmental Science</td>
          </tr>
        </thead>
        <tbody>
          {(selectedSchool === "" && selectedStandard === "") ||
          (selectedSchoolData.length === 0 &&
            selectedStandardData.length === 0) ? (
            studentDetail.map((data) => (
              <tr key={data.studentId}>
                <td>{data.schoolName}</td>
                <td>{data.classId}</td>
                <td>{data.studentId}</td>
                <td>{data.studentName}</td>
                <td>{data.tamil}</td>
                <td>{data.english}</td>
                <td>{data.maths}</td>
                <td>{data.evs}</td>
              </tr>
            ))
          ) : selectedSchoolData.length > 0 && selectedStandard === "" ? (
            selectedSchoolData.map((data) => (
              <tr key={data.studentId}>
                <td>{data.schoolName}</td>
                <td>{data.classId}</td>
                <td>{data.studentId}</td>
                <td>{data.studentName}</td>
                <td>{data.tamil}</td>
                <td>{data.english}</td>
                <td>{data.maths}</td>
                <td>{data.evs}</td>
              </tr>
            ))
          ) : selectedStandardData.length > 0 && selectedSchool === "" ? (
            selectedStandardData.map((data) => (
              <tr key={data.studentId}>
                <td>{data.schoolName}</td>
                <td>{data.classId}</td>
                <td>{data.studentId}</td>
                <td>{data.studentName}</td>
                <td>{data.tamil}</td>
                <td>{data.english}</td>
                <td>{data.maths}</td>
                <td>{data.evs}</td>
              </tr>
            ))
          ) : selectedSchoolData.length > 0 &&
            selectedStandardData.length > 0 ? (
            selectedStudent.map((data) => (
              <tr key={data.studentId}>
                <td>{data.schoolName}</td>
                <td>{data.classId}</td>
                <td>{data.studentId}</td>
                <td>{data.studentName}</td>
                <td>{data.tamil}</td>
                <td>{data.english}</td>
                <td>{data.maths}</td>
                <td>{data.evs}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={8} className="noRecord">
                No records found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
