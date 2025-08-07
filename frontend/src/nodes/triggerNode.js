import { BaseNode } from "../components/BaseNode";

export const TriggerNode = (props) => {
  const { id, data } = props;

  const customFields = [
    {
      label: "Trigger Type",
      name: "triggerType",
      type: "select",
      options: ["Schedule", "Event", "Manual", "Webhook", "Conditional"],
      default: "Schedule",
    },
    {
      label: "Schedule (Cron)",
      name: "schedule",
      type: "text",
      placeholder: "0 0 * * * (daily at midnight)",
    },
    {
      label: "Event Condition",
      name: "eventCondition",
      type: "text",
      placeholder: "data.value > threshold",
    },
    {
      label: "Auto Retry",
      name: "autoRetry",
      type: "checkbox",
      default: true,
    },
    {
      label: "Max Retries",
      name: "maxRetries",
      type: "number",
      default: "3",
    },
  ];

  const inputHandles = [
    { id: `${id}-condition`, style: { top: "30%" } },
    { id: `${id}-config`, style: { top: "70%" } },
  ];

  const outputHandles = [
    { id: `${id}-trigger`, style: { top: "50%" } },
  ];

  return (
    <BaseNode
      id={id}
      label="Trigger"
      data={data}
      customFields={customFields}
      inputHandles={inputHandles}
      outputHandles={outputHandles}
      children={
        <div className="text-white/70 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-violet-400 rounded-full animate-pulse"></div>
            <span>Pipeline trigger node</span>
          </div>
        </div>
      }
    />
  );
}; 