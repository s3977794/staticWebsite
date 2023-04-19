
const toggleBtn = document.getElementById('toggleBtn');
const dropDownContent = document.getElementById('dropDownContent');
toggleBtn.addEventListener('click', () => {
    if(dropDownContent.style.display === 'none'){
        dropDownContent.style.display = 'block';
    }
    else{
        dropDownContent.style.display = 'none';
    }
})


