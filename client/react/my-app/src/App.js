import React, { useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText, Container, Typography, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function App() {
  const [item, setItem] = useState({ user_id: '', lat: '', lon: '', description: '', image: '', keywords: '' });
  const [items, setItems] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { ...item, id: Date.now() };
    setItems(prevItems => [...prevItems, newItem]);
    setItem({ user_id: '', lat: '', lon: '', description: '', image: '', keywords: '' });
  };

  const handleDelete = (id) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  return (
    <Container>
      <Box id="nav" sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          FreeCycle
        </Typography>
      </Box>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
  <TextField
    margin="normal"
    required
    fullWidth
    id="user_id"
    label="User ID"
    name="user_id"
    autoFocus
    value={item.user_id}
    onChange={handleInputChange}
  />
  <TextField
    margin="normal"
    required
    fullWidth
    id="lat"
    label="Latitude"
    name="lat"
    value={item.lat}
    onChange={handleInputChange}
  />
  <TextField
    margin="normal"
    required
    fullWidth
    id="lon"
    label="Longitude"
    name="lon"
    value={item.lon}
    onChange={handleInputChange}
  />
  <TextField
    margin="normal"
    required
    fullWidth
    id="description"
    label="Description"
    name="description"
    multiline
    rows={4}
    value={item.description}
    onChange={handleInputChange}
  />
  <TextField
    margin="normal"
    required
    fullWidth
    id="image"
    label="Image URL"
    name="image"
    value={item.image}
    onChange={handleInputChange}
  />
  <TextField
    margin="normal"
    required
    fullWidth
    id="keywords"
    label="Keywords"
    name="keywords"
    value={item.keywords}
    onChange={handleInputChange}
  />
  <Button type="submit" data-action="create_item" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
    Create Item
  </Button>
</Box>


<List>
  {items.map((item) => (
    <ListItem 
      key={item.id}
      secondaryAction={
        <Button 
          edge="end" 
          aria-label="delete" 
          onClick={() => handleDelete(item.id)}
          data-action="delete"
        >
          <DeleteIcon />
        </Button>
      }
    >
      <ListItemText 
        primary={item.description} 
        secondary={`Lat: ${item.lat}, Lon: ${item.lon}`} 
      />
      <span data-field="id" style={{ display: 'none' }}>{item.id}</span>
    </ListItem>
  ))}
</List>

    </Container>
  );
}

export default App;
