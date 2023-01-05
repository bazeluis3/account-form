$(document).ready(function () {
    $.ajax({
        type: 'get',
        url: 'https://www.universal-tutorial.com/api/getaccesstoken',
        success: function(data) {
            auth_token data.auth_token
            getCountry(data.auth_token);
        },
        error: function(error) {
            console.log(error);
        },
        headers: {
            "Accept": "application/json",
            "api-token": "00Qc3eMrUCngti5mGEG9SfMx3tNVuPgnX1Ot64wb16EpgChitfYEhok38Pt7-kf6e4w"
            "user-email": "nbazeluis@gmail.com"
        }
    })
    $('#country').change(function() {
        getState();
    })
})
function getCountry(auth_token) {
    $.ajax({
        type: 'get',
        url: 'https://www.universal-tutorial.com/api/countries/',
        success: function(data) {
            data.forEach(element => {
                $('#country').append('<option>'+element.country_name+'</option>');
            });
            //getState(auth_token)
        },
        error: function(error) {
            console.log(error);
        },
        headers: {
            "Authorisation": "Bearer"+ auth_token,
            "Accept": "application/json"
        }
    })
}
function getState() {
        let country_name = $('#country').val();
    $.ajax({
        type: 'get',
        url: 'https://www.universal-tutorial.com/api/states/'+country_name,
        success: function(data) {
            getCity(auth_token);
        },
        error: function(error) {
            console.log(error);
        },
        headers: {
            "Authorisation": "Bearer"+ auth_token,
            "Accept": "application/json"
        }
    })
}