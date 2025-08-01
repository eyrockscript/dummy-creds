# Dummy Credentials - Chrome Extension

A Chrome extension for generating dummy test credentials (usernames, emails, and strong passwords) quickly and easily.

## Features

- 🎲 Generates random dummy usernames
- 📧 Creates test email addresses
- 🔐 Generates strong, customizable passwords
- 📋 Copy-to-clipboard functionality
- ⚙️ Configurable password options
- 🎨 Modern and user-friendly interface

## Installation

### From source code (Developer mode)

1. Download or clone this repository
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked extension"
5. Select the folder containing the extension files
6. The extension will appear in your toolbar

## Usage

1. Click the extension icon in the toolbar
2. Dummy credentials will be automatically generated
3. Click the 📋 button next to each field to copy to clipboard
4. Use "Copy All" to copy all credentials at once
5. Customize password options according to your needs
6. Click "Generate New Credentials" to create a new set

## Password Options

- **Uppercase (A-Z)**: Include uppercase letters
- **Lowercase (a-z)**: Include lowercase letters
- **Numbers (0-9)**: Include digits
- **Symbols**: Include special characters (!@#$...)
- **Length**: Adjustable from 8 to 32 characters

## Project Files

- `manifest.json` - Extension configuration
- `popup.html` - User interface
- `popup.css` - Interface styles
- `popup.js` - Credential generation logic
- `icon16.png`, `icon48.png`, `icon128.png` - Extension icons

## Development

The extension is built with:
- HTML5 for structure
- CSS3 with gradients and animations
- Vanilla JavaScript (no dependencies)
- Manifest V3 for Chrome Extensions

## Security Features

- Generated passwords include multiple character types
- Secure random generation using `Math.random()`
- No sensitive data is stored or transmitted
- Works completely offline

## Compatibility

- Chrome 88+
- Manifest V3
- Works offline

## Contributions

Contributions are welcome. Please open an issue or submit a pull request.

---

## Support Me

If you find this project useful, consider supporting me:

[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-☕-yellow.svg)](https://buy.stripe.com/cNi00igBN2Ki881b756EU00)

---

**Security Note**: This extension generates credentials for testing purposes only. Do not use these credentials for real accounts or sensitive data.