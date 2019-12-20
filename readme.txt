
2019.12.19

1.	Crexi angular-test, done by Vitaly Radkovski

2.	Following conditions from the test were implemented:

	1.	The user profile page is currently loaded with dummy data. 
		Use the public API at Random User Generator to pull in a random 
		user and populate the profile page. You should get the relevant 
		data from the API to fill a ProfileStore.

		(Original code related to this part has not been modified)  

	2.	Create a new page, a profile list. Pull in 10 random profiles to 
		populate this list, storing them in the state, and make each 
		profile list item clickable, sending the user to a user details 
		page with that user data. The user profile page route should be 
		adjusted to take an optional id param, which if missing will show 
		a random user (step 1)

		
		Added new code to display a grid of random 10 users from randomuser.me
		To see user profiles navigate to: 

		http://localhost:8888/profiles

		When any row is this grid is clicked a new page with user profile 
		details is dispayed

		(Randomising a user, if no id was provided has not been implemented)

		The upper right corner of the page header contains a 'Profiles' menu 
		link that displays user profiles grid.
		 





		