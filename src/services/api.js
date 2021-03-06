import { URL, 
    endpoint_games, 
    endpoint_send_request, 
    endpoint_cart,
    endpoint_quote_manager,
    endpoint_bet,
    endpoint_get_token,
    endpoint_refresh_token,
    endpoint_register,
    endpoint_credIsValid,
    endpoint_get_balance,
    endpoint_register_personal_info,
    endpoint_register_address_info} from "../constants/globals"

export const service = {
    getGames: async (access_token) =>{
        const data = await fetch(URL+endpoint_games, {
            headers: {
                'Authorization': `Bearer ${access_token}`,
                'Content-Type': 'application/json'
            }
        }).then((response) => response)
        return data
    },

    sendRequest: async (option, quotes, selecteds, access_token) => {
        const data = JSON.stringify({
                                "option": option, 
                                "quotes": quotes,
                                "suggested_numbers": selecteds})

        const request = await fetch(URL+endpoint_send_request,{
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${access_token}`,
                'Content-Type': 'application/json'
            },
            body: data
        }).then(response => response.data)
        return request
    },

    getCart: async (access_token) =>{
        const response = await fetch(URL+endpoint_cart, {
            headers: {
                'Authorization': `Bearer ${access_token}`,
                'Content-Type': 'application/json'
            }
        }).then((response) => response)
        const data = await response
        return data
    },

    deleteRequest: async (id, access_token) =>{
        const data = await fetch(URL+endpoint_cart+`${id}/`, {
            method: 'delete',
            headers: {
                'Authorization': `Bearer ${access_token}`,
            }
        }).then(result => result)
        return data.status
    },

    getLengthCart: async (access_token) => {
        const data = await fetch(URL+endpoint_cart+'length/',{
            headers: {
                'Authorization': `Bearer ${access_token}`,
            }
        }).then(result => result.json())
        return data
    },

    setPayment: async (access_token) => {
        const request = await fetch(URL+endpoint_cart,{
            method: 'post',
            headers: {
                'Authorization': `Bearer ${access_token}`,
            }
        }).then(result => result)
        return request.status
    },

    getQuoteManager: async (access_token) => {
        let tickets = []
        const response = await fetch(URL+endpoint_quote_manager, {
            headers: {
                'Authorization': `Bearer ${access_token}`,
                'Content-Type': 'application/json'
            }
        })
        .then((response) => response)
        if(response.status === 401){
            service.logout()
        }else{ 
            const data = await response.json()
            if (data.length > 0) {
                let isUnique
                tickets = data.reduce((ticketArr, ticketCurr) => {
                    isUnique = true
                    for(let i = 0; i < ticketArr.length; i++){
                        //verifica se h?? mais de uma requisi????o para o mesmo ticket
                        //se houver, concatena as requisi????es em um ??nico ticket
                        if(ticketCurr['ticket']['id'] === ticketArr[i]['ticket']['id']){
                            //converte a requisi????o em uma lista de requisi????es
                            if(!Array.isArray(ticketArr[i]['request'])){
                                let req = ticketArr[i]['request']
                                ticketArr[i]['request'] = []
                                ticketArr[i]['request'].push(req)
                            }
                            ticketArr[i]['request'].push(ticketCurr['request'])
                            ticketArr[i]['quotes'] += ticketCurr['quotes']
                            isUnique = false
                        }
                    }
                    //insere no array o ticket se ele for ??nico
                    if(isUnique) ticketArr.push(ticketCurr)
                    return ticketArr
                }, [])
            }
        }
        return tickets
    },

    getBet: async (ticket_id, access_token) => {
        const response = await fetch(URL+endpoint_bet+`${ticket_id}/`, {
            headers: {
                'Authorization': `Bearer ${access_token}`,
                'Content-Type': 'application/json'
            }
        }).then((response) => response)
        if(response.status === 401){
            service.logout()
        }else{
            const data = await response.json()
            return data
        }
    },

    setToken: (access, refresh) => {
        localStorage.setItem('access_betshare', access)
        localStorage.setItem('refresh_betshare', refresh)
    },

    Login: async (username, password) => {
        const user = JSON.stringify({
            'username': username, 
            'password': password})

        const response = await fetch(URL+endpoint_get_token, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: user
        }).then((response) => response)
    
        if(response.status === 200){
            const data = await response.json()
            service.setToken(data['access'], data['refresh'])
            return response.status
        }else{
            return response.status
        }
    },

    refreshToken: async () => {
        const token_refresh = localStorage.getItem('refresh_betshare') ?  
        JSON.stringify({
            'refresh': localStorage.getItem('refresh_betshare')
        }) :  null
        if(token_refresh){
            const response = await fetch(URL+endpoint_refresh_token, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: token_refresh
            }).then((response) => response)

            if(response.status === 200){
                const data = await response.json()
                service.setToken(data['access'], data['refresh'])
            }

            return response.status
        }
    },

    logout: async () => {
        localStorage.removeItem('access_betshare')
        localStorage.removeItem('refresh_betshare')
    },

    register: async (username, password, email) => {
        const data = JSON.stringify({
            'username': username,
            'password': password,
            'email': email
        })
        const response =  await fetch(URL+endpoint_register, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: data
        }).then((response) => response.status)
        return response
    },

    credentialsIsValid: async (username, email) => {
        const data = JSON.stringify({
            'username': username,
            'email': email
        })
        const response = await fetch(URL+endpoint_credIsValid, {
            method: 'PUT',
            headers: {
                'Content-Type':'application/json'
            },
            body: data
        }).then((response) => response.json())
        const username_isvalid = await response['username_isvalid']
        const email_isvalid = await response['email_isvalid']
        return {username_isvalid, email_isvalid}
    },

}