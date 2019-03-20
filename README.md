# arduino_bluetooth_node

For more information see the [Arduino Project](https://create.arduino.cc/projecthub/mayooghgirish/arduino-bluetooth-basic-tutorial-d8b737)

This repo contains both the Arduino code under src/arduino and the node code under src/node

# How to guide

Arduino

1.   Wire up your arduino, more information can be found at the [Arduino Project](https://create.arduino.cc/projecthub/mayooghgirish/arduino-bluetooth-basic-tutorial-d8b737)
2.   Upload the Arduino code to your Arduino
3.   Open the Serial Monitor and point to **Baud 4800** 

Node

1.    Connect your computer to the bluetooth device, you do this the same way you would connect any other bluetooth device. Look at your settings for
      HC-02 or HC-05 depending on your chip, default password is normally 0000 or 1234
1.    Add node GYP if you don't already have it. Node Gyp allows node to use your machines hardware devices such as its bluetooth transmitter.
      Go here and follow the setup for your computer : [https://github.com/nodejs/node-gyp]
2.    Use Yarn or NPM to install the project (Yarn is preferred)

          yarn
          
              or
              
          npm install
          
3.    Start the node server. 

          Yarn start
          
              or
              
          npm start   
          
4.    Look at your console and your Serial Monitor, you should now see the computer and the Arduino have a little chat. 
      
      
# Contact Me

This is a little library I put together after working on the problem for a little while, it's not perfect and i'm sure there are better ways to do it. Any comments, problems or improvements please let me know by adding a comment on the [Arduino Projects Page](https://create.arduino.cc/projecthub/mayooghgirish/arduino-bluetooth-basic-tutorial-d8b737)

Thanks,

Lee
      
