# squadUp

This is a full-stack Mobile application to allow users to Locate nearby basketball courts and get some information and the selected basketball court. Still under development.

# How It's Made:
** Tech Used: ** React native, Node.Js, Express and MongoDB

The objective of this project is to reduce time spent searching for courts and setting up games to be played at selected court. This is using React-native front-end and Express and MongoDb at the back end. Still under development to a more complete product.

# Optimization:
Still optimizing the project to have Users' profile, A more thorough list of courts with information of said court, and a chat room for each court so users can schedule games through the app.

More ideas to come as progess are made.

# Leason Learned
The React Framework is asychronous so have to be aware of race conditions, the bind of the keyword this to functions but using express functions avoid those bindings. Still more to come as development continues.

# Contribution
I would love some feedback on how to improve this project. If you have any questions or comments please reach out through my contact information on github. I look forward to hearing great ideas from others.

SETUP
# Requirements
Before you get started, make sure you have the following dependencies installed on your machine:

Homebrew (or an alternative way to install OSX packages)

Latest React Native CLI

    $ npm install -g react-native-cli
Installation
# Install dependencies

    $ npm install
    $ react-native link
Running the iOS application
Install Requirements:
Xcode for iOS development (download from Mac App Store)
Ruby (>2.2) to run CocoaPods
CocoaPods 1.0 or newer for iOS package management.
Please note that CocoaPods 0.x will not work, and at the time of writing the version in Homebrew is still 0.39, so check your pod --version and install 1.0 with gem if necessary.

Install native iOS dependencies

 $ (cd ios; pod init; pod repo update; pod install)
# Build the app and run the simulator via react-native:

    $ react-native run-ios
