class calculadora-grid ;{
    constructor(previousOperandTextElement, currentOperandTextElement)
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clearInterval()
    }

    clear();{
        this.currentOperand = ''
        this.previusOperand = ''
        this.operation = undefined
    }

    delete();{
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    appendNumber(number);{
        if (number === '.' && this.currentOperand.includes('.'))
            return this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    chooseOperation(operation);{
        if (this.currentOperand === '') return 
        if (this.currentOperand !== '') {
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand
    }

    compute();{
        let computation 
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
            case '+' :
                computation = prev + current
                break
            case '-' :
                computation = prev - current
                break
            case '*' :
                computation = prev * current
                break
            case '÷' :
                computation = prev / current
                break
            default:
                return               
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''
    }

    getDisplayNumber(number) ;{
        const strigNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = strigNumber.split('.')[1]
        let integerDisplay
        if (isNaN(integerDigits)) {
            integerDisplay = ``
        } else {
            integerDisplay = integerDigits.toLocaleString('en', {maximumFractionDigits: 0})
        }
        if (decimalDigits != null){
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay
        }
    }

    uploadDisplay() ;{
        this.currentOperandTextElement.innerText = this.getDisplayNumber
        if (this.operation != null) {
            this.previousOperandTextElement.innerText =
            `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
        } else {
            this.previousOperandTextElement.innerText = ``
        }
    }


const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelectorAll('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

// Posso ter errado Calculadora - checar depois
const calculadora = new calculadora(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculadora.appendNumber(button.innerText)
        calculadora.uploadDisplay()
    })
})

operationButtons.forEach(button =>{
    button.addEventListener ('click' , () => {
        calculadora.chooseOperation(button.innerText)
        calculadora.updateDisplay()
    })
})

equalsButton