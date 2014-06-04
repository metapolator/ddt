# Overview

## User Persona

Chris is a Designer who wants to design a high quality Latin + Devanagari typeface families. 

## Acceptance Criteria

For Chris to assess the quality of his design, he must load production-ready font families into a web page (testmyfont.com) and follow guided tests, then improve the fonts and load them again until all the tests are passed.

## User Journeys & Scenarios

* Font Family Uploading
	* Uploading a New Font (New Visitor)
	* Uploading a New Font (Previous Visitor)
	* Uploading an Existing Font
	* Removing an Existing Font
* Font Family Testing
	* New Test
	* Continuing a Test
	* Completing a Test
	* Repeating a Test
	* Skipping a Question
	* Skipping a Section
* Results
	* View
	* Share

## Font Uploading

### Uploading a New Font (New Visitor)

* Chris has not visited before so he is asked to load 1 or more fonts
* Chris drags some fonts from a folder on his computer to the drop area
	* Chris is also able to select fonts using a File Dialog
* Chris is notified of the progress for each font as they are loaded
* Chris is shown a list of fonts
* Once the font has been loaded it is added to the list of fonts

### Uploading a New Font (Previous Visitor)

* Chris is shown a list of fonts he loaded during a previous session, each with its own progress indicator outlining host much it has been tested already
* Chris decides he wants to upload a new font so he drags a font from a folder on his computer to the drop area
	* Chris is also able to select a font using a File Dialog
* Chris is notified of the progress for each font as they are loaded
* Once the font has been loaded it is added to the list of fonts Chris had previously uploaded

### Uploading an Existing Font

* Chris is trying to upload a font he has previously uploaded
* Chris is asked if he wants to replace the existing font which will undo any testing he has already completed for that font
	* If Chris answers Yes, it will replace that font
		* Chris can Undo this
	* If Chris answers No, it will not replace that font

### Removing an Existing Font

* Chris wants to remove a font he has uploaded
* Chris clicks on the Remove button for the font he wants to remove
* Chris is reminded that this will forget any testing he has already completed for that font
	* If Chris answers Yes, it will remove that font
		* Chris can Undo this
	* If Chris answers No, it will not remove that font

## Font Testing

### New Test

* Chris wants to test a font or set he has loaded
* Chris chooses it from his list
* Chris is presented with a bar that informs him of his overall progress for the font, as well as a list of sections he will need to complete as part of testing. Examples:
	* Kern
	* Hinting
	* Headlines
	* Text
	* adhesion
	* hamburgefonstiv
	* a-z
	* Words
	* Caps
	* Layout
	* Lettering
	* Latin
	* Non Latin
	* …
* Chris clicks on a section, eg Kern
* Chris is presented with the first of 14 segments in the Kern section

### Answering a Segment's Questions

* The first segment shows Chris a block of numbers, and the first of 2 questions: "Are the numbers evenly coloured?"
	* Answering Yes, Chris is taken to the next question
	* Answering No, 
		* Chris is asked to highlight which numbers are not correct
		* Chris says numbers 1 and 3 are too light and number 8 is too dark
		* Chris is taken to the next question.
* Chris is shown question 2 of 2, "Are these numbers suitable as the default set?"
	* Answering Yes, Chris is taken to the next question
	* Answering No, Chris is asked to add a note, and is taken to the next question

### Skipping a Question

* Chris wants to skip a Question
* Answering Skip, Chris is taken to the next question

### Skipping a Section

* Chris wants to skip a Section
* Chris clicks "Skip Section"
	* Chris is taken to the next unanswered question in the next section
* If the list of sections is visible, Chris clicks another item in the list
	* Chris is taken to the next unanswered question in that section

### Exclude a Question

* Chris wants to ignore a Question, because it doesn't make sense for the given font
* Answering Ignore, Chris is taken to the next question
* This question doesn't effect the completion percentage

### Exclude a Section

* Chris wants to ignore a Section, because it doesn't make sense for the given font
* Chris clicks "Ignore Section"
* Chris is taken to the next unanswered question in the next section
* This section doesn't effect the completion percentage
* This section doesn't effect the completion percentage

### Continuing a Test

* Chris wants to take a break from testing his font and return to it at a later date
* Chris closes the browser window whilst on the Hinting section 
* A few hours later Chris wants to continue his test and opens his browser window again
* Chris chooses the font he wants to continue testing from his list of loaded fonts
* Chris is taken to the question within the section he was answering upon closing the browser window

### Completing a Test

* Once Chris has answered all questions in a section, the section is marked as complete, and Chris is taken to the next section
* Once Chris has answered all questions in all sections
    * Chris can see his overall progress for the font is 100% and each section is complete
    * Chris can see a summary for each section, highlighting any issues or comments relating to questions raised during testing
* Chris is given the option to Share Results or Repeat Test

### Repeating a Test

* Chris wants to repeat a test on a font he had previously completed 100%
* Chris can follow the New Test process
* Chris finds each test shows his previous answer
* Chris can change his previous answers

### Include an Excluded Question | Section

* Chris wants to include a Question or Section prevoiusly excluded
* TODO

## Results

### View

* Chris wants to View the results of a test for a font
* Chris chooses a font from his list of uploaded fonts that is 100% complete in progress
* Chris is presented with a summary for each section highlighting any issues or comments relating to questions raised during testing

### Share

* Chris wants to Share the results of a test for a font
* Chris chooses a font from his list of uploaded fonts that is 100% test complete
* Chris clicks on the Share Results button and is asked to enter the email address(s) of the recipient(s) as well an optional note
* Chris clicks on the Share button and is shown a confirmation message
	* Chris can Undo this


## Questions

* Can a user group uploaded fonts into sets? i.e. all of the individual Roboto family fonts in a “Roboto” folder.

Yes. Within 'Font Family Uploading', add the ability to group fonts, and in other sections, allow testing groups. Essentially font on its own is a font set with 1 member. Eg,

    ### Font Sets
    
    * Chris can create a set of fonts, and give it a unique identifying name
    * Chris can add and remove fonts from a set
    * Chris can remove a set

* Do we need to have User Accounts (Sign Up and Sign In) – just trying to think of how we store the progress of a user as they go through testing as well as previously uploaded fonts, etc or are we happy to store all of this on the client side?

We store the progress all client side, such as with [localStorage](http://www.html5rocks.com/en/features/storage) or similar

* Should a user be able to repeat a test?

Yes.

* Should a user be able to skip a question entirely?

Yes.

* Should a user be able to skip a section entirely? i.e. Hinting or Kern

Yes; both skip and exclude

* Should the test be linear and start at the first section or can a user choose where to start and the order they want to complete the other sections in?

There should be a default linear path, so Dave can just go answer, answer, answer and hammer on it until all the tests are done; and Chris should be able to load a font and navigate to specific questions to inform his design process.

* What are the questions for every section and segment? This will be vital to know to ensure the interface is optimally designed.

I hope to get this ready for July 1

* If a user is testing a font and wants to switch to a different font, what happens if they are at different stages of testing for the 2 fonts? i.e. they are testing the Hinting section on Font 1 but are on the Kern section on Font 2. I would recommend that when switching fonts it simply takes them to the next section for that font they haven’t completed testing for, unless they have 100% completed testing in which case take them to the Results page for that font.

I think your recommendation is good
