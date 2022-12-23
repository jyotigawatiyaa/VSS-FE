import React from "react";
import "./Reminder.css";

const Reminder = () => {
  return (
    <div className="reminder_heading">
      <p>Reminder Section</p>
      <hr />
      <div className="reminder_content">
        <p>Today's Delivery</p>
      </div>
    </div>
  );
};

export default Reminder;
