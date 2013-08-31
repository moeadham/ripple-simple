ripple-simple
=============

Some functions to create a ripple wallet key pair, and sign a transaction locally. Nothing more.

Ripple-0.7.19.js should be compiled from ripple-lib
base58.js and types.js taken from ripple-client

It would be a good idea to add some entropy from where-ever you are running this.
Ex. In my mobile applications, I seed entropy from the accelerometers.

Simple way to generate a new key pair, and to sign a transaction JSON locally.
