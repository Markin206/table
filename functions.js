

/**
 * 
 * @param {'td'|'th'} tagname 
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
    const tableheadrow = document.getElementById('tr')
    const lastname = document.createElement('th')
    tableheadrow.appendChild(lastname)

    const firstname = document.createElement('th')
    tableheadrow.appendChild(firstname)

    const married = document.createElement('th')
    tableheadrow.appendChild(married)

    const pet = document.createElement('th')
    tableheadrow.appendChild(pet)
}

