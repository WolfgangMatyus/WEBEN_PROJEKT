
function sendRegistration() {

    $(".submit").click(function(event) {
        sendRegistrationData();
    });

}

function sendRegistrationData(){

    var form = $('#registrationForm');
    var isValid = form[0].checkValidity();

    if (!isValid) {
        form.addClass('was-validated');
        return;
    }

    var data = {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        email: $('#email').val(),
        password: $('#password').val()
    };

    $.ajax({
        url: "/api/v1/auth/register",
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify(data),
        success: function(response){
            console.log(response.token);
            window.localStorage.setItem("token", response.token);
            window.location.href = "/";
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error(textStatus, errorThrown);
            // Hier kommt die Logik hin, die im Falle eines Fehlers ausgeführt werden soll
        }
    });
}




