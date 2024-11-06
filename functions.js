

/**
 * 
 * @param {'th'||'td'}tagname
 * @param {string} HTML 
 * @param {HTMLElement} parent 
 * @returns {HTMLTableCellElement}
 */
function createtablecell(tagname, HTML, parent ){
    const el = document.createElement(tagname);
    el.innerHTML = HTML;
    parent.appendChild(el);
    return el;
}
//-----------------------------------------------------------
/**
 * @param {string} tag
 * @param {string} id
 * @param {string} parentElement
 * @returns {string}
 */

function createHTMLElement(tag, id, parentElement)
{
    const table = document.createElement(tag);
    table.id = id;
    parentElement.appendChild(table);
}

//mindhárom string ------------------------------------------
/**
 * @param {string} tag 
 * @param {string} id 
 * @param {string} Parentid 
 */
function createHTMLElementWithParentID(tag,id,Parentid)
{
    const ParentElement = document.getElementById(Parentid);
    if(ParentElement != undefined){
        createHTMLElement(tag, id, ParentElement)
    }
}


//-------------------------------------------------------------
/**
 * 
 */
function renderTableHeader(){
    const tableheadrow = document.getElementById('persontableheadrow')
    const lastname = document.createElement('th')
    const firstname = document.createElement('th')
    firstname.colSpan = 2;
    const married = document.createElement('th')
    const pet = document.createElement('th')
    createtablecell("lastname", "Veznev", tableheadrow)
    createtablecell("firstname", "Kernev", tableheadrow)
    createtablecell("married", "Házas-e?", tableheadrow)
    createtablecell("pet", "Állat", tableheadrow)

}


//-------------------------------------------------------------
rendertable(array);
    function rendertable(array) {
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