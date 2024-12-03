import React from "react";
import { showFormattedDate } from "../utils";
import Button from "./button";

const NoteItem = ({ item, onDelete, onArchive, onUnarchive }) => {
  return (
    <div className="item">
      <h2>{item.title}</h2>
      <p className="date">{showFormattedDate(item.createdAt)}</p>
      <p>{item.body}</p>
      <div className="button-container">
        <Button name="Delete" onClick={() => onDelete(item.id)} />
        {item.archived ? (
          <Button name="Unarchive" onClick={() => onUnarchive(item.id)} />
        ) : (
          <Button name="Archive" onClick={() => onArchive(item.id)} />
        )}
      </div>
    </div>
  );
};

export default NoteItem;
