import React from "react";
import NoteItem from "./note.item";

class List extends React.Component {
  render() {
    const { notes, search, onDelete, onArchive, onUnarchive } = this.props;

    const filteredNotes = (isArchived) =>
      notes.filter(
        (item) =>
          item.archived === isArchived &&
          item.title.toLowerCase().includes(search.toLowerCase())
      );

    return (
      <div className="list-item-container">
        <div className="list-item">
          <div className="segment-container">
            <h1>Catatan</h1>
          </div>
          {filteredNotes(false).length > 0 ? (
            filteredNotes(false).map((item) => (
              <NoteItem
                key={item.id}
                item={item}
                onDelete={onDelete}
                onArchive={onArchive}
              />
            ))
          ) : (
            <p>Tidak ada catatan</p>
          )}
        </div>
        <div className="list-item">
          <div className="segment-container">
            <h1>Archived</h1>
          </div>
          {filteredNotes(true).length > 0 ? (
            filteredNotes(true).map((item) => (
              <NoteItem
                key={item.id}
                item={item}
                onDelete={onDelete}
                onUnarchive={onUnarchive}
              />
            ))
          ) : (
            <p>Tidak ada catatan yang diarsipkan</p>
          )}
        </div>
      </div>
    );
  }
}

export default List;
