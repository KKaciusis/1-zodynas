"use strict"

    class DictionaryOutput {

        constructor(selector) {
            this.selector = selector;
    
            this.DOM = null;
        }
    
        init() {
            if (this.isValidSelector() && this.findTargetElement()) {
                this.render();
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
    
        render() {
            const HTML = `
            <div class="row">
            <div class="cell" data-title="English">Cow</div>
            <div class="cell" data-title="Lithuanian">Karve</div>
            <div class="cellAct" data-title="Actions">
                <button class="editBtn">edit</button>
                <button class="deleteBtn">Delete</button>
            </div>
        </div>`;
    
            this.DOM.insertAdjacentHTML("afterbegin", HTML);
        }
    
    }

    

document.getElementById(".save").addEventListener("click", () => {export { DictionaryOutput }})
