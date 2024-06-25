// src/components/GroupList.js
import React, { useState } from "react";

const GroupList = ({
  groups,
  setGroups,
  setCurrentGroup,
  searchQuery,
  user,
}) => {
  const [groupName, setGroupName] = useState("");
  const [isPrivate, setIsPrivate] = useState(false);

  const addGroup = () => {
    const newGroup = {
      name: groupName,
      isPrivate,
      members: [user],
      messages: [],
    };
    const updatedGroups = [...groups, newGroup];
    setGroups(updatedGroups);
    setGroupName("");
    setIsPrivate(false);
    localStorage.setItem("groups", JSON.stringify(updatedGroups));
  };

  const filteredGroups = groups.filter((group) =>
    group.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="group-list">
      <h2 >Groups</h2>
      <input
        type="text"
        placeholder="Group Name"
        value={groupName}
        onChange={(e) => setGroupName(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={isPrivate}
          onChange={(e) => setIsPrivate(e.target.checked)}
        />
        Private
      </label>
      <button onClick={addGroup}>Add Group</button>
      <ul>
        {filteredGroups.map((group, index) => (
          <li
            key={index}
            onClick={() => {
              if (
                !group.isPrivate ||
                (group.members && group.members.includes(user))
              ) {
                setCurrentGroup(group);
              } else {
                alert("Access denied: Private group");
              }
            }}
          >
            {group.name} ({group.isPrivate ? "Private" : "Public"})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GroupList;
