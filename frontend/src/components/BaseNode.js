import { Handle, Position } from "reactflow";
import { useState, useEffect } from "react";
import FieldRenderer from "./FieldRenderer";

export const BaseNode = ({
  id,
  label,
  data = {},
  customFields = [],
  inputHandles = [],
  outputHandles = [],
  nodeStyle = {},
  handleStyle = {},
  children,
  className = null,
}) => {
  const [nodeData, setNodeData] = useState(data);

  const defaultHandleStyle = {
    background: "#8B5CF6",
    width: "12px",
    height: "12px",
    border: "2px solid #1F2937",
    boxShadow: "0 0 10px rgba(139, 92, 246, 0.5)",
  };

  
  useEffect(() => {
    const defaultData = {};
    customFields.forEach((field) => {
      if (!nodeData[field.name]) {
        if (field.name.includes("Name")) {
        
          defaultData[field.name] = id.replace(
            `custom${label}-`,
            `${label.toLowerCase()}_`
          );
        } else {
          defaultData[field.name] = field.default || "";
        }
      }
    });
    setNodeData((prevData) => ({ ...prevData, ...defaultData }));
  }, [id, customFields]);

  const handleInputChange = (fieldName, value) => {
    setNodeData({
      ...nodeData,
      [fieldName]: value,
    });
  };

  return (
    <div className="relative">
     
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl blur-xl"></div>

      <div
        style={{
          ...nodeStyle,
        }}
        className={`
          relative px-6 py-5 w-80 bg-black/40 backdrop-blur-md 
          border border-white/20 rounded-xl shadow-2xl
          hover:border-white/30 transition-all duration-200
          ${className}
        `}
      >
 
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
            <span className="text-white text-lg font-semibold">{label}</span>
          </div>
          <div className="text-white/40 text-xs">#{id.split('-')[1] || id}</div>
        </div>

        {children && (
          <div className="mb-4 p-3 bg-white/5 rounded-lg border border-white/10">
            {children}
          </div>
        )}

        <div className="flex flex-col gap-3">
          {customFields?.map((field, index) => (
            <FieldRenderer
              key={index}
              field={field}
              value={nodeData[field.name]}
              onChange={handleInputChange}
              label={field.label}
            />
          ))}
        </div>

        {inputHandles?.map((handle, index) => (
          <Handle
            key={`${id}-input-${index}`}
            type="target"
            position={Position.Left}
            id={handle.id}
            style={{ ...handleStyle, ...handle.style, ...defaultHandleStyle }}
            className="hover:scale-110 transition-transform duration-200"
          />
        ))}

        {outputHandles?.map((handle, index) => (
          <Handle
            key={`${id}-output-${index}`}
            type="source"
            position={Position.Right}
            id={handle.id}
            style={{ ...handleStyle, ...handle.style, ...defaultHandleStyle }}
            className="hover:scale-110 transition-transform duration-200"
          />
        ))}
      </div>
    </div>
  );
};
