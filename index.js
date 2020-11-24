const username = process.argv[2];
const password = process.argv[3];
const date = process.argv[3]; // in my recording it was 74367

const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    const navigationPromise = page.waitForNavigation()

    await navigationPromise

    await page.goto('https://condocontrolcentral.com/login?NextPage=%2famenity%2fbookings%2f')

    await page.setViewport({ width: 1191, height: 675 })

    await page.waitForSelector('#loginbox > #loginform #Username')
    await page.click('#loginbox > #loginform #Username')

    await page.type('#loginbox > #loginform #Username', username)

    await page.waitForSelector('#loginbox > #loginform #Password')
    await page.click('#loginbox > #loginform #Password')

    await page.type('#loginbox > #loginform #Password', password)

    await page.waitForSelector('#loginbox > #loginform > .row:nth-child(4) > .form-group > .btn')
    await page.click('#loginbox > #loginform > .row:nth-child(4) > .form-group > .btn')

    await navigationPromise

    await page.waitForSelector('.row #lnkNewBooking')
    await page.click('.row #lnkNewBooking')

    await page.waitForSelector('.well > #bookingDetailsForm #SelectedAmenityGroup')
    await page.click('.well > #bookingDetailsForm #SelectedAmenityGroup')

    await page.select('.well > #bookingDetailsForm #SelectedAmenityGroup', '3941')

    await page.waitForSelector('.well > #bookingDetailsForm #btnCheckAvailability')
    await page.click('.well > #bookingDetailsForm #btnCheckAvailability')

    await page.waitForSelector('#bookingDetailsForm > #timeslotBookingOption > #timeSlotDate #TimeSlotDateOption')
    await page.click('#bookingDetailsForm > #timeslotBookingOption > #timeSlotDate #TimeSlotDateOption')

    await page.waitForSelector('.ui-datepicker-calendar > tbody > tr > td > .ui-state-hover')
    await page.click('.ui-datepicker-calendar > tbody > tr > td > .ui-state-hover')

    await page.waitForSelector('.well > #bookingDetailsForm #btnCheckAvailability')
    await page.click('.well > #bookingDetailsForm #btnCheckAvailability')

    await page.waitForSelector('#bookingDetailsForm > #timeslotBookingOption > #timeSlotDate #TimeSlotDateOption')
    await page.click('#bookingDetailsForm > #timeslotBookingOption > #timeSlotDate #TimeSlotDateOption')

    await page.waitForSelector('.ui-datepicker-calendar > tbody > tr > td > .ui-state-hover')
    await page.click('.ui-datepicker-calendar > tbody > tr > td > .ui-state-hover')

    await page.waitForSelector('.well > #bookingDetailsForm #btnCheckAvailability')
    await page.click('.well > #bookingDetailsForm #btnCheckAvailability')

    await page.waitForSelector('#bookingDetailsForm > #timeslotBookingOption > #timeSlotDate #TimeSlotDateOption')
    await page.click('#bookingDetailsForm > #timeslotBookingOption > #timeSlotDate #TimeSlotDateOption')

    await page.waitForSelector('.ui-datepicker-calendar > tbody > tr > td > .ui-state-hover')
    await page.click('.ui-datepicker-calendar > tbody > tr > td > .ui-state-hover')

    await page.waitForSelector('.well > #bookingDetailsForm #btnCheckAvailability')
    await page.click('.well > #bookingDetailsForm #btnCheckAvailability')

    await page.waitForSelector('.form-group #amenity3941')
    await page.click('.form-group #amenity3941')

    await page.waitForSelector('.ui-dialog > .ui-dialog-buttonpane > .ui-dialog-buttonset > .ui-button > .ui-button-text')
    await page.click('.ui-dialog > .ui-dialog-buttonpane > .ui-dialog-buttonset > .ui-button > .ui-button-text')

    await page.waitForSelector('.well > #bookingDetailsForm #timeSlotDropdown')
    await page.click('.well > #bookingDetailsForm #timeSlotDropdown')

    await page.select('.well > #bookingDetailsForm #timeSlotDropdown', date)

    await page.waitForSelector('.ui-dialog > .ui-dialog-buttonpane > .ui-dialog-buttonset > .ui-button > .ui-button-text')
    await page.click('.ui-dialog > .ui-dialog-buttonpane > .ui-dialog-buttonset > .ui-button > .ui-button-text')

    await page.waitForSelector('#bookingDetailsForm #SendReminder')
    await page.click('#bookingDetailsForm #SendReminder')

    await page.waitForSelector('.col-lg-8 #btnConfirmDetailsNext')
    await page.click('.col-lg-8 #btnConfirmDetailsNext')

    await page.waitForSelector('.col-lg-8 #btnTCSimpleAgree')
    await page.click('.col-lg-8 #btnTCSimpleAgree')

    await page.waitForSelector('.col-lg-8 #btnFinalize')
    await page.click('.col-lg-8 #btnFinalize')

    await navigationPromise

    await page.waitForSelector('.view_page_div > .table-responsive > .table > tbody > tr:nth-child(1) > td:nth-child(2)')
    await page.click('.view_page_div > .table-responsive > .table > tbody > tr:nth-child(1) > td:nth-child(2)')

    await page.waitForSelector('.view_page_div > .table-responsive > .table > tbody > tr:nth-child(1) > td:nth-child(2)')
    await page.click('.view_page_div > .table-responsive > .table > tbody > tr:nth-child(1) > td:nth-child(2)')

    await page.waitForSelector('.view_page_div > .table-responsive > .table > tbody > tr:nth-child(1) > td:nth-child(2)')
    await page.click('.view_page_div > .table-responsive > .table > tbody > tr:nth-child(1) > td:nth-child(2)')

    await page.waitForSelector('.table-responsive:nth-child(1) > .table > tbody > tr:nth-child(2) > td:nth-child(2)')
    await page.click('.table-responsive:nth-child(1) > .table > tbody > tr:nth-child(2) > td:nth-child(2)')

    await page.waitForSelector('.table-responsive:nth-child(1) > .table > tbody > tr:nth-child(2) > td:nth-child(2)')
    await page.click('.table-responsive:nth-child(1) > .table > tbody > tr:nth-child(2) > td:nth-child(2)')

    await page.waitForSelector('.table-responsive:nth-child(1) > .table > tbody > tr:nth-child(2) > td:nth-child(2)')
    await page.click('.table-responsive:nth-child(1) > .table > tbody > tr:nth-child(2) > td:nth-child(2)')

    await page.waitForSelector('.table-responsive:nth-child(1) > .table > tbody > tr:nth-child(3) > td:nth-child(2)')
    await page.click('.table-responsive:nth-child(1) > .table > tbody > tr:nth-child(3) > td:nth-child(2)')

    await page.waitForSelector('.table-responsive:nth-child(1) > .table > tbody > tr:nth-child(3) > td:nth-child(2)')
    await page.click('.table-responsive:nth-child(1) > .table > tbody > tr:nth-child(3) > td:nth-child(2)')

    await page.waitForSelector('.table-responsive:nth-child(1) > .table > tbody > tr:nth-child(3) > td:nth-child(2)')
    await page.click('.table-responsive:nth-child(1) > .table > tbody > tr:nth-child(3) > td:nth-child(2)')

    await page.waitForSelector('.table-responsive:nth-child(1) > .table > tbody > tr:nth-child(4) > td:nth-child(2)')
    await page.click('.table-responsive:nth-child(1) > .table > tbody > tr:nth-child(4) > td:nth-child(2)')

    await page.waitForSelector('.table-responsive:nth-child(1) > .table > tbody > tr:nth-child(4) > td:nth-child(2)')
    await page.click('.table-responsive:nth-child(1) > .table > tbody > tr:nth-child(4) > td:nth-child(2)')

    await page.waitForSelector('.table-responsive:nth-child(1) > .table > tbody > tr:nth-child(4) > td:nth-child(2)')
    await page.click('.table-responsive:nth-child(1) > .table > tbody > tr:nth-child(4) > td:nth-child(2)')

    await page.waitForSelector('.table-responsive:nth-child(1) > .table > tbody > tr:nth-child(5) > td:nth-child(2)')
    await page.click('.table-responsive:nth-child(1) > .table > tbody > tr:nth-child(5) > td:nth-child(2)')

    await page.waitForSelector('.table-responsive:nth-child(1) > .table > tbody > tr:nth-child(5) > td:nth-child(2)')
    await page.click('.table-responsive:nth-child(1) > .table > tbody > tr:nth-child(5) > td:nth-child(2)')

    await page.waitForSelector('.table-responsive:nth-child(1) > .table > tbody > tr:nth-child(5) > td:nth-child(2)')
    await page.click('.table-responsive:nth-child(1) > .table > tbody > tr:nth-child(5) > td:nth-child(2)')

    await page.waitForSelector('.table-responsive > .table > tbody > tr:nth-child(6) > td:nth-child(2)')
    await page.click('.table-responsive > .table > tbody > tr:nth-child(6) > td:nth-child(2)')

    await page.waitForSelector('.table-responsive > .table > tbody > tr:nth-child(6) > td:nth-child(2)')
    await page.click('.table-responsive > .table > tbody > tr:nth-child(6) > td:nth-child(2)')

    await page.waitForSelector('.table-responsive > .table > tbody > tr:nth-child(6) > td:nth-child(2)')
    await page.click('.table-responsive > .table > tbody > tr:nth-child(6) > td:nth-child(2)')

    await page.waitForSelector('.table-responsive > .table > tbody > tr:nth-child(7) > td:nth-child(2)')
    await page.click('.table-responsive > .table > tbody > tr:nth-child(7) > td:nth-child(2)')

    await page.waitForSelector('.table-responsive > .table > tbody > tr:nth-child(7) > td:nth-child(2)')
    await page.click('.table-responsive > .table > tbody > tr:nth-child(7) > td:nth-child(2)')

    await page.waitForSelector('.table-responsive > .table > tbody > tr:nth-child(7) > td:nth-child(2)')
    await page.click('.table-responsive > .table > tbody > tr:nth-child(7) > td:nth-child(2)')

    await page.waitForSelector('.table-responsive > .table > tbody > tr:nth-child(8) > td:nth-child(2)')
    await page.click('.table-responsive > .table > tbody > tr:nth-child(8) > td:nth-child(2)')

    await page.waitForSelector('.table-responsive > .table > tbody > tr:nth-child(8) > td:nth-child(2)')
    await page.click('.table-responsive > .table > tbody > tr:nth-child(8) > td:nth-child(2)')

    await page.waitForSelector('.table-responsive > .table > tbody > tr:nth-child(8) > td:nth-child(2)')
    await page.click('.table-responsive > .table > tbody > tr:nth-child(8) > td:nth-child(2)')

    await page.waitForSelector('.table-responsive > .table > tbody > tr:nth-child(9) > td:nth-child(2)')
    await page.click('.table-responsive > .table > tbody > tr:nth-child(9) > td:nth-child(2)')

    await page.waitForSelector('.table-responsive > .table > tbody > tr:nth-child(9) > td:nth-child(2)')
    await page.click('.table-responsive > .table > tbody > tr:nth-child(9) > td:nth-child(2)')

    await page.waitForSelector('.table-responsive > .table > tbody > tr:nth-child(9) > td:nth-child(2)')
    await page.click('.table-responsive > .table > tbody > tr:nth-child(9) > td:nth-child(2)')

    await page.waitForSelector('.table-responsive > .table > tbody > tr:nth-child(10) > td:nth-child(2)')
    await page.click('.table-responsive > .table > tbody > tr:nth-child(10) > td:nth-child(2)')

    await page.waitForSelector('.table-responsive > .table > tbody > tr:nth-child(10) > td:nth-child(2)')
    await page.click('.table-responsive > .table > tbody > tr:nth-child(10) > td:nth-child(2)')

    await page.waitForSelector('.table-responsive > .table > tbody > tr:nth-child(10) > td:nth-child(2)')
    await page.click('.table-responsive > .table > tbody > tr:nth-child(10) > td:nth-child(2)')

    await page.waitForSelector('.table-responsive > .table > tbody > tr:nth-child(11) > td:nth-child(2)')
    await page.click('.table-responsive > .table > tbody > tr:nth-child(11) > td:nth-child(2)')

    await page.waitForSelector('.table-responsive > .table > tbody > tr:nth-child(11) > td:nth-child(2)')
    await page.click('.table-responsive > .table > tbody > tr:nth-child(11) > td:nth-child(2)')

    await page.waitForSelector('.table-responsive > .table > tbody > tr:nth-child(11) > td:nth-child(2)')
    await page.click('.table-responsive > .table > tbody > tr:nth-child(11) > td:nth-child(2)')

    await page.waitForSelector('.well > .view_page_div > .table-responsive > .table > tbody')
    await page.click('.well > .view_page_div > .table-responsive > .table > tbody')

    await page.waitForSelector('.table-responsive > .table > tbody > tr > .last')
    await page.click('.table-responsive > .table > tbody > tr > .last')

    await page.waitForSelector('.table-responsive:nth-child(3) > .table > tbody > tr > td:nth-child(2)')
    await page.click('.table-responsive:nth-child(3) > .table > tbody > tr > td:nth-child(2)')

    await page.waitForSelector('.table-responsive:nth-child(3) > .table > tbody > tr > td:nth-child(2)')
    await page.click('.table-responsive:nth-child(3) > .table > tbody > tr > td:nth-child(2)')

    await page.waitForSelector('.table-responsive:nth-child(3) > .table > tbody > tr > td:nth-child(2)')
    await page.click('.table-responsive:nth-child(3) > .table > tbody > tr > td:nth-child(2)')

    await page.waitForSelector('#content > .row > .col-lg-12 > .ui-widget > .alert')
    await page.click('#content > .row > .col-lg-12 > .ui-widget > .alert')

    await page.waitForSelector('#content > .row > .col-lg-12 > .ui-widget > .alert')
    await page.click('#content > .row > .col-lg-12 > .ui-widget > .alert')

    await page.waitForSelector('#content > .row > .col-lg-12 > .ui-widget > .alert')
    await page.click('#content > .row > .col-lg-12 > .ui-widget > .alert')

    await page.waitForSelector('#content > .row > .col-lg-12 > .ui-widget > .alert')
    await page.click('#content > .row > .col-lg-12 > .ui-widget > .alert')

    await page.waitForSelector('#content > .row > .col-lg-12 > .ui-widget > .alert')
    await page.click('#content > .row > .col-lg-12 > .ui-widget > .alert')

    await browser.close()
})()