

export const DraggableNode = ({ type, label, icon, category = "core" }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = "grabbing";
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData)
    );
    event.dataTransfer.effectAllowed = "move";
  };

  const getCategoryStyles = (category) => {
    switch (category) {
      case "core":
        return "bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-blue-400/30 hover:border-blue-400/50";
      case "processing":
        return "bg-gradient-to-br from-green-500/20 to-teal-500/20 border-green-400/30 hover:border-green-400/50";
      case "utility":
        return "bg-gradient-to-br from-orange-500/20 to-red-500/20 border-orange-400/30 hover:border-orange-400/50";
      default:
        return "bg-gradient-to-br from-slate-500/20 to-gray-500/20 border-slate-400/30 hover:border-slate-400/50";
    }
  };

  return (
    <div
      className={`
        ${getCategoryStyles(category)}
        backdrop-blur-sm border-2 rounded-xl min-w-28 min-h-24 
        cursor-grab hover:cursor-grabbing transition-all duration-200
        flex items-center justify-center flex-col p-3 gap-2
        hover:scale-105 hover:shadow-lg hover:shadow-black/20
        group
      `}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = "grab")}
      draggable
    >
      <div className="text-2xl group-hover:scale-110 transition-transform duration-200">
        {icon}
      </div>
      <span className="text-white text-xs font-medium text-center leading-tight">
        {label}
      </span>
    </div>
  );
};
