$("#contactForm").validator().on("submit", function (event) {
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
        formError();
        submitMSG(false, "¿Has rellenado bien el formulario?");
    } else {
        // everything looks good!
        event.preventDefault();
        submitForm();
    }
});


function submitForm(){
    // Initiate Variables With Form Content
    var name = $("#name").val();
    var email = $("#email").val();
    var phone = $("#phone").val();
    var message = $("#message").val();
    var event = $('#event option:selected').text();

    if (email && email.match(/[^\s@]+@[^\s@]+\.[^\s@]+/gi)) {
        var data = {
            name: name,
            email: email.trim(),
            phone: phone.trim(),            
            message: message,
            event: event
        }

        $.ajax({
            type: "POST",
            url: "/api/sendemailhttp",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(data),
            success : function(text){                
                if (text == "success"){
                    formSuccess();
                } else {
                    formError();
                    submitMSG(false,text);
                }
            }
        });
    }    
}

function formSuccess(){
    $("#contactForm")[0].reset();
    submitMSG(true, "Mensaje enviado!")
}

function formError(){
    $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass();
    });
}

function submitMSG(valid, msg){
    if(valid){
        var msgClasses = "h3 text-center tada animated text-success";
    } else {
        var msgClasses = "h3 text-center text-danger";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}