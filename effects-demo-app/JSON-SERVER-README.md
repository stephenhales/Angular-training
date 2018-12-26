# JSON Server and Concurrently Setup

### Step 1. Install JSON Server and Concurrent Packages

From a terminal window with the top level folder of the project (where the package.json file is located run the following command):

```bash
npm i -D -E json-server concurrently
```

### Step 2. Update the Scripts Entry of Package.json

Update the "scripts" section of the "package.json" file with the following JSON:

```json
  "start": "concurrently \"ng serve\" \"npm run rest\"",
  "rest": "json-server --port 3050 --watch db.json",
```

### Step 3. Setup JSON data file

Add a "db.json" file to the root project folder. Populate the file with the following JSON:

```json
{
  "cars": [
    {
      "id": 1,
      "make": "Ford",
      "model": "Fusion",
      "year": 2017,
      "color": "blue",
      "price": 10000
    },
    {
      "id": 2,
      "make": "Tesla",
      "model": "S",
      "year": 2016,
      "color": "red",
      "price": 15000
    }
  ]
}
```

### Step 4. Start the Angular Application

From the terminal window (in the root project folder), run the following command:

```bash
npm start
```

### Step 5. View the JSON Server

With a web browser browse to http://localhost:3050

For more information on JSON Server: (https://github.com/typicode/json-server)[https://github.com/typicode/json-server)
