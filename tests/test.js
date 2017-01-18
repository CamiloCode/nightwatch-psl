'use strict';

var appoinment;
var panelTitle;
var panelBody;
const errorIDBody = `No se pudo guardar debido a:
*El campo 'Documento de identidad' ya esta registrado.`;
const errorPatientIDNotFound = `No se pudo guardar debido a:
*El campo 'Documento de identidad' no se encuentra entre nuestros pacientes registrados.`; 
const errorDoctorIDNotFound = `No se pudo guardar debido a:
*El campo 'Documento de identidad' no se encuentra entre nuestros doctores.`;
const savedCorrectly = "Datos guardados correctamente.";
const errorPanel = "Error:";
const savedPanel = "Guardado:";
var doctorID;
var patientID;

module.exports = {
  before : function(browser) {
    appoinment = new browser.page.appointment();
    panelTitle = appoinment.elements.panelTitle.selector;
    panelBody = appoinment.elements.panelBody.selector;
    doctorID = appoinment.randomDoc();
    patientID = appoinment.randomDoc();
  },
  'Create a new patient'(browser) {
    appoinment.navigate();
    appoinment.click('@createPatient');
    appoinment.setValue('@patientName', 'test');
    appoinment.setValue('@patientLastName', 'testLastName');
    appoinment.setValue('@patientTelephone', '123');
    appoinment.setValue('@patientID', patientID);
    appoinment.selectPatientIDOption();
    appoinment.click('@patientPrepaid');
    appoinment.clickSaveButton();
    browser.getText(panelTitle, function(result) {
      this.assert.equal(result.value, savedPanel);
    });
    browser.getText(panelBody, function(result) {
      this.assert.equal(result.value, savedCorrectly);
    });
  },

  'Create a new doctor'(browser) {
    appoinment.navigate();
    appoinment.click('@createDoctor');
    appoinment.setValue('@doctorName', 'test');
    appoinment.setValue('@doctorLastName', 'testLastName');
    appoinment.setValue('@doctorTelephone', '123');
    appoinment.setValue('@doctorID', doctorID);
    appoinment.selectDoctorIDOption();
    appoinment.clickSaveButton();
    browser.getText(panelTitle, function(result) {
      this.assert.equal(result.value, savedPanel);
    });
    browser.getText(panelBody, function(result) {
      this.assert.equal(result.value, savedCorrectly);
    });
  },

  'Make a new appoinment correctly'(browser) {
    appoinment.navigate();
    appoinment.click('@makeAppointment');
    appoinment.selectCurrentDay();
    appoinment.setValue('@patientInput', patientID);
    appoinment.setValue('@doctorInput', doctorID);
    appoinment.setValue('@observations','N/A');
    appoinment.click('@saveButton');
    browser.getText(panelTitle, function(result) {
      this.assert.equal(result.value, savedPanel);
    });
    browser.getText(panelBody, function(result) {
      this.assert.equal(result.value, savedCorrectly);
    });
  },
  'Make a new appoinment with wrong patient ID'(browser) {
    appoinment.navigate();
    appoinment.click('@makeAppointment');
    appoinment.selectCurrentDay();
    appoinment.setValue('@patientInput', 999999999);
    appoinment.setValue('@doctorInput', doctorID);
    appoinment.setValue('@observations','N/A');
    appoinment.click('@saveButton');
    browser.getText(panelTitle, function(result) {
      this.assert.equal(result.value, errorPanel);
    });
    browser.getText(panelBody, function(result) {
      this.assert.equal(result.value, errorPatientIDNotFound);
    });
  },
  'Make a new appoinment with wrong doctor ID'(browser) {
    appoinment.navigate();
    appoinment.click('@makeAppointment');
    appoinment.selectCurrentDay();
    appoinment.setValue('@patientInput', patientID);
    appoinment.setValue('@doctorInput', 999999999);
    appoinment.setValue('@observations','N/A');
    appoinment.click('@saveButton');
    browser.getText(panelTitle, function(result) {
      this.assert.equal(result.value, errorPanel);
    });
    browser.getText(panelBody, function(result) {
      this.assert.equal(result.value, errorDoctorIDNotFound);
    });
  },
  after : function(browser) {
    browser.end();
  },
};
