export const login = async (username, password, setter) =>
{
    try
    {
        const response = await fetch("http://localhost:5000/user/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                "email": username,
                "password": password
            })

        })
        const data = await response.json()
        console.log(data)
        setter(data.username)
    }
    catch (error)
    {
        console.log(error)
    }
}

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