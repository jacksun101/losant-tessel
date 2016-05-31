var tessel = require('tessel');
var Device = require('losant-sdk-js').Device;

// Construct gateway
var device = new Device({
    id: '574d7c009e9a910100e6bf28',
    key: '0e79f970-170a-4387-84cb-2fac3923e16f',
    secret: '52f5f3a07b707a22fb677fae2dda03ebb93a3dd2e5cf8eceb2b7ed1b11b0708e'
});

// Let us know when we have connected
device.on('connect', () => {
    console.log('Successfully connected to Losant!');
});

// Listen for commands 
device.on('command', (command) => {
    // console.log('Command received.');
    // console.log(command.name);
    // console.log(command.payload);

    // Switch on the command name
    switch (command.name) {
        // Print out the change
        case "ledToggle":
            console.log(`Toggling LED ${command.payload.ledIndex}.`);
            // Access the LED at the specified index and set it to the specified state
            tessel.led[command.payload.ledIndex].toggle();
            break;
    }
});

// Connect to Losant
device.connect();