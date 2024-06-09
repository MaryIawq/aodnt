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

        if (!isValid) {
            createErrorMessages(fields);
        }

        if (isValid) {
            Swal.fire({
                title: "Успех!",
                text: "Данные успешно отправлены!",
                icon: "success"
            }).then(() => {
                $('#feedbackForm')[0].reset();
            });
        }
    });

    function updateFieldState(fieldId, errorId, isValid, errorMessage) {
        if (!isValid) {
            $(fieldId).addClass('error');
            $(errorId).text(errorMessage).show();
        } else {
            $(fieldId).removeClass('error');
            $(errorId).hide();
        }
    }

    function createErrorMessages(fields) {
        fields.forEach(field => {
            if (!isValidField(field.id)) {
                $('<span>', {
                    id: field.errorId.substring(1),
                    class: 'error-msg',
                    text: field.errorMessage
                }).insertAfter(field.id);
            }
        });
    }

    function isValidField(fieldId) {
        return !$(fieldId).hasClass('error');
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
