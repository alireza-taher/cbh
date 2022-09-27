# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

1. Add new custom identifier to Agents table  
   - Add a new column called "username" to hold custom identifier 
   - Set the default value to NULL and make sure it's a UNIQUE field
(Time estimate: Less than an hour, might take longer if it's a big database)  

2. Add the custom ID (username) to backend API
   - Make sure backend API return username as metadata when returning Agent data (for example in getShiftsByFacility method)
   - Make sure authenticated Facility type of users can modify their Agents username (only theirs)
   - Make sure to perform required validations (belonging, uniqueness, min/max length, valid chars)
(Time estimate: 1 hour)  

3. Add an interface to Facilities panel (or proper admin panel) for setting, and modifying the user name for each Agent that associated with that specific Facility
    - Given we have a Page in our admin panel listing Facility's Agents
      - We replace the ID column with "Username"
      - Username column shows Agent's username, when not set, it shows the ID
    - In edit Agent form, ID field changes to Username and is editable
    - Proper front-end validation should be done and feedback should be given to user when trying to set/update a username (Validity of entered username and availability)
(Time estimate: 2-3 hours)  