import React from "react";
import { Stage, Layer, Rect, Text, Line } from "react-konva";

// Function to draw a graph node with a label
const Node = ({ x, y, label }) => (
  <>
    <Rect x={x} y={y} width={100} height={50} fill="lightblue" stroke="black" />
    <Text x={x + 10} y={y + 15} text={label} fontSize={14} fill="black" />
  </>
);

// Function to draw edges between nodes
const Edge = ({ fromX, fromY, toX, toY }) => (
  <Line points={[fromX + 50, fromY + 25, toX + 50, toY + 25]} stroke="black" />
);

// Main GraphCanvas component
const GraphCanvas = () => {
  // Sample nodes and edges based on the provided structure
  const nodes = [
    { id: 1, x: 50, y: 50, label: "chat_completion" },
    { id: 2, x: 250, y: 50, label: "load_team_config" },
    { id: 3, x: 450, y: 50, label: "get_config" },
    { id: 4, x: 250, y: 150, label: "update_spend" },
    { id: 5, x: 450, y: 150, label: "print_verbose" },
  ];

  const edges = [
    { from: 1, to: 2 },
    { from: 2, to: 3 },
    { from: 2, to: 4 },
    { from: 4, to: 5 },
  ];

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        {edges.map((edge, index) => {
          const fromNode = nodes.find((node) => node.id === edge.from);
          const toNode = nodes.find((node) => node.id === edge.to);
          return (
            <Edge
              key={index}
              fromX={fromNode.x}
              fromY={fromNode.y}
              toX={toNode.x}
              toY={toNode.y}
            />
          );
        })}
        {nodes.map((node) => (
          <Node key={node.id} x={node.x} y={node.y} label={node.label} />
        ))}
      </Layer>
    </Stage>
  );
};

export default GraphCanvas;
