Feature: Login Scenarios
		As a user
		I want to be able to login
		So that I can access my Account page
@Sanity @Regression @login


Scenario: Login with valid credentials
		Given I navigate to the homepage
		And I click on profile icon from header
		And I enter in email textbox
		And I enter in password textbox
		When I click on submit button
		Then I logged in successfully

	
Scenario: Login with Invalid credentials
		Given I navigate to the homepage
		And I click on profile icon from header
		And I enter invalid email textbox 
		And I enter invalid password textbox
		When I click on submit button
		Then user should see an error message
		


Scenario: Error validation when mandatory field left empty
		Given I navigate to the homepage
		And I click on profile icon from header
		When user has left the mandatory field email empty
		And user has left the mandatory field password empty
		And I click on submit button
		Then user should see an error instruction message
		
		

		

		