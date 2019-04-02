# Jane Newport Photography Website

<img width="797" alt="photography" src="https://user-images.githubusercontent.com/39039142/55350615-81b73b80-548a-11e9-87d8-b1af2f56555d.png">

## About

This is a MERN stack photography website that uses a RESTFUL API, and CRUD methods. It is designed for the self employed photographer. The website was designed so that clients would have an easy way to schedule upcoming photoshoots, as well as to make communication between photographer and both client clearer and faster.

Without making an account, guest users can view photo packages, view the about me page, and contact the photographer on the inquiry page. 

The admin account is designed for the photographer. In the admin account, the admin user can confirm or delete photoshoot requests. Also in the admin account, the admin user can view all users contact information. This makes it very easy to contact clients, and to facilitate photoshoot requests. There is only one admin account.

The user account is designed for the clients. In a user account, a user puts in their contact information. Their contact information is only available to themself and to the admin user. In a user account the user can also schedule a photoshoot request. On their profile page they can view upcoming photoshoots, as well as delete their requests. Users can see when their photoshoot is confirmed when the confirmed button becomes green. 

Deployed: https://tranquil-wildwood-40776.herokuapp.com/home

### Future Updates:

In the future it would be ideal to implement a paypal downpayment button, since downpayments are essential to a freelance photographer.

## Dependencies

bcryptjs, body-parser, concurrently, express, jsonwebtoken, mongoose, nodemailer, passport, passport-jwt, paypal-rest-sdk, validator, nodemon, axios, classnames, dotenv, jwt-decode, react, react-async-script-loader, react-dom, react-redux, react-router-dom, react-scripts, redux, and redux-thunk.

## Guest Users

Guest users can see the photopackages and prices, the about me page, fill out an inquiry form, and guests can create an account.

Inquiries through filling out the form can be made to the admin of the website. Nodemailer is used to send the information from the photography website to the admin's email, this can easily be changed to an actual email. 

<img width="461" alt="jasmeine jay" src="https://user-images.githubusercontent.com/39039142/55351934-a234c500-548d-11e9-8097-871c3c699242.png">
<img width="673" alt="nodemailer" src="https://user-images.githubusercontent.com/39039142/55351930-a06b0180-548d-11e9-91db-c38ff7b5a3a8.png">
<img width="488" alt="thank you" src="https://user-images.githubusercontent.com/39039142/55351940-a365f200-548d-11e9-9479-3893770ff8a9.png">

The login for the example Ethereal Email: 

https://ethereal.email

<img width="289" alt="passwordemail" src="https://user-images.githubusercontent.com/39039142/55351629-db206a00-548c-11e9-9066-7603f5580279.png">


## New or Old User
<img width="770" alt="phtoportal" src="https://user-images.githubusercontent.com/39039142/55425988-b8a45480-5551-11e9-97ef-f0fe55e39e2e.png">

 
Users can either sign up or login when they click on the customer portal tab.

<img width="670" alt="alexlogin" src="https://user-images.githubusercontent.com/39039142/55352421-d066d480-548e-11e9-84d2-a9eef44d71a2.png">

Users are greeted with a welcome landing page. Users can then go to their profile to edit their contact information, view the admin's schedule, or schedule a photoshoot request to the admin.

<img width="682" alt="welcomealex" src="https://user-images.githubusercontent.com/39039142/55352435-d6f54c00-548e-11e9-91e4-340aed185c6e.png">
<img width="564" alt="profilealex" src="https://user-images.githubusercontent.com/39039142/55352438-d957a600-548e-11e9-945e-d976b7806547.png">
<img width="480" alt="inquiryalex" src="https://user-images.githubusercontent.com/39039142/55352440-da88d300-548e-11e9-98a7-bccc5db3b3f8.png">

If you are a new user, you can register, and then you are prompted to login.

<img width="660" alt="jamessignup" src="https://user-images.githubusercontent.com/39039142/55352798-b083e080-548f-11e9-810e-56eb9aadce36.png">
<img width="618" alt="jameslogin" src="https://user-images.githubusercontent.com/39039142/55352800-b1b50d80-548f-11e9-9105-d69fada659cf.png">

When a new user logs in, the user must update their contact information.
<img width="825" alt="jameswelcome" src="https://user-images.githubusercontent.com/39039142/55352809-b7125800-548f-11e9-88e8-818493a36ab5.png">
<img width="325" alt="jameseditcontact" src="https://user-images.githubusercontent.com/39039142/55352825-c2fe1a00-548f-11e9-95cd-0c555c196346.png">

A new user can also make a photoshoot request.

## Admin Account

There is also an admin account.

The admin can confirm photoshoot requests by clicking the confirm button. The unconfirmed requests are on the left, and the confirmed requests are on the right. The admin account also has access to all of the users, as well as their phone numbers and emails.

<img width="709" alt="adminlogin" src="https://user-images.githubusercontent.com/39039142/55352998-3bfd7180-5490-11e9-8404-a9331d9c19eb.png">
<img width="716" alt="welcomeadmin" src="https://user-images.githubusercontent.com/39039142/55353010-3f90f880-5490-11e9-8a95-f969e3f97100.png">

<img width="806" alt="contacts" src="https://user-images.githubusercontent.com/39039142/55353217-c219b800-5490-11e9-810b-81ff5ccd72ef.png">
<img width="1169" alt="confirmedunconfirmed" src="https://user-images.githubusercontent.com/39039142/55353219-c34ae500-5490-11e9-8242-ef2b2ac92628.png">




