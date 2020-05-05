import React from 'react';
import { FormGroup, Label, Input, Col, Row } from 'reactstrap';
import { FaTrash } from 'react-icons/fa';

import { Draggable, state } from 'react-page-maker';

const DraggableHtml = (props) => {
  const {
    id, showBasicContent, showPreview,
    dropzoneID, parentID, name, htmlContent
  } = props;

  if (showBasicContent) {
    return (
      <Draggable { ...props } >
        {
          <span>{ name }</span>
        }
      </Draggable>
    )
  }

  if (showPreview) {
    return (
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    );
  }

  const onChange = (e) => {
    const value = e.target.value;
    state.updateElement(id, dropzoneID, parentID, { name: value });
  };

  return (
    <Draggable { ...props } >
      <FormGroup className="m-0">
        <Label className="col-sm-12">
          <span>{name}</span>
          <FaTrash
            className="pull-right"
            color="#dc3545"
            onClick={() => state.removeElement(id, dropzoneID, parentID)}
          />
          <Input type="text" value={htmlContent} onChange={onChange} />
        </Label>
      </FormGroup>
    </Draggable>
  )
};

export default DraggableHtml;