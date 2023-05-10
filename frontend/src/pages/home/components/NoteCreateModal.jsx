import { useState, useContext } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField } from '@mui/material';
import Cookies from 'js-cookie';
import { AxiosError } from 'axios';
import GlobalContext from '../../../share/Context/GlobalContext';

const NoteCreateModal = ({ open = false, handleClose = () => {}, setNotes = () => {} }) => {
  const [newNote, setNewNote] = useState({
    title: '',
    description: '',
  });
  const [error, setError] = useState({});
  const { setStatus } = useContext(GlobalContext);

  const submit = async () => {
    // TODO: Implement create note
    // 1. validate form
    // 2. call API to create note
    // 3. if successful, add new note to state and close modal
    // 4. if create note failed, check if error is from calling API or not
  };

  const resetAndClose = () => {
    setTimeout(() => {
      setNewNote({
        title: '',
        description: '',
      });
      setError({});
    }, 500);
    handleClose();
  };

  const handleChange = (e) => {
    setNewNote({
      ...newNote,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Dialog fullWidth maxWidth="sm" open={open} onClose={resetAndClose}>
      <DialogTitle>Create Note</DialogTitle>
      <DialogContent>
        <TextField
          required
          margin="dense"
          id="title"
          name="title"
          label="Title"
          fullWidth
          variant="outlined"
          value={newNote.title}
          onChange={handleChange}
          error={!!error.title}
          helperText={error.title}
        />
        <TextField
          required
          multiline
          margin="dense"
          id="description"
          name="description"
          label="Description"
          placeholder="Write your note here..."
          fullWidth
          value={newNote.description}
          onChange={handleChange}
          error={!!error.description}
          helperText={error.description}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={resetAndClose} color="error" sx={{ textTransform: 'capitalize' }}>
          Cancel
        </Button>
        <Button onClick={submit} type="submit" sx={{ textTransform: 'capitalize' }}>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NoteCreateModal;
