import { google } from 'googleapis'

// Initialize Google Sheets API client
export function getGoogleSheetsClient() {
  try {
    // Parse the service account credentials from environment variable
    const credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY || '{}')

    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    })

    return google.sheets({ version: 'v4', auth })
  } catch (error) {
    console.error('Failed to initialize Google Sheets client:', error)
    throw new Error('Google Sheets configuration error')
  }
}

// Add a row to the contact form sheet
export async function addContactToSheet(data: {
  name: string
  email: string
  company: string
  message: string
}) {
  const sheets = getGoogleSheetsClient()
  const spreadsheetId = process.env.GOOGLE_SHEET_ID

  if (!spreadsheetId) {
    throw new Error('GOOGLE_SHEET_ID not configured')
  }

  const timestamp = new Date().toISOString()

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: 'Sheet1!A:F', // Adjust if your sheet has a different name
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [[
        timestamp,
        data.name,
        data.email,
        data.company,
        data.message,
        'New', // Status column
      ]],
    },
  })
}