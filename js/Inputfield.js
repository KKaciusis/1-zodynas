"use strict"

class Dictionary {

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
            console.error("ERROR: Pagal pateikta selector, elementas neegzistuoja");
            return false;
        }
        return true;
    }

    render() {
        const HTML = `
    <header class="topInputs">
        <div class="winput">
            <label for="english">English</label>
            <input id="entext" type="text">
        </div>
        <div class="winput">
            <label for="lithuanian">Lithuanian</label>
            <input id="lttext" type="text">
        </div>
        <div class="subtn">
        <button class="save" type="submit">Save</button>
        <button class="rerset" type="reset">Reset</button>
        </div>
        <hr />
    </header>
    <div class="wrapper">
        <div class="table" id="table">
            <div class="row-header">
                <div class="cell">English</div>
                <div class="cell">Lithuanian</div>
                <div class="cellAct">Actions</div>
            </div>
            
            </div>
        </div>
    </div>`;

        this.DOM.insertAdjacentHTML("afterbegin", HTML);
    }

}

export { Dictionary }
