# squadUp

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
