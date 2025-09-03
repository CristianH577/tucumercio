import { Button, FormControl, FormLabel, Input } from "@mui/joy";
import { useState } from "react";

type TypeProps = {
  name: string;
  label: string;
  placeholder?: string;
  items: string[];
  onChange: (val: string[]) => void;
};
export default function InputAddToList({
  name = "",
  label = "",
  placeholder = "",
  items = [],
  onChange,
}: TypeProps) {
  const [inputValue, setInputValue] = useState("");

  const handleAddItem = () => {
    const items_ = [...items];
    if (inputValue && !items_.includes(inputValue)) {
      items_.push(inputValue);
      setInputValue("");
      onChange(items_);
    }
  };

  const deleteItemFromItems = (value = "") => {
    const items_filtered = items.filter((e) => e !== value);
    onChange(items_filtered);
  };

  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Input
        name={name}
        placeholder={placeholder}
        endDecorator={
          <Button variant="soft" color="primary" onClick={handleAddItem}>
            Add
          </Button>
        }
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <ol className="p-2 text-sm list-disc list-inside">
        {items.map((item, i) => (
          <li
            key={i}
            className="cursor-pointer hover:line-through"
            onClick={() => deleteItemFromItems(item)}
          >
            {item}
          </li>
        ))}
      </ol>
    </FormControl>
  );
}
