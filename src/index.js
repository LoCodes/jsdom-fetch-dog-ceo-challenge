console.log('%c HI', 'color: firebrick')

// CHALLENGE #1 

// const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 

const container = document.querySelector("#dog-image-container")
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"



// - on page load, fetches the images using the url above ⬆️
// - parses the response as `JSON`
// - adds image elements to the DOM **for each** 🤔 image in the array

function getImages(){
    fetch(imgUrl)
    .then(resp => resp.json())  //turn into json 
    .then(images => {  
    const imgs = images.message
    // **take this array of images 
    // **turn it into img element 


    let imgsArray = createImgElement(imgs)
    renderImgs(imgsArray)
    // let imgsArray = imgs.map((img) => {
    //     let i = `<img src=${img}> `
    //     return i
    })

}



    // console.log(imgsArray)  ---> to check if we grabbed the array in console 

    // **append each img element to the DOM 

    // imgsArray.forEach(element => {
    //     container.innerHTML += element
    // })


    function createImgElement(imgs){
        return imgs.map((img) => {
            let i = `<img src=${img}> `
            return i
        })
        
    }

    function renderImgs(imgsArray){
        imgsArray.forEach(element => {
            // container.innerHTML += element
            renderElement(element)
        });
    }

    // MOVED to a function so we can REUSE later (add img)
    function renderElement(element){
        ulContainer.innerHTML += element 
    }

  


    
// CHALLENGE #2 
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const ulContainer = document.querySelector("#dog-breeds")

let breedsArray;  // made it accessible turned it into global 



function getBreeds(){
    fetch(breedUrl)
    .then(resp => resp.json())  //turn into json 
    .then(breeds => {
        breedsArray = Object.keys(breeds.message)  
        const breedsLis = createLiElement(breedsArray)
        renderLis(breedsLis)
       
    // const imgs = images.message
    // let imgsArray = createImgElement(imgs)
    // renderImgs(imgsArray)
    
    })

}

function createLiElement(breedsArray){
    return breedsArray.map((breed) => {
        let li = `<li> ${breed} </li> `
        return li
    })
    
}

function renderLis(breedsLis){
    breedsLis.forEach(element => {
        renderElement(element)
    })
}

// CHALLENGE #3 
ulContainer.addEventListener('click', (handleClick))


//added conditional to toggle back and forth 

function handleClick(event){
    if (event.target.nodeName === 'LI'){   // conditional for SPECIFIC li ONLY. Does not change color on highlights
        if (event.target.style.color === 'red'){
            event.target.style.color = 'black'
        } else {
            event.target.style.color = 'red'
        }  
    }
      
}

// CHALLENGE #4 

const dropdown = document.querySelector("#breed-dropdown")  //drop down value 

dropdown.addEventListener('change', handleChange)

function handleChange(event){
    const letter = event.target.value 
    // filter out the breeds that start with the letter 

    const filteredBreeds = breedsArray.filter(breed => breed.startsWith(letter))
    const filteredBreedsLi = createLiElement(filteredBreeds)
    ulContainer.innerHTML = ''  //clear it out first before rendering

    renderLis(filteredBreedsLi)
}



getImages()
getBreeds()