import "./styles.css";
import Student from "./Student";

export default function App() {
  const studentBio = [
    {
      sid: 1,
      sname: "Parmar",
      saim: "Engineer"
    },
    { sid: 2, sname: "Anand ", saim: "IFS" }
  ];
  return (
    <div className="App">
      <h1> Student Info box</h1>
      <Student
        sid={studentBio[0].sid}
        sname={studentBio[0].sname}
        saim={studentBio[0].saim}
      />
      <hr />
      <Student
        sid={studentBio[1].sid}
        sname={studentBio[1].sname}
        saim={studentBio[1].saim}
      />
    </div>
  );
}
