const {app, BrowserWindow} = require("electron")
const spawn = require("child_process").spawn
const exec = require("child_process").exec

flask = spawn('python', ['run-dd-monitor.py'])

flask.stdout.on('data', (data) => {
    console.log(data.toString())
})

flask.stderr.on('data', (data) => {
    console.log(data.toString())
})

flask.on('exit', (code) => {
    console.log(`exit ${code}`)
})

function sleep(delay) {
    const start = (new Date()).getTime();
    while ((new Date()).getTime() - start < delay) {
    }
}

function createWindow() {
    let win = new BrowserWindow({
        width: 1600,
        height: 1080
    })
    sleep(2000)
    win.loadURL("http://127.0.0.1:5140/")
        .then(() => console.log('win.loaded'))
}

app.on("ready", createWindow)
app.on("quit", () =>
    exec("ps -ef | grep 'python run-dd-monitor.py' | grep -v grep | awk '{print $2}' | xargs kill")
)
