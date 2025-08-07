import { BaseNode } from "../components/BaseNode";

export const FilterNode = (props) => {
  const { id, data } = props;

  const customFields = [
    {
      label: "Filter Type",
      name: "filterType",
      type: "select",
      options: ["Conditional", "Regex", "Range", "Custom"],
      default: "Conditional",
    },
    {
      label: "Filter Condition",
      name: "filterCondition",
      type: "text",
      placeholder: "value > 10 && value < 100",
    },
    {
      label: "Include/Exclude",
      name: "filterMode",
      type: "select",
      options: ["Include Matching", "Exclude Matching"],
      default: "Include Matching",
    },
    {
      label: "Case Sensitive",
      name: "caseSensitive",
      type: "checkbox",
      default: false,
    },
  ];

  const inputHandles = [
    { id: `${id}-input`, style: { top: "50%" } },
  ];

  const outputHandles = [
    { id: `${id}-filtered`, style: { top: "30%" } },
    { id: `${id}-rejected`, style: { top: "70%" } },
  ];

  return (
    <BaseNode
      id={id}
      label="Filter"
      data={data}
      customFields={customFields}
      inputHandles={inputHandles}
      outputHandles={outputHandles}
      children={
        <div className="text-white/70 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
            <span>Data filtering node</span>
          </div>
        </div>
      }
    />
  );
}; 