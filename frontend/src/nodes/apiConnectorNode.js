import { BaseNode } from "../components/BaseNode";

export const ApiConnectorNode = (props) => {
  const { id, data } = props;

  const customFields = [
    {
      label: "API Endpoint",
      name: "apiEndpoint",
      type: "text",
      placeholder: "https://api.example.com/endpoint",
    },
    {
      label: "Method",
      name: "method",
      type: "select",
      options: ["GET", "POST", "PUT", "DELETE", "PATCH"],
      default: "GET",
    },
    {
      label: "Headers",
      name: "headers",
      type: "textarea",
      placeholder: '{"Content-Type": "application/json"}',
    },
    {
      label: "Timeout (ms)",
      name: "timeout",
      type: "number",
      default: "5000",
    },
  ];

  const inputHandles = [
    { id: `${id}-payload`, style: { top: "30%" } },
    { id: `${id}-config`, style: { top: "70%" } },
  ];

  const outputHandles = [
    { id: `${id}-response`, style: { top: "50%" } },
  ];

  return (
    <BaseNode
      id={id}
      label="API Connector"
      data={data}
      customFields={customFields}
      inputHandles={inputHandles}
      outputHandles={outputHandles}
      children={
        <div className="text-white/70 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
            <span>External API integration</span>
          </div>
        </div>
      }
    />
  );
}; 