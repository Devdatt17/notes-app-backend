Welcome to backend code for notes app
Let's get started


# API Documentation:

### To get all notes
Endpoint: <b>/</b>  
Method: <b>GET</b>

### To get individual note
Endpoint: <b>/:id</b>  
Method: <b>GET</b>

### To add new notes
Endpoint: <b>/:id</b>  
Method: <b>POST</b>  

Request Body:
```json
{
   "_id": "9463769n-fdsd3-242ds",
    "noteId": "ad56",
    "title": "TEST TITLE",
    "message": "MSG 3",
    "lastModified": "2024-05-30"
}
```

### To update a specific note
Endpoint: <b>/:id</b>  
Method: <b>PATCH</b>

### To delete all notes
Endpoint: <b>/</b>  
Method: <b>DELETE</b>

### To delete notes with specific id
Endpoint: <b>/:id</b>  
Method: <b>DELETE</b>
