$(document).ready(() => {
    /**
     * Elements to validate.
     */
    const phoneNumber = $('#inputPhone');
    const creditCard = $('#cc-number');
    const creditCardName = $('#cc-name');
    const email = $('#inputEmail');
    const firstName = $('#inputFirst');
    const lastName = $('#inputLast');
    const service = $('#inputService');
    const expert = $('#inputExpert');
    const datePicker = $('#inputDate');

    var unavailableDates = ["06/29/2020","07/07/2020","07/10/2020"];
    const setDateFormat = "mm/dd/yy";

    function disableDates(date) {
        // Sunday is Day 0, disable all Sundays
        if (date.getDay() === 0 || date.getDay() === 6)
            return [false];
        var string = jQuery.datepicker.formatDate(setDateFormat, date);
        return [ unavailableDates.indexOf(string) === -1 ]
    }

    /**
     * Initalize datepicker.
     */
    datePicker.datepicker(
        {
            dateFormat: setDateFormat,
            // no calendar before June 1rst 2021
            minDate: new Date('07/01/2021'),
            maxDate: '+4M',
            // used to disable some dates
            beforeShowDay: $.datepicker.noWeekends,
            beforeShowDay: disableDates
        }
    );

    /**
     * Form feedback.
     */
    const submit = $('#submit');
    const confirmation = $('#confirmation');
    const modal = $('#exampleModal')


    /**
     * Event Listeners.
     */
    phoneNumber.on('change', () => {
        if (validatePhone(phoneNumber.val())) {
            $('#inputPhone-invalidfeedback').hide();
            $('#inputPhone-validfeedback').show();
        } else {
            $('#inputPhone-validfeedback').hide();
            $('#inputPhone-invalidfeedback').show();
        }
    });

    creditCard.on('change', () => {
        if (valdateCreditCard(creditCard.val())) {
            $('#cc-number-invalidfeedback').hide();
            $('#cc-number-validfeedback').show();
        } else {
            $('#cc-number-validfeedback').hide();
            $('#cc-number-invalidfeedback').show();
        }
    });

    email.on('change', () => {
        if (validateEmail(email.val())){
            $('#inputEmail-invalidfeedback').hide();
            $('#inputEmail-validfeedback').show();
        } else {
            $('#inputEmail-validfeedback').hide();
            $('#inputEmail-invalidfeedback').show();
        }
    });

    expert.on('change', () => {
        updateDatePicker(datePicker, expert);
    })

    submit.click(() => {

        // If all validity checks have passed
        if (true) {
            modal.modal('hide');
            confirmation.html(`<div class="container-lg"><h3 class="my-4"> Success! </h3> <p>Your appointment is booked on ${datePicker.val()}.</p></div>`);
            confirmation.removeAttr('hidden');

            setTimeout(() => {
                confirmation.hide();
            }, 7000)
        }
    })
});