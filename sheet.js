/*
some of this is prob not necessary, it's just a copy paste from somewhere :shrug:
make sure the sheet the data (sheetName below) is posting to has headers matching fetchform headers from client code.
*/

//change to match the sheet name for boss data
const sheetName = 'Data'
const scriptProp = PropertiesService.getScriptProperties()

function intialSetup () {
  const activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet()
  scriptProp.setProperty('key', activeSpreadsheet.getId())
}

function doPost (e) {
  const lock = LockService.getScriptLock()
  lock.tryLock(10000)

  try {
    const doc = SpreadsheetApp.openById(scriptProp.getProperty('key'))
    const sheet = doc.getSheetByName(sheetName)

    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0]

    const newRow = headers.map(function(header) {
      return header === 'Date' ? new Date() : e.parameter[header]
    })

    sheet.getRange(2, 1, 1, newRow.length).setValues([newRow])

    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success', 'row': 2 }))
      .setMimeType(ContentService.MimeType.JSON)
  }

  catch (e) {
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }))
      .setMimeType(ContentService.MimeType.JSON)
  }

  finally {
    lock.releaseLock()
  }
}
