const SomeComponent: React.FC = () => {
  const items = ["item1", "item2", "item3"]; // Example items

  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>{item}</div> // Ensure each key is unique
      ))}
    </div>
  );
};
