const electron = require('electron')
const app = electron.app
const dialog = electron.dialog
const globalShortcut = electron.globalShortcut

globalShortcut.register('CommandOrControl+Alt+L', function () {
	dialog.showMessageBox({
		type: 'info',
		message: 'Shortcut pressed',
		detail: 'You pressed the registered global shortcut!',
		buttons: ['OK']
	})
})

app.on('will-quit', function () {
	globalShortcut.unregisterAll()
})
