import { BaseNode } from "../components/BaseNode";

export const ProcessorNode = (props) => {
  const { id, data } = props;

  const customFields = [
    {
      label: "Processor Type",
      name: "processorType",
      type: "select",
      options: ["Data Aggregation", "Data Validation", "Data Enrichment", "Data Cleansing", "Custom Processor"],
      default: "Data Aggregation",
    },
    {
      label: "Processing Rules",
      name: "processingRules",
      type: "textarea",
      placeholder: "Enter processing rules...",
    },
    {
      label: "Batch Size",
      name: "batchSize",
      type: "number",
      default: "100",
    },
    {
      label: "Enable Logging",
      name: "enableLogging",
      type: "checkbox",
      default: true,
    },
  ];

  const inputHandles = [
    { id: `${id}-input`, style: { top: "50%" } },
  ];

  const outputHandles = [
    { id: `${id}-processed`, style: { top: "50%" } },
  ];

  return (
    <BaseNode
      id={id}
      label="Processor"
      data={data}
      customFields={customFields}
      inputHandles={inputHandles}
      outputHandles={outputHandles}
      children={
        <div className="text-white/70 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
            <span>Data processing node</span>
          </div>
        </div>
      }
    />
  );
}; 