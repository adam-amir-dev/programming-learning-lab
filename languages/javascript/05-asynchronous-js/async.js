async function getDog(){

    try {

        // 1. Fetch API
        const response = await fetch("https://dog.ceo/api/breeds/image/rando");


        // 2. Check response.ok
        if(!response.ok){
            throw new Error("Invalid URLS")
        }

        // 3. Convert response to JSON
        const data = await response.json()
        const dogImage = data.message

        // 4. Extract dogImage
        console.log(response.ok)
        console.log(dogImage)

        // 5. Log dogImage

    } 
    catch(error) {

        // Handle error here
         console.log(error)

    }

}

getDog();