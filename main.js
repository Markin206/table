let array = [
    {
        firstname: 'Géza',
        firstname2: 'Ferenc',
        lastname: 'Kocsis',
        married: true,
        pet: 'kutya'
    },
    {
        firstname: 'Mária',
        firstname2: 'Júlia',
        lastname: 'Horváth',
        married: false,
        pet: 'macska'
    },
    {
        firstname: 'Ferenc',
        lastname: 'Balogh',
        married: false,
        pet: 'teknős'
    },
    {
        firstname: 'Gábor',
        firstname2: 'Attila',
        lastname: 'Horváth',
        married: true,
        pet: 'macska'
    },
]

const table = document.createElement('table')
document.body.appendChild(table)

const tablehead = document.createElement('thead')
table.appendChild(tablehead)

const tableheadrow = document.createElement('tr')
tablehead.appendChild(tableheadrow)

const lastname = document.createElement('th')
tableheadrow.appendChild(lastname)

const firstname = document.createElement('th')
tableheadrow.appendChild(firstname)

const married = document.createElement('th')
tableheadrow.appendChild(married)

const pet = document.createElement('th')
tableheadrow.appendChild(pet)


lastname.innerHTML="Veznev"
firstname.innerHTML="Kernev"
married.innerHTML="Házas"
pet.innerHTML = "Háziállat"
firstname.colSpan = 2

const tablebody = document.createElement('tbody')
table.appendChild(tablebody)

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
    if(Validatefield(lastname, firstname, pet)){
        array.push(new_person); //hozzá adjuk a new_person objektumot az array tömbhöz
        console.log(array);
        tablebody.innerHTML = ""; // kiürítjük a tbody-t hogy ne építse fel a tablet teljesen újra.
        
        rendertable();
    }
    
})



function Validatefield(lastname, firstname1, pet){
    let result = true;
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

    if(firstname1.value=== ""){
        const parentElement = pet.parentElement
        const error = parentElement.querySelector('.error')
        error.innerHTML = "Kötelező állat";
        result = false;
    }
    return result;
}

//--------------------------------------------------------------------- table-t létrehozó függvény
rendertable();
    function rendertable() {
        for(const person of array){
            const tr = document.createElement('tr')
        
        
            const lastname = document.createElement('td')
            tablebody.appendChild(tr)
            tr.appendChild(lastname)
            lastname.innerHTML = person.lastname
        
        
            const firstname = document.createElement('td')
            tablebody.appendChild(tr)
            tr.appendChild(firstname)
            firstname.innerHTML = person.firstname
            tablebody.appendChild(tr)
        
        
            if(person.firstname2===undefined){
                firstname.colSpan = 2
            }
            else{
                const firstname2 = document.createElement('td')
                firstname2.innerHTML = person.firstname2
                tr.appendChild(firstname2)
            }
        
        
            const married = document.createElement('td');
            tablebody.appendChild(tr);
            tr.appendChild(married);
            married.innerHTML = person.married === true? 'Igaz' : 'Nem';
        
        
            const pet = document.createElement('td');
            tablebody.appendChild(tr);
            tr.appendChild(pet);
            pet.innerHTML = person.pet;
            tablebody.appendChild(tr);
        
            
            tr.addEventListener('click', function(e)
                {
                    const selected = tablebody.querySelector('.selected');
                    if(selected !=undefined)
                        {
                            selected.classList.remove('selected');
                            
                        }
                    console.log('click');
                    e.currentTarget.classList.add('selected'); 
                }
            )  
        }
    }