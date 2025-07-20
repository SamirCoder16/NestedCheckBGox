import "./styles.css";
import { useState } from "react";

const CheckboxesData = [
  {
    id: 1,
    label: "Fruits",
    children: [
      { id: 2, label: "Apple" },
      { id: 3, label: "Banana" },
      {
        id: 4,
        label: "Citrus",
        children: [
          { id: 5, label: "Orange" },
          { id: 6, label: "Lemon" },
        ],
      },
    ],
  },
  {
    id: 7,
    label: "Vegetables",
    children: [
      { id: 8, label: "Carrot" },
      { id: 9, label: "Broccoli" },
    ],
  },
  {
    id: 10,
    label: "Fast Food",
  },
];

export const CheckBoxes = ({ data, checked, setchecked }) => {
  const handleChange = (isChecked, node) => {
    setchecked((prev) => {
      const newState = { ...prev, [node.id]: isChecked };
      //  if children are present add all of them to newState
      const updateChildren = (node) => {
        node.children &&
          node.children.forEach((child) => {
            newState[child.id] = isChecked;
            child.children && updateChildren(child);
          });
      };
      updateChildren(node);

      // if all the children are checked mark the parent is chacked
      const verifyChecked = (node) => {
        if (!node.children) return newState[node.id] || false;

        const allChildChecked = node.children.every((child) =>
          verifyChecked(child)
        );
        newState[node.id] = allChildChecked;
        return allChildChecked;
      };
      CheckboxesData.forEach((node) => verifyChecked(node));

      return newState;
    });
  };

  console.log(checked);

  return (
    <div>
      {data.map((node) => (
        <div key={node.id} className="parentNode">
          <input
            type="checkbox"
            checked={checked[node.id] || false}
            onChange={(e) => handleChange(e.target.checked, node)}
          />
          <span>{node.label}</span>
          {node.children && (
            <CheckBoxes
              data={node.children}
              checked={checked}
              setchecked={setchecked}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default function App() {
  const [checked, setchecked] = useState({});
  return (
    <div className="App">
      <h1>Nested CheckBox</h1>
      <CheckBoxes
        data={CheckboxesData}
        checked={checked}
        setchecked={setchecked}
      />
    </div>
  );
}
