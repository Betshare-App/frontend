const validators = {
    ValidateDateOfBirth: (date_of_birth) => {
        console.log(date_of_birth)
        const birth_year = Number(date_of_birth.split('-')[0])
        const birth_month = Number(date_of_birth.split('-')[1])
        const birth_day = Number(date_of_birth.split('-')[2])
        const now =  Date.now()
        const currentDate = new Date(now)
        const currentYear = Number(currentDate.getFullYear())
        const currentMonth = Number(currentDate.getMonth()) + 1
        const currentDay = Number(currentDate.getDate())

        if((currentYear - birth_year) < 18){   
            return false
        }else if(currentYear - birth_year === 18){
            if(currentMonth < birth_month){
                return false
            }else if(currentMonth === birth_month){
                if(currentDay < birth_day){
                    return false
                }else{
                    return true
                }
            }else{
                return true
            }
        }else{
            return true
        }
    },
    
    NotIsNull: (object) => {
        Object.values(object).forEach((item) => { 
            if(item === ''){
                return false
            }
        })
        return true
    },

    ValidateCPF: (cpf) => {
        const regex_cpf_cnpj = /(^[0-9]{14})$|^([0-9]{11})$/
        const validator_cpf = regex_cpf_cnpj.test(cpf)
        if(!validator_cpf){
            return false
        }
        return true
    },

    ValidatePhone: (phone) => {
        const regex_phone = /^[0-9]{11}$/
        const validator_phone = regex_phone.test(phone)
        if(!validator_phone){
            return false
        }
        return true
    },

    ValidatePostalCode: (postalcode) => {
        const regex_postal_code = /^[0-9]{8}$/
        const validator_postal_code = regex_postal_code.test(postalcode)
        if(!validator_postal_code){
            return false
        }
        return true
    }
}

export default validators