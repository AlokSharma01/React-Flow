
import { useStore } from "./store";
import { shallow } from "zustand/shallow";
import { Button } from "@nextui-org/react";
import { useState } from "react";

export const SubmitButton = () => {
  const { nodes, edges } = useStore(
    (state) => ({
      nodes: state.nodes,
      edges: state.edges,
    }),
    shallow
  );

  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://vectorshift-assignment.onrender.com/pipelines/parse",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ nodes, edges }),
        }
      );

      const result = await response.json();
      setModalMessage(`Pipeline submitted successfully!\n\nNodes: ${result.num_nodes}\nEdges: ${result.num_edges}\nIs DAG: ${result.is_dag ? 'Yes' : 'No'}`);
      setShowModal(true);

      // close in 4s
      setTimeout(() => {
        setShowModal(false);
      }, 4000);
      
    } catch (error) {
      console.error("Error submitting the pipeline:", error);
      setModalMessage(`Error submitting pipeline: ${error.message}`);
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
      }, 4000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center fixed bottom-8 left-0 right-0 z-40">
        <div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl p-2 shadow-2xl">
          <Button 
            onClick={handleSubmit} 
            isLoading={isLoading}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold px-8 py-3 rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-lg"
            size="lg"
          >
            {isLoading ? "Processing..." : "Submit Pipeline"}
          </Button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-black/80 backdrop-blur-md border border-white/20 rounded-xl p-6 max-w-md w-full mx-4 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white text-lg font-semibold">Pipeline Status</h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-white/60 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="bg-white/10 rounded-lg p-4 border border-white/10">
              <pre className="text-white/80 text-sm whitespace-pre-wrap">
                {modalMessage}
              </pre>
            </div>
            <div className="mt-4 text-center">
              <div className="text-white/60 text-xs">
                Auto-closing in 4 seconds...
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
