import { PipelineToolbar } from "./toolbar";
import { PipelineUI } from "./ui";
import { SubmitButton } from "./submit";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="flex flex-col h-screen">

        <header className="bg-black/20 backdrop-blur-md border-b border-white/10">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">VS</span>
                </div>
                <h1 className="text-white text-xl font-bold">VectorShift Studio</h1>
              </div>
              <div className="text-white/60 text-sm">
                AI Pipeline Builder
              </div>
            </div>
          </div>
        </header>


        <div className="flex-1 flex  ">
          <div className="h-[90vh] overflow-auto">
            <PipelineToolbar />
          </div>
          <div className="flex-1 relative">
            <PipelineUI />
          </div>
        </div>

        <SubmitButton />
      </div>
    </div>
  );
}

export default App;
