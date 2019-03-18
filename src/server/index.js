const btSerial = new (require('bluetooth-serial-port')).BluetoothSerialPort();

btSerial.on('found', function(address, name) {
    console.log('found', name);
    console.log('found address:', address);
    btSerial.findSerialPortChannel(address, function(channel) {
        btSerial.connect(address, channel, function() {
            console.log('connected address:', address);
            console.log('connected channel:', channel);
            btSerial.write(Buffer.from('my data', 'utf-8'), function(err, bytesWritten) {
                if (err) console.log(err);
            });
            console.log('bt written');

            /*btSerial.on('data', function(buffer) {
                console.log('data received',buffer);
               console.log(buffer.toString('utf-8'));
            });*/
        }, function (err) {
            console.log('cannot connect', err);
        });

    }, function() {
        console.log('found nothing');
    });
});

btSerial.inquire();