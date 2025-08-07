import React from "react";
import { Checkbox } from "@nextui-org/checkbox";
import { Input, Select, SelectItem, Textarea } from "@nextui-org/react";

const FieldRenderer = ({ field, value, onChange, label }) => {
  const handleInputChange = (e) => {
    onChange(field.name, e.target.value);
  };

  const commonClassNames = {
    input: "text-white placeholder:text-white/50",
    inputWrapper: "bg-white/10 border-white/20 hover:border-white/30 focus-within:border-purple-400",
    label: "text-white/80",
    base: "text-white",
  };

  switch (field.type) {
    case "select":
      return (
        <Select
          placeholder={field.placeholder || "Select option"}
          defaultSelectedKeys={[field.default || field.options[0]]}
          variant="bordered"
          radius="lg"
          label={label}
          onChange={handleInputChange}
          classNames={commonClassNames}
        >
          {field.options.map((option, index) => (
            <SelectItem key={index} value={option} className="text-white bg-black/80">
              {option}
            </SelectItem>
          ))}
        </Select>
      );

    case "text":
      return (
        <Input
          type="text"
          label={label}
          value={value || ""}
          onChange={handleInputChange}
          variant="bordered"
          radius="lg"
          placeholder={field.placeholder || ""}
          classNames={commonClassNames}
        />
      );

    case "number":
      return (
        <Input
          type="number"
          label={label}
          value={value || ""}
          onChange={handleInputChange}
          variant="bordered"
          radius="lg"
          placeholder={field.placeholder || ""}
          classNames={commonClassNames}
        />
      );

    case "textarea":
      return (
        <Textarea
          label={label}
          value={value || ""}
          onChange={handleInputChange}
          variant="bordered"
          radius="lg"
          placeholder={field.placeholder || ""}
          classNames={commonClassNames}
          minRows={2}
        />
      );

    case "checkbox":
      return (
        <div className="flex items-center space-x-2">
          <Checkbox
            checked={value || field.default || false}
            onChange={(e) => onChange(field.name, e.target.checked)}
            classNames={{
              base: "text-white",
              wrapper: "text-white",
              label: "text-white/80",
            }}
          >
            {label}
          </Checkbox>
        </div>
      );

    default:
      return (
        <Input
          type="text"
          label={label}
          value={value || ""}
          onChange={handleInputChange}
          variant="bordered"
          radius="lg"
          placeholder={field.placeholder || ""}
          classNames={commonClassNames}
        />
      );
  }
};

export default FieldRenderer;
