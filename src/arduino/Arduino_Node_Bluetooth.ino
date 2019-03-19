#include <SoftwareSerial.h>

SoftwareSerial BTserial(10, 11); // Setup of Bluetooth module on pins 10 (TXD) and 11 (RXD);

void setup() {
  BTserial.begin(9600); // Bluetooth at baud 9600 for talking to the node server
  Serial.begin(4800); // Default Serial on Baud 4800 for printing out some messages in the Serial Monitor
}

void loop() {
    
  // Calls on BTSerial and sends the string to any connected devices.
  BTserial.print("From Arduino with mild ambivalence\n"); 

  // readStringUntil()
  // Reads all bytes off of the the Serial buffer until it finds the escape character '/n'
  // And then removes these bytes from the buffer
  // Returns the value as a string, which we print to the Serial monitor

  Serial.println(BTserial.readStringUntil('\n'));

  //Just so the Serial Monitor on Arduino and console on the Node server don't get too spammed
  delay(500);

}
