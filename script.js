document.getElementById('add-note').addEventListener('click', function(){
    const notetext = document.getElementById('note-text').value;
    if( notetext.trim() !== '') {
        addNote(notetext);
        document.getElementById('note-text').value = '';
    }   
});
    function addNote(text){
        const noteContainer = document.getElementById('notes-container');
        
        const note = document.createElement('div');
        note.className = 'note';

        const noteContent = document.createElement('span');
        noteContent.textContent = text;

        const deleteButton = document.createElement('button');
        deleteButton.className= 'delete-note';
        deleteButton.textContent = 'delete';
        deleteButton.addEventListener('click', function(){
            noteContainer.removeChild(note);
        });
        note.appendChild(noteContent);
        note.appendChild(deleteButton);
        noteContainer.appendChild(note);
    }