import React, { FC, useEffect } from "react";
import { useNotificationState } from "../state/notificationState";

const Notification: FC<{ count: number }> = ({ count }) => {
  const { isCreated, isDeleted, isEdited, closeNotification } =
    useNotificationState((state) => state);

  useEffect(() => {
    setTimeout(() => {
      closeNotification();
    }, 7000);
  }, [closeNotification]);

  return (
    <div
      id="Notification"
      className={`${isCreated || isEdited || (isDeleted && "active")}`}
    >
      <div
        className={`container ${isCreated && "is-created"} ${
          isDeleted && "is-deleted"
        } ${isEdited && "is-edited"}`}
      >
        <div className="body">
          {isCreated && <p>Movie created successfully</p>}
          {isDeleted && (
            <p>Movie deleted successfully {count > 0 && "(" + count + ")"}</p>
          )}
          {isEdited && <p>Movie edited successfully</p>}
          <button onClick={() => closeNotification()}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Notification;
