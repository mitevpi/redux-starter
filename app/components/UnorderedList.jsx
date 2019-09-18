const React = require("react");

/* takes an array prop 'items' and returns a <ul> element 
   with each item as <li> elements */
const UnorderedList = ({ items }) => {
  return (
    <ul>
      {items.map((item, i) => {
        return <li key={i}>{item}</li>;
      })}
    </ul>
  );
};

module.exports = UnorderedList;
