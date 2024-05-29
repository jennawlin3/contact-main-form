const d = document;
const $input = d.querySelectorAll("input");
const error = d.querySelectorAll(".error");
const $data = d.querySelectorAll(".data");
const $submit = d.querySelector("#submit");
const $pop_up = d.querySelector("#pop-up");
const $form = d.querySelector("form");
const $optionOneContainer = d.querySelector(".one");
const $optionTwoContainer = d.querySelector(".two");
let validations = [];

$form.addEventListener("input", (e) => {
    
    if($input[0].value.length > 0) {
        error[0].classList.remove("show-error");
        $data[0].classList.remove("color");
    } else {
        error[0].classList.add("show-error");
        $data[0].classList.add("color");
    }
    
    if($input[1].value.length > 0) {
        error[1].classList.remove("show-error");
        $data[1].classList.remove("color");
    } else {
        error[1].classList.add("show-error");
        $data[1].classList.add("color");
    }
    
    if($input[2].value.length > 0) {
        error[2].classList.remove("show-error");
        $data[2].classList.remove("color");
    } else {
        error[2].classList.add("show-error");
        $data[2].classList.add("color");
    }
    
    if($input[3].checked || $input[4].checked) {
        error[3].classList.remove("show-error");
        $data[3].classList.remove("color");
        error[4].classList.remove("show-error");
        $data[4].classList.remove("color");

        if($input[3].checked) {
            $optionOneContainer.classList.add("option-bg");
            $optionTwoContainer.classList.remove("option-bg");
        } else {
            $optionOneContainer.classList.remove("option-bg");
            $optionTwoContainer.classList.add("option-bg");
        }
    } else {
        error[3].classList.add("show-error");
        $data[3].classList.add("color");
        error[4].classList.add("show-error");
        $data[4].classList.add("color");
    }

    if($data[5].value.length > 0) {
        console.log($data[5].value);
        error[4].classList.remove("show-error");
        $data[5].classList.remove("color");
    } else {
        error[4].classList.add("show-error");
        $data[5].classList.add("color");
    }

    if($data[6].checked) {
        console.log("hola")
        error[5].classList.remove("show-error");
    } else {
        error[5].classList.add("show-error");
        $data[6].classList.add("color");
    }
});

$form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    for(inp of $input) {
        if(inp.value === "") {        
            $input.forEach((input) => {
                error.forEach((er) => er.classList.add("show-error"));
                $data.forEach((el) => el.classList.add("color"));
                })
                break;
        } if(inp.value !== "") {
            setTimeout(() => {
                $pop_up.classList.add("show");
            }, 0);

            setTimeout(() => {
                $pop_up.classList.remove("show");
            }, 3000);
            form.reset();
            $optionOneContainer.classList.remove("option-bg");
            $optionTwoContainer.classList.remove("option-bg");
        }
    } 
    
});