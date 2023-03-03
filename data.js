const btn= document.querySelector(".btn");
const advId= document.querySelector(".advice-tag");
const quote = document.querySelector(".blockquote")


function getData() {

    URL="https://api.adviceslip.com/advice";
    fetch(URL).then(response => response.json()
    ).then(advData => {
        const advObj= advData.slip;
        const id=advData.slip.id;
        advId.innerHTML= `ADVICE #${id}`
        quote.innerHTML= `${advObj.advice}`
    }
    )
}

btn.addEventListener('click', () => {
    getData();
})