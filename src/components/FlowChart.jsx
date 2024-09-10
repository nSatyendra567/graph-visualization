import React from 'react';
import ReactFlow, { MiniMap, Controls, Background, Handle } from 'react-flow-renderer';
import CustomNode from './CustomNode';

// Define custom node types
const nodeTypes = {
  customNode: CustomNode,
};

// Define initial nodes
const initialNodes = [
  {
    id: '1',
    type: 'customNode',
    data: {
      title: 'cart_router.py',
      method: 'add_item_to_cart',
      libs: ['sqlalchemy'],
    //   params: { user_id: 'user', item: 'item', db: 'db' },
      responseObject: 'JSONResponse',
    },
    position: { x: 100, y: 100 },
  },
  {
    id: '2',
    type: 'customNode',
    data: {
      title: 'cart_service.py',
      method: 'add_item_to_cart',
      libs: ['sqlalchemy'],
    //   params: { user_id: 'user', item: 'item', db: 'db', quantity: 'quantity' },
      responseObject: 'CartItem',
    },
    position: { x: 400, y: 100 },
  },
];

// Define initial edges
const initialEdges = [
  {
    id: 'e1-2',
    source: '1',
    sourceHandle: 'method',  // Connect to 'method' field in node 1
    target: '2',
    targetHandle: 'method',  // Connect to 'method' field in node 2
    animated: true,
    arrowHeadType: 'arrow',
  },
];

// Define a custom node that includes handles for specific data fields
const CustomNodeComponent = ({ data }) => {
  return (
    <div>
      <Handle type="source" position="right" id="method" style={{ top: 10 }} />
      <strong>{data.title}</strong>
      <div>Method: {data.method}</div>
      <div>Libraries: {data.libs.join(', ')}</div>
      <Handle type="target" position="left" id="method" style={{ top: 10 }} />
    </div>
  );
};

// Render the FlowChart with custom nodes and edges
const FlowChart = () => {
  return (
    <div style={{ height: 700 }}>
      <ReactFlow
        nodes={initialNodes}
        edges={initialEdges}
        nodeTypes={{ customNode: CustomNode }}
        fitView
      >
        <MiniMap />
        <Controls />
        <Background color="#aaa" gap={16} />
      </ReactFlow>
    </div>
  );
};

export default FlowChart;
