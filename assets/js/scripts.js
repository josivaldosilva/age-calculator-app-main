const systemDate = new Date()

const arrowIcon = document.querySelector('.icon-arrow')

const InputDay = document.querySelector('#dayNum')
const InputMonth = document.querySelector('#monthNum')
const InputYear = document.querySelector('#yearNum')

const dayErrorMsgField = document.querySelector('#dayErrorMsg')
const monthErrorMsgField = document.querySelector('#monthErrorMsg')
const yearErrorMsgField = document.querySelector('#yearErrorMsg')


const dayLabel = document.querySelector('.l-day')
const monthLabel = document.querySelector('.l-month')
const yearLabel = document.querySelector('.l-year')


const spanDay = document.querySelector('.daysNum')
const spantMonth = document.querySelector('.monthsNum')
const spanYear = document.querySelector('.yearsNum')

const currentYear = systemDate.getFullYear()
const yearMaxValue = InputYear.setAttribute('max', currentYear)


arrowIcon.addEventListener('click', e => {
    e.preventDefault()

   const verify = inputFieldsValidation()
    
    const currentDay = systemDate.getDate()
    const currentMonth = (systemDate.getUTCMonth()+1)


    let day = null
    let month = null


    if(Number(InputDay.value > 0 && InputDay.value <= 31)){
        day = currentDay - Number(InputDay.value) 
        if(day >0 && day < 10){
            day = `0${day}`
        }
        if((Number(InputDay.value) > 28) && (Number(InputMonth.value) === 2) || (Number(InputDay.value) > 30) && (Number(InputMonth.value) === 4) || (Number(InputDay.value) > 30) && (Number(InputMonth.value) === 6) || (Number(InputDay.value) > 30) && (Number(InputMonth.value) === 9) || (Number(InputDay.value) > 30) && (Number(InputMonth.value) === 11)){

            dayErrorMsgField.innerHTML = 'Must be a valid date'
            dayLabel.style.color = 'hsl(0, 100%, 67%)'
            InputDay.style.outlineColor = 'hsl(0, 100%, 67%)'
            spanDay.innerHTML = '--'
            
        }else { 

            spanDay.innerHTML = day
            dayErrorMsgField.innerHTML = ''
            dayLabel.style.color = 'hsl(0, 1%, 44%)'
            InputDay.style.outlineColor = 'hsl(0, 0%, 86%)'
        }
        
    }
    if(Number(InputMonth.value > 0 && InputMonth.value <= 12)){
        month = currentMonth - Number(InputMonth.value)

        if(month > 0 && month < 10){
            month = `0${month}`
        }

        if((Number(InputDay.value) > 28) && (Number(InputMonth.value) === 2) || (Number(InputDay.value) > 30) && (Number(InputMonth.value) === 4) || (Number(InputDay.value) > 30) && (Number(InputMonth.value) === 6) || (Number(InputDay.value) > 30) && (Number(InputMonth.value) === 9) || (Number(InputDay.value) > 30) && (Number(InputMonth.value) === 11)){

            monthLabel.style.color = 'hsl(0, 100%, 67%)'
            InputMonth.style.outlineColor = 'hsl(0, 100%, 67%)'
            spantMonth.innerHTML = '--'
        }
        else {
            
            spantMonth.innerHTML = month
            monthLabel.style.color = 'hsl(0, 1%, 44%)'
            InputMonth.style.outlineColor = 'hsl(0, 0%, 86%)'
        }
        
    }
    if(Number(InputYear.value >= 1900 && InputYear.value <= currentYear)){
        if((Number(InputDay.value) > 28) && (Number(InputMonth.value) === 2) || (Number(InputDay.value) > 30) && (Number(InputMonth.value) === 4) || (Number(InputDay.value) > 30) && (Number(InputMonth.value) === 6) || (Number(InputDay.value) > 30) && (Number(InputMonth.value) === 9) || (Number(InputDay.value) > 30) && (Number(InputMonth.value) === 11)){

            yearLabel.style.color = 'hsl(0, 100%, 67%)'
            InputYear.style.outlineColor = 'hsl(0, 100%, 67%)'
            spanYear.innerHTML = '--'

        }else {

            yearLabel.style.color = 'hsl(0, 1%, 44%)'
            InputYear.style.outlineColor = 'hsl(0, 0%, 86%)'
            spanYear.innerHTML = currentYear - Number(InputYear.value)
        }
    }
   
})



