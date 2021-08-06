"use strict"

    class DictionaryOutput {

        constructor(selector) {
            this.selector = selector;
    
            this.DOM = null;
            this.listDom = null;
        }
    
        init() {
            if (this.isValidSelector() && this.findTargetElement()) {
                return true;
            }
            else {
                return false;
            }
        }
    
        isValidSelector() {
            if (typeof this.selector !== "string" || this.selector === "") {
                console.error("ERROR: selector turi buti ne tuscias string");
                return false;
            }
            return true;
    
        }
    
        findTargetElement() {
            this.DOM = document.querySelector(this.selector);
    
            if (!this.DOM) {
                console.error("Pagal pateikta selector, elementas neegzistuoja");
                return false;
            }
            return true;
        }
    


        createRow (lt, en){
            const HTML =`
            <div class="row">
            <div class="cell" data-title="English">${en}</div>
            <div class="cell" data-title="Lithuanian">${lt}</div>
            <div class="cellAct" data-title="Actions">
                <button class="editBtn">edit</button>
                <button class="deleteBtn">Delete</button>
            </div>
            </div>`;
            let placement = document.getElementById('table');
            placement.insertAdjacentHTML("beforeEnd", HTML);

        };
    
    }
    export { DictionaryOutput };
