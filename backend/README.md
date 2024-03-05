Process to start backend server
--------------------------------------
1. Use "npm i" to install modules

2. create empty database in mongodb server and set it's name and uri to config/config.env file

3. You can use seeder to import data

    node seeder -i // to import

    node seeder -d // to delete all data
    

4. Now run "npm run dev" to start the node express server for backend api

5. There are only 2 models user and profile, you can create as many you needed.