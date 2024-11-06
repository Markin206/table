let array = [
    { firstname1: 'Géza', firstname2: 'Ferenc', lastname: 'Kocsis', married: true, pet: 'kutya' },
    { firstname1: 'Mária', firstname2: 'Júlia', lastname: 'Horváth', married: false, pet: 'macska' },
    { firstname1: 'Ferenc', lastname: 'Balogh', married: false, pet: 'teknős' },
    { firstname1: 'Gábor', firstname2: 'Attila', lastname: 'Horváth', married: true, pet: 'macska' }
];

createHTMLElement('table','persontable',document.body);
createHTMLElementWithParentID('thead','persontablehead','persontable');
createHTMLElementWithParentID('tr','persontableheadrow','persontablehead');
renderTableHeader();

createHTMLElementWithParentID('tbody','persontablebody','persontable');

//---------------------------------------------------------- FORM
const form = document.getElementById('form');
form.addEventListener('submit', function(e){
    e.preventDefault();
    const lastname = document.getElementById('lastname');
    const firstname1 = document.getElementById('firstname1')
    const firstname2 = document.getElementById('firstname2')
    const married = document.getElementById('married');
    const pet = document.getElementById('pet');

    let lastnameValue = lastname.value;
    let firstname1Value = firstname1.value;
    let firstname2Value = firstname2.value;
    let marriedChecked = married.checked;
    let petValue = pet.value;

    if(firstname2Value ==""){
        firstname2Value = undefined;
    }
    let new_person = {
        lastname: lastnameValue,
        firstname: firstname1Value,
        firstname2: firstname2Value,
        pet: petValue,
        married: marriedChecked
    }
    if(Validatefield(lastname, firstname1, pet)){
        array.push(new_person); //hozzá adjuk a new_person objektumot az array tömbhöz
        console.log(array);
        tablebody.innerHTML = ""; // kiürítjük a tbody-t hogy ne építse fel a tablet teljesen újra.
        
        rendertable();
        form.reset();
    }
    
})
//---------------------------------------------------------------------
/**
 * 
 * @param {string} lastname 
 * @param {string} firstname1 
 * @param {string} pet 
 * @returns {boolean}
 */
function Validatefield(lastname, firstname1, pet){
    let result = true;

    //kiürítjük a error
    const error = form.querySelectorAll('.error');
    for(const errors of error)
    {
    errors.innerHTML = "";
    }

    //error szövegek kiíratása ha valamelyik feltétel megtörténik
    if(lastname.value=== ""){
        const parentElement = lastname.parentElement
        const error = parentElement.querySelector('.error')
        error.innerHTML = "Kötelező vezetéknév";
        result = false;
    }

    if(firstname1.value=== ""){
        const parentElement = firstname1.parentElement
        const error = parentElement.querySelector('.error')
        error.innerHTML = "Kötelező keresztnév";
        result = false;
    }

    if(pet.value=== ""){
        const parentElement = pet.parentElement
        const error = parentElement.querySelector('.error')
        error.innerHTML = "Kötelező állat";
        result = false;
    }
    return result;
}
//--------------------------------------------------------------------- table-t létrehozó függvény
