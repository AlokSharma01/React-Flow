import { BaseNode } from "../components/BaseNode";

export const DataTransformerNode = (props) => {
  const { id, data } = props;

  const customFields = [
    {
      label: "Transform Type",
      name: "transformType",
      type: "select",
      options: ["JSON to CSV", "CSV to JSON", "XML to JSON", "Text to JSON", "Custom Transform"],
      default: "JSON to CSV",
    },
    {
      label: "Output Format",
      name: "outputFormat",
      type: "select",
      options: ["JSON", "CSV", "XML", "YAML", "Text"],
      default: "JSON",
    },
    {
      label: "Transform Rules",
      name: "transformRules",
      type: "textarea",
      placeholder: "Enter transformation rules...",
    },
  ];

  const inputHandles = [
    { id: `${id}-input`, style: { top: "50%" } },
  ];

  const outputHandles = [
    { id: `${id}-output`, style: { top: "50%" } },
  ];

  return (
    <BaseNode
      id={id}
      label="Data Transform"
      data={data}
      customFields={customFields}
      inputHandles={inputHandles}
      outputHandles={outputHandles}
      children={
        <div className="text-white/70 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
            <span>Data transformation node</span>
          </div>
        </div>
      }
    />
  );
}; 