const inputFieldsValidation = () => {

    const dayValidationState = InputDay.validity
    const monthValidationState = InputMonth.validity
    const yearValidationState = InputYear.validity

    // Day validation 

    if(dayValidationState.valueMissing){
        InputDay.setCustomValidity("This field is required")
        dayErrorMsgField.innerHTML = InputDay.validationMessage
        dayLabel.style.color = 'hsl(0, 100%, 67%)'
        InputDay.style.outlineColor = 'hsl(0, 100%, 67%)'

        setTimeout(e => {
            dayErrorMsgField.innerHTML = ''
            dayLabel.style.color = 'hsl(0, 1%, 44%)'
            InputDay.style.outlineColor = 'hsl(0, 0%, 86%)'
        }, 3000)

       
              
    }else if(dayValidationState.rangeOverflow || dayValidationState.rangeUnderflow){
        InputDay.setCustomValidity("Must be a valid day ")
        dayErrorMsgField.innerHTML = InputDay.validationMessage
        dayLabel.style.color = 'hsl(0, 100%, 67%)'
        InputDay.style.outlineColor = 'hsl(0, 100%, 67%)'

        setTimeout(e => {
            dayErrorMsgField.innerHTML = ''
            dayLabel.style.color = 'hsl(0, 1%, 44%)'
            InputDay.style.outlineColor = 'hsl(0, 0%, 86%)'
        }, 3000)

       
    }

    //Month validation

    if(monthValidationState.valueMissing){
        InputMonth.setCustomValidity("This field is required")
        monthErrorMsgField.innerHTML = InputMonth.validationMessage
        monthLabel.style.color = 'hsl(0, 100%, 67%)'
        InputMonth.style.outlineColor = 'hsl(0, 100%, 67%)'

        setTimeout(e => {
            monthErrorMsgField.innerHTML = ''
            monthLabel.style.color = 'hsl(0, 1%, 44%)'
            InputMonth.style.outlineColor = 'hsl(0, 0%, 86%)'
        }, 3000)

       
        
    }else if(monthValidationState.rangeOverflow ||          monthValidationState.rangeUnderflow){
        InputMonth.setCustomValidity("Must be a valid month ")
        monthErrorMsgField.innerHTML = InputMonth.validationMessage
        monthLabel.style.color = 'hsl(0, 100%, 67%)'
        InputMonth.style.outlineColor = 'hsl(0, 100%, 67%)'

        setTimeout(e => {
            monthErrorMsgField.innerHTML = ''
            monthLabel.style.color = 'hsl(0, 1%, 44%)'
            InputMonth.style.outlineColor = 'hsl(0, 0%, 86%)'
        }, 3000)

       
    }

    // Year validation

    if(yearValidationState.valueMissing){
        InputYear.setCustomValidity("This field is required")
        yearErrorMsgField.innerHTML = InputYear.validationMessage
        yearLabel.style.color = 'hsl(0, 100%, 67%)'
        InputYear.style.outlineColor = 'hsl(0, 100%, 67%)'

        setTimeout(e => {
            yearErrorMsgField.innerHTML = ''
            yearLabel.style.color = 'hsl(0, 1%, 44%)'
            InputYear.style.outlineColor = 'hsl(0, 0%, 86%)'
        }, 3000)

       
        
    }else if(yearValidationState.rangeOverflow){
        InputYear.setCustomValidity("Must be in the past ")
        yearErrorMsgField.innerHTML = InputYear.validationMessage
        yearLabel.style.color = 'hsl(0, 100%, 67%)'
        InputYear.style.outlineColor = 'hsl(0, 100%, 67%)'

        setTimeout(e => {
            yearErrorMsgField.innerHTML = ''
            yearLabel.style.color = 'hsl(0, 1%, 44%)'
            InputYear.style.outlineColor = 'hsl(0, 0%, 86%)'
        }, 3000)

       
        
    }else if(yearValidationState.rangeUnderflow){
        InputYear.setCustomValidity("Must be a valid month ")
        yearErrorMsgField.innerHTML = InputYear.validationMessage
        yearLabel.style.color = 'hsl(0, 100%, 67%)'
        InputYear.style.outlineColor = 'hsl(0, 100%, 67%)'

        setTimeout(e => {
            yearErrorMsgField.innerHTML = ''
            yearLabel.style.color = 'hsl(0, 1%, 44%)'
            InputYear.style.outlineColor = 'hsl(0, 0%, 86%)'
        }, 3000)

       
    }
}


document.body.addEventListener('keypress', e => {
    if(e.key === 'Enter'){
        arrowIcon.click()
    }
})