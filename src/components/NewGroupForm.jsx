// src/components/NewGroupForm.js
import React, { useState } from "react";

const NewGroupForm = ({ onCreateGroup }) => {
  const [groupName, setGroupName] = useState("");
  const [isPrivate, setIsPrivate] = useState(false);

  const handleCreateGroup = () => {
    onCreateGroup({ name: groupName, isPrivate });
    setGroupName("");
    setIsPrivate(false);
  };

  return (
    <div className="new-group-form">
      <h2>Create New Group</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleCreateGroup();
        }}
      >
        <div className="form-group">
          <input
            type="text"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            placeholder="Group Name"
            required
          />
        </div>
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              checked={isPrivate}
              onChange={(e) => setIsPrivate(e.target.checked)}
            />{" "}
            Private Group
          </label>
        </div>
        <button type="submit">Create Group</button>
      </form>
    </div>
  );
};

export default NewGroupForm;
