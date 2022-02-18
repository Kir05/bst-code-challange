import React, { FC, useEffect, useState } from "react";
import { useNotificationState } from "../state/notificationState";

const Notification: FC<{ count: number }> = ({ count }) => {
  const { isCreated, isDeleted, closeNotification } = useNotificationState(
    (state) => state
  );

  useEffect(() => {
    setTimeout(() => {
      closeNotification();
    }, 2500);
  }, [closeNotification, isDeleted]);

  return (
    <div id="Notification">
      <div
        className={`container ${isCreated && "is-created"} ${
          isDeleted && "is-deleted"
        }`}
      >
        <div className="body">
          {isCreated && <p>Movie created successfully</p>}
          {isDeleted && (
            <p>Movie deleted successfully {count > 0 && "(" + count + ")"}</p>
          )}
          <button onClick={() => closeNotification()}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Notification;
