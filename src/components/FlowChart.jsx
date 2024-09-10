import React from 'react';
import ReactFlow, { MiniMap, Controls, Background } from 'react-flow-renderer';
import CustomNode from './CustomNode';

const nodeTypes = {
  customNode: CustomNode,
};

const initialNodes = [
  {
    id: '1',
    type: 'customNode',
    data: {
      title: 'cart_router.py',
      method: 'add_item_to_cart',
      libs: ['sqlalchemy'],
      params: { user_id: 'user', item: 'item', db: 'db' },
      responseObject: 'JSONResponse',
    },
    position: { x: 100, y: 100 }, // Adjust position
  },
  {
    id: '2',
    type: 'customNode',
    data: {
      title: 'cart_service.py',
      method: 'add_item_to_cart',
      libs: ['sqlalchemy'],
      params: { user_id: 'user', item: 'item', db: 'db', quantity: 'quantity' },
      responseObject: 'CartItem',
    },
    position: { x: 400, y: 100 }, // Adjust position
  },
];

const initialEdges = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    animated: true,
    arrowHeadType: 'arrow',
  },
];

const FlowChart = () => {
  return (
    <div style={{ height: 700 }}>
      <ReactFlow
        nodes={initialNodes}
        edges={initialEdges}
        nodeTypes={nodeTypes}
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
