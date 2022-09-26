// ----------------------------- create -----------------------------
export const login = async (username, password, setter, setLoggedIn, setter2, setAdmin) =>
{
    console.log(username)
    try
    {
        const response = await fetch("http://localhost:5000/user/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                "username": username,
                "password": password
            })

        })
        const data = await response.json()
        if(data.username && data.token){
            setter(data.username)
            setter2(data.email)
            setLoggedIn(true)
            console.log(data)
            console.log(`You logged in as Account: ${data.username}`)
            if(data.username === "Admin"){
                console.log(`You have logged in as an Admin`)
                setAdmin(true)
                return data.token
            }
            else {
                setAdmin(false)
                return data.token
            }
        } else {
            console.log(data)
            console.log(`Account: ${data.username} cannot be found`)
            setLoggedIn(false)
        }
       
    }
    catch (error)
    {
        console.log(error)
    }
}

export const signup = async (username, email, password, phone, setter, setLoggedIn) =>
{
    try
    {
        const response = await fetch("http://localhost:5000/user/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                "username": username,
                "email": email,
                "password": password,
                "phone": phone
            })
        })
        const data = await response.json()
        if(data.username){
            console.log(`You logged in as Account: ${data.username}`)
            setLoggedIn(true)
            setter(data.username)
            return data.token
        } else {
            console.log(`Account Already exists!`)
            setLoggedIn(false)
        }
    }
    catch (error)
    {
        console.log(error)
    }
}



// ----------------------------- read -----------------------------

export const listUsers = async (setter) =>
{
    try
    {
        const response = await fetch("http://localhost:5000/user", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        return response.json()
    }
    catch (error) 
    {

    }
}

// ----------------------------- update -----------------------------

export const updateName = async ( token, username ) => {
    try {
        const response = await fetch(`http://localhost:5000/user/editname/`, {
            method:"PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}` 
            },
            body: JSON.stringify({
                "username": username
            })
        })
        const data = await response.json()
        console.log(data)

    } catch (error) {
        console.error(error)
    }

}

export const updateEmail = async ( token, email ) => {
    try {
        const response = await fetch(`http://localhost:5000/user/editemail/`, {
            method:"PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}` 
            },
            body: JSON.stringify({
                "email": email
            })
        })
        const data = await response.json()
        console.log(data)

    } catch (error) {
        console.error(error)
    }

}

export const updatePassword = async ( token, password ) => {
    try {
        const response = await fetch(`http://localhost:5000/user/editpassword/`, {
            method:"PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}` 
            },
            body: JSON.stringify({
                "password": password
            })
        })
        const data = await response.json()
        console.log(`Your password has been updated: ${password}`)
        console.log(data)

    } catch (error) {
        console.error(error)
    }

}

export const updatePhone= async ( token, phone ) => {
    try {
        const response = await fetch(`http://localhost:5000/user/editphone/`, {
            method:"PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}` 
            },
            body: JSON.stringify({
                "phone": phone
            })
        })
        const data = await response.json()
        console.log(`Your has been updated: ${phone}`)
        console.log(data)

    } catch (error) {
        console.error(error)
    }

}
// ----------------------------- delete -----------------------------
export const deleteUser = async ( token ) => {
    try {
        const response = await fetch(`http://localhost:5000/user`, {
            method:"DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}` 
            }
        })
        const data = await response.json()
        console.log(data)
        console.log("Account Deleted")
    } catch (error) {
        console.error(error)
    }
}