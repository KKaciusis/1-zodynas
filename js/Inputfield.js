"use strict"

class Dictionary {

    constructor(selector) {
        this.selector = selector;

        this.DOM = null;
        this.entextDOM = null;
        this.lttextDOM = null;
        this.saveButtonDOM = null;
    }

    init() {
        if (this.isValidSelector() && this.findTargetElement()) {
            this.render();
            this.addEvents();
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
    <form class="topInputs">
        <div class="winput">
            <label for="english">English</label>
            <input class="entext" id="entext" type="text">
        </div>
        <div class="winput">
            <label for="lithuanian">Lithuanian</label>
            <input class="lttext" id="lttext" type="text">
        </div>
        <div class="subtn">
        <button class="save" type="submit">Save</button>
        <button class="rerset" type="reset">Reset</button>
        </div>
        <hr />
    </form>
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
        this.saveButtonDOM = this.DOM.querySelector('button[type="submit"]');
        this.entextDOM = this.DOM.querySelector('.entext')
        this.lttextDOM = this.DOM.querySelector('.lttext')
    }

    addEvents() {
        this.saveButtonDOM.addEventListener('click', (e) => {
            e.preventDefault()
            
            const lt = this.lttextDOM.value;
            const en = this.entextDOM.value;

            if (this.isValidInput(lt, en)) {
                console.log("inputs are valid");
            } else {
                console.log("inputs are not valid");

            }

        });
    }
    isValidInput (lt, en) {
        if (!isValidLt(lt) || !isValidEn(en)){
            return false;
        }
        return true;
    }
    isValidLt(lt){

        return true;
    }
    isValidEn(en){
        return true;
    }
}

export { Dictionary }
