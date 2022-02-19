import { useState } from "react";
import { v4 } from "uuid";

const Edit = ({ add }) => {
  const [note, setNote] = useState("");
  function noteCharge(e) {
    setNote(e.target.value);
  }

  const [date, setDate] = useState("");
  function dateCharge(e) {
    setDate(e.target.value);
  }

  const [time, setTime] = useState("");
  function timeCharge(e) {
    setTime(e.target.value);
  }

  console.log(note, time, date);

  function addItem() {
    add(function (prevData) {
      return [
        { id: v4(), note, date, time },
        ...prevData
      ];
    });
  }

  return (
    <div>
      <h1>备忘录</h1>
      <p>记事：</p>
      <input type="text" value={note} onChange={noteCharge}></input>

      <p>日期：</p>
      <input type="date" value={date} onChange={dateCharge}></input>
      <p>时间：</p>
      <input type="time" value={time} onChange={timeCharge}></input>
      <button className="add" onClick={addItem}>
        新增
      </button>
    </div>
  );
};

export default Edit;
