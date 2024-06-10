$(document).ready(function() {
    $('#feedbackForm').submit(function(event) {
        event.preventDefault();

        let isValid = true;

        const fields = [
            { id: '#secondName', errorId: '#secondNameError', errorMessage: 'Введите фамилию' },
            { id: '#firstName', errorId: '#firstNameError', errorMessage: 'Введите имя' },
            { id: '#surname', errorId: '#surnameError', errorMessage: 'Введите отчество' },
            { id: '#email', errorId: '#emailError', errorMessage: 'Введите действительный email', validate: isValidEmail },
            { id: '#phone', errorId: '#phoneError', errorMessage: 'Введите действительный телефон', validate: isValidPhone }
        ];

        fields.forEach(field => {
            const value = $(field.id).val().trim();
            const valid = field.validate ? field.validate(value) : value !== '';
            updateFieldState(field.id, field.errorId, valid, field.errorMessage);
            if (!valid) isValid = false;
        });

        if (isValid) {
            $.ajax({
                url: './feedback.php',
                method: 'POST',
                data: {
                    secondName: $('#secondName').val(),
                    firstName: $('#firstName').val(),
                    surname: $('#surname').val(),
                    email: $('#email').val(),
                    phone: $('#phone').val()
                },
                success: function(response) {
                    Swal.fire({
                        title: "Успех!",
                        text: "Данные успешно отправлены!",
                        icon: "success"
                    }).then(() => {
                        $('#feedbackForm')[0].reset();
                        clearFieldStates(fields);
                    });
                },
                error: function(xhr, status, error) {
                    Swal.fire({
                        title: "Ошибка",
                        text: "Произошла ошибка при отправке данных. Попробуйте еще раз.",
                        icon: "error"
                    });
                }
            });
        }
    });

    function updateFieldState(fieldId, errorId, isValid, errorMessage) {
        if (!isValid) {
            $(fieldId).addClass('error');
            $(errorId).addClass('error-msg');
        } else {
            $(fieldId).removeClass('error');
            $(errorId).removeClass('error-msg');
        }
    }

    function clearFieldStates(fields) {
        fields.forEach(field => {
            $(field.id).removeClass('error');
            $(field.errorId).removeClass('error-msg');
        });
    }

    function isValidEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    function isValidPhone(phone) {
        const phonePattern = /^(\+7|8)\s?\(?\d{3}\)?\s?\d{3}[-\s]?\d{2}[-\s]?\d{2}$/;
        return phonePattern.test(phone);
    }
});