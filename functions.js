

/**
 * 
 * @param {'td'|'th'} tagname 
 * @param {string} HTML 
 * @param {HTMLTableRowElement } parent 
 * @returns {HTMLTableCellElement}
 */
function createtablecell(tagname, HTML, parent ){
    const el = document.createElement(tagname);
    el.innerHTML = HTML;
    parent.appendChild(el);
}
//-----------------------------------------------------------
/**
 * @param {string} tag
 * @param {string} id
 * @param {HTMLTableRowElement} parentElement
 * @returns {HTMLTableCellElement}
 */

function createHTMLElement(tag, id, parentElement)
{
    const table = document.createElement(tag);
    table.id = id;
    parentElement.appendChild(table.id)
}

//mindhárom string
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