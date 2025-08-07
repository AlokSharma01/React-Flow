import { Textarea } from "@nextui-org/react";
import { useState, useEffect } from "react";
import { Handle, Position } from "reactflow";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "");
  const [handles, setHandles] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const defaultHandleStyle = {
    background: "#8B5CF6",
    width: "12px",
    height: "12px",
    border: "2px solid #1F2937",
    boxShadow: "0 0 10px rgba(139, 92, 246, 0.5)",
  };

  const handleTextChange = (e) => {
    const text = e.target.value;
    setCurrText(text);
    updateHandlesForVariables(text);
  };

  const updateHandlesForVariables = (text) => {
    const regex = /\{\{([a-zA-Z_$][a-zA-Z0-9_$]*)\}\}/g;
    const matches = [...text.matchAll(regex)];

    const newHandles = matches.map((match, index) => ({
      id: `${id}-${match[1]}`,
      variable: match[1],
      style: { top: `${(index + 1) * 15}%` },
    }));

    setHandles(newHandles);
  };

  const simulateApiCall = async () => {
    try {
     
      const response = await fetch("http://localhost:8000/pipelines/parse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          nodes: [{ id: "text-node", type: "text" }], 
          edges: [] 
        }),
      });

      const result = await response.json();
      setModalMessage(`API Response: ${JSON.stringify(result, null, 2)}`);
      setShowModal(true);

      setTimeout(() => {
        setShowModal(false);
      }, 3500);
    } catch (error) {
      setModalMessage(`Error: ${error.message}`);
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
      }, 3500);
    }
  };

  useEffect(() => {
    updateHandlesForVariables(currText);
  }, []);

  return (
    <>
      <div className="relative">
       
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl blur-xl"></div>
        
      
        <div className="relative px-6 py-5 w-80 bg-black/40 backdrop-blur-md border border-white/20 rounded-xl shadow-2xl hover:border-white/30 transition-all duration-200">

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-400 rounded-full animate-pulse"></div>
              <span className="text-white text-lg font-semibold">Text Template</span>
            </div>
            <div className="text-white/40 text-xs">#{id.split('-')[1] || id}</div>
          </div>

          <div className="mb-4">
            <button
              onClick={simulateApiCall}
              className="w-full px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-200 font-medium text-sm"
            >
              Test API Call
            </button>
          </div>

        
          <div className="mb-4">
            <Textarea
              label="Prompt Template"
              placeholder="Enter text with variables like {{context}} {{user_input}}"
              value={currText}
              onChange={handleTextChange}
              variant="bordered"
              radius="lg"
              className="w-full"
              classNames={{
                input: "text-white placeholder:text-white/50",
                inputWrapper: "bg-white/10 border-white/20 hover:border-white/30 focus-within:border-orange-400",
                label: "text-white/80"
              }}
            />
          </div>

       
          <Handle
            type="source"
            position={Position.Right}
            id={`${id}-output`}
            style={defaultHandleStyle}
            className="hover:scale-110 transition-transform duration-200"
          />

         
          {handles.map((handle, index) => (
            <div
              key={handle.id}
              style={{ position: "absolute", left: 0, top: handle.style.top }}
            >
              <Handle
                type="target"
                position={Position.Left}
                id={handle.id}
                style={defaultHandleStyle}
                className="hover:scale-110 transition-transform duration-200"
              />
              <div
                style={{
                  position: "relative",
                  top: "10px",
                  left: "-35px",
                  fontSize: "11px",
                  color: "#9CA3AF",
                  width: "100px",
                  textAlign: "center",
                }}
              >
                {handle.variable}
              </div>
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-black/80 backdrop-blur-md border border-white/20 rounded-xl p-6 max-w-md w-full mx-4 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white text-lg font-semibold">API Response</h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-white/60 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="bg-white/10 rounded-lg p-4 border border-white/10">
              <pre className="text-white/80 text-sm overflow-auto max-h-40">
                {modalMessage}
              </pre>
            </div>
            <div className="mt-4 text-center">
              <div className="text-white/60 text-xs">
                Auto-closing in 3.5 seconds...
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
