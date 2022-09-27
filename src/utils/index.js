// ----------------------------- create -----------------------------
export const login = async (username, password, setter, setLoggedIn, setter2, setAdmin, navigate, setter3) =>
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
            setter3(data.phone)
            setLoggedIn(true)
            console.log(data)
            console.log(`You logged in as Account: ${data.username}`)
            if(data.username === "Admin"){
                console.log(`You have logged in as an Admin`)
                setAdmin(true)
                await navigate("/profile")
                return data.token
            }
            else {
                setAdmin(false)
                await navigate("/profile")
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

export const signup = async (username, email, password, phone, setter, setLoggedIn, setter2, navigate) =>
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
            setter2(data.email)
            setter(data.username)
            navigate("/profile")
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

export const postCreate = async (title, price, make, model, type, drivechain, yearString, miles, colour, doors, location, wiz) => {
    const testObject = {
        user_id: 0,
        title: title,
        price: price,
        make: make,
        model: model,
        type: type,
        drivechain: drivechain,
        manufacture_year: yearString,
        miles: miles,
        colour: colour,
        num_doors: doors,
        location: location,
        text: wiz
    }
    console.log("post create utils/index.js; ", testObject)

    // const response = await fetch("http://localhost:5000/health")

    try {
        const response = await fetch("http://localhost:5000/posts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                "user_id": 0,
                "title": title,
                "price": price,
                "make": make,
                "model": model,
                "type": type,
                "drivechain": drivechain,
                "manufacture_year": yearString,
                "miles": miles,
                "colour": colour,
                "num_doors": doors,
                "location": location,
                "text": wiz
            })
        })
        console.log("post create response; ", response)
        const data = await response.json()
        console.log(data)
    }
    catch (error) {
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

export const listPosts = async (setter) => {
    try {
        const response = await fetch("http://localhost:5000/posts", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        return response.json()
    }
    catch (error) {
        console.log(error)
    }
}

// ----------------------------- update -----------------------------

export const updateName = async ( token, username, setUser ) => {
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
        setUser(data.username)
        console.log(data)

    } catch (error) {
        console.error(error)
    }

}

export const updateEmail = async ( token, email, setEmail ) => {
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
        setEmail(data.email)
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

export const updatePhone= async ( token, phone, setPhone ) => {
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
        setPhone(data.phone)
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