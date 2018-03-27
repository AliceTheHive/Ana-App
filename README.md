# The Ana App

[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)

A single cross-platform app where you can design and publish ANA chatbots, manage users and check the chatbot analytics.

## License

Ana Conversation Suite is available under the [GNU GPLv3 license](https://www.gnu.org/licenses/gpl-3.0.en.html).

## Installation

Download Ana studio sdk from https://www.ana.chat/downloads.html

## How to use Ana app?

Goal of Ana app is to make it easier to build chatflows without much technical knowledge, it even allows to create and test bot within studio itself using simulator. 

First create bot using studio and test it locally using simulator. After finalizing desired chatflow, you can publish it to Ana server. Ana server is responsible for serving published content across different channels including Web, Android, iOS and Facebook (and many more to come soon). 

## Creating a bot and testing using simulator

1. Open Ana app and Click on `Studio`
2. Click on `Add new chatbot` to create a new project or 'Import chatbot' to import an existing project
3. Enter name of the new project and submit
4. Create desired chatflow and save it
5. Click on `RUN  CHAT` option to test chatflow locally using simulator

## Publishing bot to Ana server

1. Ensure Ana server is up and running (Instructions for [Ana server](https://github.com/Kitsune-tools/ProjectANA/blob/master/ANA-CHAT-SERVER-SETUP-README.MD) setup)
2. Open Ana studio and configure Ana server url
    1. Click on `login` 
    2. Click on `Add Ana chat server connection`
    3. If doesn't find any saved Ana chat server connections, prompts to add new server connection, Click on `Add Ana chat server connection`
    3. Click on the drop down, enter server name and Ana api-gateway url (ex: http://localhost:8080) 
    4. Save changes
    5. Click on login, select recently added Ana server connection and enter username as 'Admin' and password as 'ana123' and submit
    6. Now we have integrated Ana studio with Ana server successfully. Next we need to create a business and submit flow to Ana server
 3. Now open the studio from home page and create a new project and publish chat flow or import an existing chatflow
 
## Deploying your Ana chat bot

The following channels are supported for deploying your Ana chat bot. Follow the links for instructions.
   1. [Web Chat](https://github.com/Kitsune-tools/ANAChat-Web)
   2. [Android](https://github.com/Kitsune-tools/ANAChat-Android)
   3. [iOS](https://github.com/Kitsune-tools/ANAChat-iOS)
   4. Facebook Messenger (Coming soon...)

## Note

This is just the setup documentation. ANA Conversation Suite has much more scope than predefined flows. You can call your own APIs from the chat, capture and save information from the user. You can take different types of inputs like button clicks, text, image, video etc. For now, explore the code to get to know all the possibilities.

