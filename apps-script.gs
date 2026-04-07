// ════════════════════════════════════════════════
//  Google Apps Script — Réception RSVP Étienne
//  Copiez ce code dans script.google.com
// ════════════════════════════════════════════════

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  // Ajouter les en-têtes si la feuille est vide
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Date/Heure', 'Prénom', 'Téléphone', 'Participation', 'Dates dispo', 'Message']);
    sheet.getRange(1, 1, 1, 6).setFontWeight('bold').setBackground('#1e1b4b').setFontColor('#ffffff');
  }

  try {
    const data = JSON.parse(e.postData.contents);
    sheet.appendRow([
      data.timestamp || new Date().toLocaleString('fr-FR'),
      data.prenom      || '',
      data.telephone   || '',
      data.participation || '',
      data.dates       || '',
      data.message     || ''
    ]);
  } catch(err) {
    sheet.appendRow([new Date().toLocaleString('fr-FR'), 'ERREUR', err.toString()]);
  }

  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok' }))
    .setMimeType(ContentService.MimeType.JSON);
}
