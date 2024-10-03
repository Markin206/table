const array = [
    {
        firstname1: 'Géza',
        firstname2: 'Ferenc',
        lastname: 'Kocsis'
    },
    {
        firstname1: 'Mária',
        firstname2: 'Júlia',
        lastname: 'Horváth'
    },
    {
        firstname1: 'Ferenc',
        lastname: 'Balogh'
    },
    {
        firstname1: 'Gábor',
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

const veznev = document.createElement('th')
tableheadrow.appendChild(veznev)

const Kernev = document.createElement('th')
tableheadrow.appendChild(kernev)

veznev.innerHTML="Veznev"
kernev.innerHTML="Kernev"
kernev.colSpan = 2

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
    firstname.innerHTML = person.firstname1
    tablebody.appendChild(tr)
    

    if(person.firstname2===undefined){
        firstname.colSpan = 2
    }
    else{
        const firstname2 = document.createElement('td')
        firstname2.innerHTML = person.firstname2
        tr.appendChild(firstname2)
    }
}