Feature: Login Scenarios

@Sanity @Regression @login

Scenario: Verify redirection to Login section
Given User is on the home page
When User click on the My Account icon from header
Then Login overlay should display

@Sanity @Regression @login

Scenario: Successful login with valid credentials
Given User is on the login overlay
And User enter valid Email id
And User enter valid password
When User click the login button
Then User should be logged in successfully and remain on same page
And User click on the My Account icon from header
And Login overlay should display
And User should see a welcome header message with user name

@Sanity @Regression @login

Scenario: Validate the Login flow with Invalid credentials 
Given User is on the login overlay
When User enters invalid credentials
And User click the login button
Then User should see an error message

@Sanity @Regression @login

Scenario: Verify Forgotten password link redirection
Given User is on the login overlay
When User click on the "Forgot password" link
Then User should be redirected to the password recovery page
And User should see a form to enter my email

@Sanity @Regression @login

Scenario: Verify validation messages for each required input field for Login
Given User is on the login overlay
When User left the mandatory field empty and click on login button 
Then User should see an error message for required fields
