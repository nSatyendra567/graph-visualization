import React from "react";
import ReactFlow, { MiniMap, Controls, Background, Handle } from 'react-flow-renderer';
import "./CustomNode.css";

const CustomNode = ({ data }) => {
  return (
    <div className="custom-node">
      <Handle type="source" position="right" id="method" style={{ top: 100 }} />
      <div className="node-header">
        <h4>{data.title}</h4>
      </div>
      <div className="node-body">
        <p className="method-name">{data.method}</p>
        <p><strong>DependentLibs:</strong> [{data.libs.join(', ')}]</p>
        <p><strong>Params:</strong> [{data.params.join(', ')}]</p>
        <p><strong>ResponseObject:</strong> {data.responseObject}</p>
      </div>
      <Handle type="target" position="left" id="method" style={{ top: 100 }} />
    </div>
  );
};

export default CustomNode;
