import * as React from 'react';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';

interface ICreateNotesProps {
}

const CreateNotes: React.FunctionComponent<ICreateNotesProps> = (props) => {
  const titleRef = React.useRef<HTMLInputElement | null>(null);
  const textRef = React.useRef<HTMLTextAreaElement | null>(null);
  const colorRef = React.useRef<HTMLInputElement | null>(null);
  return (
    <>
      <h2>Create notes</h2>
      <Form className = "mt-3 mb-3">
        <Form.Group className='mb-3' controlId='formBasicTitle' >
          <Form.Label>Title</Form.Label>
          <Form.Control type='text' ref={ titleRef} placeholder='Enter title for notes'/>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicTitle' >
          <Form.Label>Text</Form.Label>
          <Form.Control type='text' placeholder='Enter your notes' as="textarea" rows={3} ref={textRef} />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label htmlFor='ColorInput' >Notes Color</Form.Label>
          <Form.Control type='color' id='colorInput' defaultValue="#dfdfdf" placeholder='Choose your color' ref={colorRef} />
        </Form.Group>
        <Button type="submit" variant="primary">Submit</Button>
      </Form>
    </>
  );
};

export default CreateNotes;
