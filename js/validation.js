// grab elements
const form = document.querySelector(".form-group")
const emailAddress = document.querySelector(".email")
const errorIcon = document.querySelector(".error-icon")
const errorMsg = document.querySelector(".error-msg")


// add event when submit form and trigger function for validating email
form.addEventListener("submit", (e) => {
    e.preventDefault()
    let emailFormat = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/
    if (emailAddress.value.match(emailFormat)) {
        errorMsg.style.opacity = "0"
        errorIcon.style.opacity = "0"
        emailAddress.value = ""
    } else {
        errorMsg.style.opacity = "1"
        errorIcon.style.opacity = "1"
    }
})

form.addEventListener("keyup", () => {
    if (emailAddress.value === "") {
        errorMsg.style.opacity = "0"
        errorIcon.style.opacity = "0"
    }
})

