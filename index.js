const note = document.getElementById('note')
const addNoteBtn = document.getElementById('add-note')
const notesContainer = document.getElementById('notes-container')
const overlay = document.getElementById('overlay')
const modalText = document.getElementById('modal-text')
const closeModalBtn = document.getElementById('close-modal')
addNoteBtn.addEventListener('click', function(){
  if (note.value){
    notesContainer.innerHTML +=`
    <div
            class="bg-slate-50 border border-gray-200 rounded-lg max-h-52 flex flex-col justify-between p-5"
          >
            <h3 class="font-bold text-xl">Note ${notesContainer.childElementCount + 1}</h3>
            <p class="my-3 text-lg">${note.value.length >= 80 ? note.value.substr(0,80)+'...' : note.value}</p>
            <button
              class="py-1 px-3 bg-blue-500 text-white rounded-md w-fit"
              onclick="viewDetails('${note.value}')"
            >
              View detail
            </button>
          </div>
    `
    note.value = ''
  }
})



function viewDetails(note){
  overlay.classList.remove('hidden')
  modalText.textContent = note
}

closeModalBtn.addEventListener('click', function(){
  overlay.classList.add('hidden')
})