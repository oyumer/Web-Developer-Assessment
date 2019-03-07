function userNameValidation() {
    const userName = document.forms["myForm"]["inputUserName"].value;

    if (userName.length < 4) {
        alert("User name must be minimum 4 letters and maximum 12")
        return false;
    }
    else if (userName.length > 12) {
        alert("User name must be minimum 4 letters and maximum 12")
        return false;
    }
}
function passwordValidation() {
    const password = document.forms["myForm"]["InputPassword"].value;

    if (password.search(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,12}$/) == -1) {
        alert("Password must contain minimum six characters(maximum 12), at least one uppercase letter, one lowercase letter, one number and one special character:")
        return false;
    }
}
function confirmPasswordValidation() {
    const confirmPassword = document.forms["myForm"]["InputConfirmPassword"].value;

    if (password !== confirmPassword) {
        alert("Password must match")
        return false;
    }
}

function redirectToCasino() {
    location.replace("https://www.casino.com")
}
function redirectToGames() {
    location.replace("http://www.casino.com/casino-games/")
}
function redirectToPromotions() {
    location.replace("http://www.casino.com/promotions/")
}

function myFunction() {
    var checkBox = document.getElementById("exampleCheck2");
    var text = document.getElementById("InputBonusCode");
    if (checkBox.checked == true) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}

// caroufredsel 
jQuery(document).ready(function () {

    $('#slider-carousel').carouFredSel({
        responsive: true,
        width: '100%',
        circular: true,
        scroll: {
            items: 1,
            duration: 500,
            pauseOnHover: true
        },
        auto: true,
        items:
        {
            visible: {
                min: 1,
                max: 1
            },
            height: "variable"
        },
        pagination: {
            container: ".sliderpager",
            pageAnchorBuilder: false
        }
    });
})
