

import { useState, useRef, useCallback } from "react";
import ReactFlow, { Controls, Background, MiniMap } from "reactflow";
import { useStore } from "./store";
import { shallow } from "zustand/shallow";
import { InputNode } from "./nodes/inputNode";
import { LLMNode } from "./nodes/llmNode";
import { OutputNode } from "./nodes/outputNode";
import { TextNode } from "./nodes/textNode";
import { NumberInputNode } from "./nodes/numberInputNode";
import { CheckboxNode } from "./nodes/checkBoxNode";
import { ColorPickerNode } from "./nodes/colorPickerNode";
import { MultiplierNode } from "./nodes/multiplierNode";
import { StringConcatenateNode } from "./nodes/stringConcatenateNode";
import { DataTransformerNode } from "./nodes/dataTransformerNode";
import { ApiConnectorNode } from "./nodes/apiConnectorNode";
import { FilterNode } from "./nodes/filterNode";
import { ProcessorNode } from "./nodes/processorNode";
import { TriggerNode } from "./nodes/triggerNode";

import "reactflow/dist/style.css";

const gridSize = 20;
const proOptions = { hideAttribution: true };
const nodeTypes = {
  customInput: InputNode,
  llm: LLMNode,
  customOutput: OutputNode,
  text: TextNode,
  numberInput: NumberInputNode,
  checkboxNode: CheckboxNode,
  stringConcatenate: StringConcatenateNode,
  colorPicker: ColorPickerNode,
  multiplierNode: MultiplierNode,
  dataTransformer: DataTransformerNode,
  apiConnector: ApiConnectorNode,
  filterNode: FilterNode,
  processorNode: ProcessorNode,
  triggerNode: TriggerNode,
};

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
  getNodeID: state.getNodeID,
  addNode: state.addNode,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
});

export const PipelineUI = () => {
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const {
    nodes,
    edges,
    getNodeID,
    addNode,
    onNodesChange,
    onEdgesChange,
    onConnect,
  } = useStore(selector, shallow);

  const getInitNodeData = (nodeID, type) => {
    let nodeData = { id: nodeID, nodeType: `${type}` };
    return nodeData;
  };

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      if (event?.dataTransfer?.getData("application/reactflow")) {
        const appData = JSON.parse(
          event.dataTransfer.getData("application/reactflow")
        );
        const type = appData?.nodeType;

       
        if (typeof type === "undefined" || !type) {
          return;
        }

        const position = reactFlowInstance.project({
          x: event.clientX - reactFlowBounds.left,
          y: event.clientY - reactFlowBounds.top,
        });

        const nodeID = getNodeID(type);
        const newNode = {
          id: nodeID,
          type,
          position,
          data: getInitNodeData(nodeID, type),
        };

        addNode(newNode);
      }
    },
    [reactFlowInstance]
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  return (
    <>
      <div ref={reactFlowWrapper} style={{ width: "100%", height: "100%" }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onDrop={onDrop}
          onDragOver={onDragOver}
          onInit={setReactFlowInstance}
          nodeTypes={nodeTypes}
          proOptions={proOptions}
          snapGrid={[gridSize, gridSize]}
          connectionLineType="smoothstep"
          connectionLineStyle={{
            stroke: "#8B5CF6",
            strokeWidth: 3,
            strokeDasharray: "5,5",
          }}
          fitView
          className="bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"
        >
          <Background 
            color="#4F46E5" 
            gap={gridSize} 
            size={1} 
            className="opacity-20"
          />
          <Controls 
            className="bg-black/20 backdrop-blur-md border border-white/10 rounded-lg"
            style={{
              button: {
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                color: 'white',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '8px',
              }
            }}
          />
          <MiniMap 
            className="bg-black/20 backdrop-blur-md border border-white/10 rounded-lg"
            nodeColor="#8B5CF6"
            maskColor="rgba(0, 0, 0, 0.3)"
          />
        </ReactFlow>
      </div>
    </>
  );
};
