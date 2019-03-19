import BTSerialPort from 'bluetooth-serial-port';
const btSerial = new BTSerialPort.BluetoothSerialPort();

//Generic Error Handler for the BT Serial Port library as requires error functions
const errFunction = (err) =>{
   if(err){
       console.log('Error', err);
   }
};

// Connecting to BT device can take a few seconds so a little console.log to keep you entertained.
console.log("Starting Server");
// Are you not entertained?

/*
  For this to work you will have to connect to the Bluetooth device on your computer in the normal way
  I.e via Bluetooth settings: Default password is usually 0000 or 1234
*/

// Once BtSerial.inquire finds a device it will call this code
// BtSerial.inquire will find all devices currently connected with your computer
btSerial.on('found', function(address, name) {
    // If a device is found and the name contains 'HC' we will continue
    // This is so that it doesn't try to send data to all your other connected BT devices
    if(name.toLowerCase().includes('hc')){

      btSerial.findSerialPortChannel(address, function(channel) {
        // Finds then serial port channel and then connects to it
        btSerial.connect(address, channel, function() {
          // Now the magic begins, bTSerial.on('data', callbackFunc) listens to the bluetooth device.
          // If any data is received from it the call back function is used
          btSerial.on('data', function(bufferData) {
            // The data is encoded so we convert it to a string using Nodes Buffer.from func
            console.log(Buffer.from(bufferData).toString());

            // Now we have received some data from the Arduino we talk to it.
            // We Create a Buffered string using Nodes Buffer.from function
            // It needs to be buffered so the entire string is sent together
            // We also add an escape character '\n' to the end of the string
            // This is so Arduino knows that we've sent everything we want
            btSerial.write(Buffer.from('From Node With Love\n'), errFunction);
          });
        }, errFunction);
      },errFunction);
    }else{
      console.log('Not connecting to: ', name);
    }
});

// Starts looking for Bluetooth devices and calls the function btSerial.on('found'
btSerial.inquire();