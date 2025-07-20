<p align="center">
  <img src="https://img.icons8.com/emoji/96/checkbox-emoji.png" width="80" alt="checkbox-logo" />
</p>

<h1 align="center">Nested Checkboxes in React ✅</h1>

<p align="center">
  A dynamic, recursive checkbox tree component built with React.<br />
  Handles parent-child syncing like a pro. 🎯
</p>

---

## 🧠 Motivation

Creating this wasn’t just a coding task — it was a **mental puzzle** 🧩.  
Handling **deep nested levels**, syncing **parent and child checkboxes**, and writing **clean recursive logic** took real effort and logical thinking. 😓

But now it's working **perfectly** and I'm really proud of it. 💪

---

## 🔍 How It Works

The core idea is based on **recursion** 🌀 — both in rendering the tree and in syncing the state.

### 🧾 1. Data Structure

```js
[
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
  ...
]

{
  1: true,
  2: true,
  3: true,
  4: true,
  5: true,
  6: true
}

updateChildren(node) → sets all child checkboxes
verifyChecked(node) → checks if all children are checked and updates parent


💻 Features
✅ Fully recursive rendering

🔄 Two-way sync: parent ⇄ child

📦 Clean flat state object

🌲 Unlimited nesting depth

⚛️ Built in React

🙌 Special Thanks
To my brain 🧠 — for surviving this recursion loop 😅
And React — for making UI logic fun and powerful ⚛️

<p align="center"> Made with ❤️ and a lot of logic by Samir Parvez </p> ```
