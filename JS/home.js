// const input = document.getElementById("input").value;

const cities = ["faisalabad", "lahore", "karachi", "pindi", "pashwar", "sialkot"];
const Insert = () => {
    const inputval = document.getElementById("input").value;
    // console.log(inputval)
    if (inputval < 3) {
        Toastify({
            text: "Please Enter valid city name",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function () { } // Callback after click
        }).showToast();
        return
    }
    const inputValLowerCase = inputval.toLowerCase();
    let isExits = false;
    for (let index = 0; index < cities.length; index++) {
        if (cities[index] === inputValLowerCase) {
            Toastify({
                text: "City name is Already Exits",
                duration: 3000,
                newWindow: true,
                close: true,
                gravity: "bottom", // `top` or `bottom`
                position: "left", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                    background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
                onClick: function () { } // Callback after click
            }).showToast();
            isExits = true
        }
    }
    if (isExits === false) {
        cities.push(inputValLowerCase)
        Toastify({
            text: "City name is Successfully Added",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function () { } // Callback after click
        }).showToast();

    }
}

const Show = () => {
    // let text = "";
    document.getElementById("output").innerHTML = ""
    let num;
    for (let index = 0; index < cities.length; index++) {
        num = index + 1;
        document.getElementById("output").innerHTML += num + ") &ensp;" + cities[index] + "<br />";
    }
}


