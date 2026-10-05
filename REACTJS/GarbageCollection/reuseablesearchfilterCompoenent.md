import React, { useState } from "react";

const users = [
  { id: 1, name: "Soorya" },
  { id: 2, name: "Sandra" },
  { id: 3, name: "Yamuna" },
  { id: 4, name: "Ganga" },
];

function SearchableMultiSelect({
  options,
  selected,
  onChange,
  placeholder = "Select users",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  // Search/filter options
  const filteredOptions = options.filter((option) =>
    option.name.toLowerCase().includes(search.toLowerCase())
  );

  // Select / unselect option
  const handleSelect = (option) => {
    const alreadySelected = selected.some(
      (item) => item.id === option.id
    );

    if (alreadySelected) {
      // Remove
      onChange(
        selected.filter((item) => item.id !== option.id)
      );
    } else {
      // Add
      onChange([...selected, option]);
    }
  };

  return (
    <div style={{ width: "300px", position: "relative" }}>
      {/* Dropdown button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: "100%",
          padding: "10px",
          textAlign: "left",
        }}
      >
        {selected.length > 0
          ? `${selected.length} selected`
          : placeholder}
      </button>

      {isOpen && (
        <div
          style={{
            position: "absolute",
            width: "100%",
            border: "1px solid #ccc",
            background: "white",
            padding: "10px",
            zIndex: 10,
          }}
        >
          {/* Search */}
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              marginBottom: "10px",
            }}
          />

          {/* Options */}
          {filteredOptions.map((option) => {
            const isSelected = selected.some(
              (item) => item.id === option.id
            );

            return (
              <div
                key={option.id}
                onClick={() => handleSelect(option)}
                style={{
                  padding: "8px",
                  cursor: "pointer",
                }}
              >
                <input
                  type="checkbox"
                  checked={isSelected}
                  readOnly
                />

                <span style={{ marginLeft: "8px" }}>
                  {option.name}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

function App() {
  const [selectedUsers, setSelectedUsers] = useState([]);

  return (
    <div style={{ padding: "50px" }}>
      <SearchableMultiSelect
        options={users}
        selected={selectedUsers}
        onChange={setSelectedUsers}
        placeholder="Select users"
      />

      <h3>Selected Users:</h3>

      {selectedUsers.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default App;


