---
title: Quick start
---

# Quick start

This quick start guide will describe the interface you see here in Galaxy. 

More in depth tutorials can be found on the [<i class="fa-solid fa-graduation-cap me-2"></i>Galaxy Training Network (GTN)<i class="fa-solid fa-arrow-up-right-from-square ms-2 fa-sm"></i>](https://training.galaxyproject.org){: class="p-2 rounded btn-outline-primary px-3"}

## Tools

In the left panel of this page you will find the list of available tools, you can see this page at any point by clicking 'Analyze Data' in the top menu.

## History

The history of your current data analysis is shown in the right panel. A good practice when running multiple analysis in parallel is to create several histories and give each one a unique name.
You can click on 'View all histories' button (upper right corner in histories panel) to get an overview and switch between the current histories.

## Input Data

Every analysis starts with getting the input data into your current history (right panel). To do this you can upload your own input files or use shared datasets.
To upload files from your computer or instruct Galaxy to download files from the web you have to use of the upload tool: Get data (tool panel on the left) → upload file. Please DO NOT UPLOAD LARGE FILES (~GB), but contact the administrator to create a central data repository!
To use available shared data you have to click on Shared data (top menu) → Data Libraries. You can then browse the available libraries and select the file/s you want to use. By clicking 'to History' button and choosing the desired History name you will import these files and make them available to use as input for future analysis.

## Execution

To run a job select the tool from tool panel on the left, then the corresponding interface will be loaded and you will be able to select corresponding input data and (re)define parameters.
Please read carefully the labels and help text next to the input fields. After clicking Execute you will be able to see entries for each  in your history.
The color of a dataset designates the current status of the underlying job

Color                                     | State
---                                       | ---
<span class="p-2 rounded" style="background-color: #e9ecef">Gray</span>     | The job is being evaluated to run (new dataset) or is queued. Allow this to complete.
<span class="p-2 rounded" style="background-color: #ffe6cd">Yellow</span> | The job is executing.
<span class="p-2 rounded" style="background-color: #c2ebc2">Green</span>   | Successful processing.
<span class="p-2 rounded" style="background-color: #f4a3a5">Red</span>       | The job has failed.
<span class="p-2 rounded" style="background-color: #a6c9e1">Blue</span>     | The job is paused. This indicates either a problem with an input (a previous step in the workflow may have failed) or that you have exceeded disk quota set by the administrator of the Galaxy instance you are working on.
{: .table}

## Workflows

You can automate your analysis pipeline by using workflows composed of several tools linked by their input/output data. In the Workflows section (upper menu) you can see a list of current workflows and also create your own ones.
It is also possible (and highly recommended) to use the shared, and widely tested, workflows available under Shared Data (top menu) → workflows. To use one of these you first need to import it to your workflows list by clicking on the name and selecting Import. To execute any workflow listed under your workflows first click on it and select run, then choose the input data as with any tool.

