
import { DraggableNode } from "./draggableNode";
import { MdInput } from "react-icons/md";
import { TbBoxModel2 } from "react-icons/tb";
import { MdOutlineOutput } from "react-icons/md";
import { CiText } from "react-icons/ci";
import { GoNumber } from "react-icons/go";
import { IoIosCheckboxOutline } from "react-icons/io";
import { VscSymbolString } from "react-icons/vsc";
import { IoColorPaletteOutline } from "react-icons/io5";
import { TbMultiplier2X } from "react-icons/tb";
import { BiData } from "react-icons/bi";
import { AiOutlineApi } from "react-icons/ai";
import { BsGear } from "react-icons/bs";
import { FiFilter } from "react-icons/fi";
import { HiOutlineLightningBolt } from "react-icons/hi";

export const PipelineToolbar = () => {
  return (
    <sidebar className="bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="px-6 py-4">
        <div className="flex flex-col space-y-4">
       
          <div>
            <h3 className="text-white/80 text-sm font-semibold mb-3 uppercase tracking-wider">
              Core Nodes
            </h3>
            <div className="flex flex-col gap-3">
              <DraggableNode 
                type="customInput" 
                label="Data Input" 
                icon={<MdInput className="text-blue-400" />} 
                category="core"
              />
              <DraggableNode 
                type="llm" 
                label="AI Model" 
                icon={<TbBoxModel2 className="text-purple-400" />} 
                category="core"
              />
              <DraggableNode 
                type="customOutput" 
                label="Data Output" 
                icon={<MdOutlineOutput className="text-green-400" />} 
                category="core"
              />
              <DraggableNode 
                type="text" 
                label="Text Template" 
                icon={<CiText className="text-orange-400" />} 
                category="core"
              />
            </div>
          </div>

        
          <div>
            <h3 className="text-white/80 text-sm font-semibold mb-3 uppercase tracking-wider">
              Data Processing
            </h3>
            <div className="flex flex-col gap-3">
              <DraggableNode 
                type="numberInput" 
                label="Number Input" 
                icon={<GoNumber className="text-cyan-400" />} 
                category="processing"
              />
              <DraggableNode
                type="stringConcatenate"
                label="Text Merge"
                icon={<VscSymbolString className="text-yellow-400" />}
                category="processing"
              />
              <DraggableNode
                type="multiplierNode"
                label="Calculator"
                icon={<TbMultiplier2X className="text-red-400" />}
                category="processing"
              />
              <DraggableNode
                type="checkboxNode"
                label="Condition"
                icon={<IoIosCheckboxOutline className="text-emerald-400" />}
                category="processing"
              />
            </div>
          </div>

     
          <div>
            <h3 className="text-white/80 text-sm font-semibold mb-3 uppercase tracking-wider">
              Utilities
            </h3>
            <div className="flex flex-col gap-3">
              <DraggableNode
                type="colorPicker"
                label="Color Picker"
                icon={<IoColorPaletteOutline className="text-pink-400" />}
                category="utility"
              />
              <DraggableNode
                type="dataTransformer"
                label="Data Transform"
                icon={<BiData className="text-indigo-400" />}
                category="utility"
              />
              <DraggableNode
                type="apiConnector"
                label="API Connector"
                icon={<AiOutlineApi className="text-teal-400" />}
                category="utility"
              />
              <DraggableNode
                type="filterNode"
                label="Filter"
                icon={<FiFilter className="text-amber-400" />}
                category="utility"
              />
              <DraggableNode
                type="processorNode"
                label="Processor"
                icon={<BsGear className="text-slate-400" />}
                category="utility"
              />
              <DraggableNode
                type="triggerNode"
                label="Trigger"
                icon={<HiOutlineLightningBolt className="text-violet-400" />}
                category="utility"
              />
            </div>
          </div>
        </div>
      </div>
    </sidebar>
  );
};
