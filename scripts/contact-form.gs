/**
 * Google Apps Script — Contact form → Google Sheets
 *
 * Copy this entire file into Extensions → Apps Script on your spreadsheet.
 * See setup steps in the project README or contact page docs from your dev.
 */ 

var sheetName = 'Sheet1'
var scriptProp = PropertiesService.getScriptProperties()

function initialSetup () {
  var activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet()
  scriptProp.setProperty('key', activeSpreadsheet.getId())
}

function doPost (e) {
  var lock = LockService.getScriptLock()
  lock.tryLock(10000) 

  try {
    var doc = SpreadsheetApp.openById(scriptProp.getProperty('key'))
    var sheet = doc.getSheetByName(sheetName)

    var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0]
    var nextRow = sheet.getLastRow() + 1

    var newRow = headers.map(function (header) {
      return header === 'timestamp' ? new Date() : e.parameter[header]
    })

    sheet.getRange(nextRow, 1, nextRow, newRow.length).setValues([newRow])

    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success', row: nextRow }))
      .setMimeType(ContentService.MimeType.JSON)
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON)
  } finally {
    lock.releaseLock()
  }
}
