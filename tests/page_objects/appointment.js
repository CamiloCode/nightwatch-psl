'use strict';

module.exports = {
  commands: [{
    randomDoc: function() {
      return Math.floor((Math.random() * 100000000) + 1);
    },
    selectCurrentDay: function() {
      this.waitForElementVisible('@datePickerInput', 5000);
      this.click('@datePickerInput');
      this.waitForElementVisible('@datePickerCurrentDay', 5000);
      this.click('@datePickerCurrentDay');
    },
    selectPatientIDOption: function() {
      this.waitForElementVisible('@patientTypeID', 5000);
      this.click('@patientTypeID');
      this.waitForElementVisible('@patientTypeIDSelected', 5000);
      this.click('@patientTypeIDSelected');
    },
    selectDoctorIDOption: function() {
      this.waitForElementVisible('@doctorTypeID', 5000);
      this.click('@doctorTypeID');
      this.waitForElementVisible('@doctorTypeIDSelected', 5000);
      this.click('@doctorTypeIDSelected');
    },
    clickSaveButton: function() {
      this.waitForElementVisible('@saveButton', 5000);
      this.click('@saveButton');
    }
  }],
  url: 'http://automatizacion.herokuapp.com/ocontreras/',
  elements: {
    patientName : 'input[name=name]',
    patientLastName : 'input[name=last_name]',
    patientTelephone : 'input[name=telephone]',
    patientID : 'input[name=identification]',
    patientTypeID: 'select[name=identification_type]',
    patientTypeIDSelected: 'select[name=identification_type] option:nth-of-type(1)',
    patientPrepaid : 'input[name=prepaid]',
    createPatient: '.list-group-item:nth-of-type(2)',
    createDoctor: '.list-group-item:nth-of-type(1)',
    doctorName : '#name',
    doctorLastName : '#last_name',
    doctorTelephone : '#telephone',
    doctorID : '#identification',
    doctorTypeID: '#identification_type',
    doctorTypeIDSelected: '#identification_type option:nth-of-type(1)',
    makeAppointment: '.list-group-item:nth-of-type(6)',
    datePickerInput: '#datepicker',
    datePickerCurrentDay: '.ui-state-default.ui-state-highlight',
    patientInput: 'label[for=patient-identification] + input',
    doctorInput: 'label[for=doctor-identification] + input',
    observations: 'label[for=note] + textarea',
    saveButton: '.btn.btn-primary.pull-right',
    panelTitle: '.panel-title',
    panelBody: '.panel-body'
  }
};