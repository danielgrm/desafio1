# Intelie Challenge

This is DanielGRM answer to Intelie's proposed coding challenge.

## Installation

After cloning the repository, use the package manager of your choice to install JS dependencies.

```bash
npm install
```
This should do it.


## Usage
```bash
npm index.js
```
It should not be more difficult than runnig the ;js server and pointing your browser to  localhost:3000 as instructed in the terminal.
```bash
http://localhost:3000
```

According to given instructions, by clicking the "Generate Chart" button, client-side send start event to back-end. Current timestamp and queries are included. 

A 6-second "listening" span was used in this example, which is also sent to back-end right after start event  .

On receiving these two objects, server sends 2 batches of objects as data events, which are real-time plotted on the client.

After a 6-second time-span, a stop request is sent. Connection is kept alive and a new data set could be requested anytime.

## Tool choice
I was not acquainted in any way with the tools used for this project. 

Ploty was choosen for ease and flexibility to draw the curves right out of the box. Speed was a plus, and CDN was chosen for the very same reason. 

Socket.io showed an simple and elegant solution for establishing a connection.

No fancy non-essential front-end solution was used for performance's sake. I am using a ten-year-old laptop, which is turned to a sluggish hovercraft when React makes cpu-fan kicks in.

The adjustable pane was developed and worked, somewhat. It was rejected in the final version for wreaking havoc in layout during usability tests.

The dataset in the presented example was used in final version, though other datasets were tested. Unsolicited features were not implemented. Some visual features too, though functionality was preferred over looks.

