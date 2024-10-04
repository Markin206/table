const array = [
    {
        firstname: 'Géza',
        firstname2: 'Ferenc',
        lastname: 'Kocsis'
    },
    {
        firstname: 'Mária',
        firstname2: 'Júlia',
        lastname: 'Horváth'
    },
    {
        firstname: 'Ferenc',
        lastname: 'Balogh'
    },
    {
        firstname: 'Gábor',
        firstname2: 'Attila',
        lastname: 'Horváth'
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

lastname.innerHTML="Veznev"
firstname.innerHTML="Kernev"
firstname.colSpan = 2

const tablebody = document.createElement('tbody')
table.appendChild(tablebody)
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

    if(person.firstname2===undefined){
        firstname.colSpan = 2
    }
    else{
        const firstname2 = document.createElement('td')
        firstname2.innerHTML = person.firstname2
        tr.appendChild(firstname2)
    }
}