
## How to run the app on visual studio:

   1) cd to your data directory: 
      cd $Visualizing-Data-with-Leaflet3/

   2) python -m http.server

Sunithas-MacBook-Pro:Data-Journalism-and-D3 sunitharamakrishnan$ python -m http.server 

     Serving HTTP on 127.0.0.1 port 8000 (http://127.0.0.1:8000/) ... 127.0.0.1 - - [22/Mar/2018 12:13:48] 
     "GET /   HTTP/1.1" 200 - 127.0.0.1 - - [22/Mar/2018 12:13:48] 
     "GET /style.css HTTP/1.1" 200 - 127.0.0.1 - - [22/Mar/2018 12:13:49] 
     "GET /d3.html HTTP/1.1" 200 - 127.0.0.1 - - [22/Mar/2018 12:13:49] 
     "GET /d3style.css HTTP/1.1" 200 - 127.0.0.1 - - [22/Mar/2018 12:13:49] 
     "GET /app.js HTTP/1.1" 200 - 127.0.0.1 - - [22/Mar/2018 12:13:49] 
     "GET /data/data.csv HTTP/1.1" 200 -

   3) Now go to a web browser:

      http://127.0.0.1:8000/  <-- to look at the graphics data visualization chart.

  [convert notebook to other formats](http://ipython.org/ipython-doc/3/notebook/nbconvert.html)

## How to convert the notebook to other formats:
   
   
    [convert notebook to other formats](http://ipython.org/ipython-doc/3/notebook/nbconvert.html)
   
    The command-line syntax to run the nbconvert script is:

    $ ipython nbconvert --to FORMAT notebook.ipynb
    ex: ipython nbconvert --to markdown README.ipynb
    
    This will convert the IPython document file README.ipynb into the output format given by the markdown string.
    ex: README.md
 

# Unit 17 | Assignment - Visualizing Data with Leaflet

# Background

![title](img/Logo.png)

Welcome to the United States Geological Survey, or USGS for short! The USGS is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment; and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes. As a new hire, you will be helping them out with an exciting new project!

The USGS is interested in building a new set of tools that will allow them visualize their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. Their hope is that being able to visualize their data will allow them to better educate the public and other government organizations (and hopefully secure more funding..) on issues facing our planet.


# Your Task
## Step 1: Basic Visualization
 

![title](img/BasicMap.png)

Your first task is to visualize an earthquake data set.

## Get your data set

![title](img/Data.png)

The USGS provides earthquake data in a number of different formats, updated every 5 minutes. Visit the [USGS GeoJSON](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) Feed page and pick a data set to visualize. When you click on a data set, for example 'All Earthquakes from the Past 7 Days', you will be given a JSON representation of that data. You will be using the URL of this JSON to pull in the data for our visualization.

![title](img/JSON.png)

# 1.Import & Visualize the Data
    
Create a map using Leaflet that plots all of the earthquakes from your data set based on their longitude and latitude.

Your data markers should reflect the magnitude of the earthquake in their size and color. Earthquakes with higher magnitudes should appear larger and darker in color.

Include popups that provide additional information about the earthquake when a marker is clicked.

Create a legend that will provide context for your map data.

Your visualization should look something like the map above.

## Step 2: More Data 

![title](img/Advanced.png)

The USGS wants you to plot a second data set on your map to illustrate the relationship between tectonic plates and seismic activity. You will need to pull in a second data set and visualize it along side your original set of data. Data on tectonic plates can be found at https://github.com/fraxen/tectonicplates.

In this step we are going to..

Plot a second data set on our map.

Add a number of base maps to choose from as well as separate out our two different data sets into overlays that can be turned on and off independently.

Add layer controls to our map.

 


## Step 3: Time Keeps on Ticking

![alt text](img/Time_Keeps_On_Ticking.gif "Title")

Many people don't know how much seismic activity is happening around them all the time. Did you know that Southern California has over 10,000 earthquakes each year alone? The USGS wants you to create a map that will visualize just how many earthquakes happen over the course of a day/week.

Your task is to use a Leaflet plugin (they can be found at http://leafletjs.com/plugins.html) to visualize your earthquake as it takes place over a period of time.


## Bonus: Above and Beyond
You're so excited to be in your new position you really want to do something that will blow them away. You came up with two ideas of ways to go above and beyond:

Find another set of geospatial data that you can use to show a new correlation or insight about our existing earthquake data.

Use additional plug-ins from the [Leaflet Documentation](http://leafletjs.com/plugins.html) to further visualize our data in a unique way.

Heatmap

![title](img/Heat.png)

Data Clustering

![title](img/cluster.png)

### Assessment
Your final product will be assessed on the following metrics:

Completion of all steps in chosen level

Visual attraction

Professionalism

Good luck!

### Copyright
Coding Boot Camp (C) 2016. All Rights Reserved.
