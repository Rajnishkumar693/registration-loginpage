# Registration Login Page

A full-stack web application that provides user registration and login functionality using Spring Boot, PostgreSQL, HTML, CSS, and JavaScript.

## Features

* User Registration (Signup)
* User Login Authentication
* Dashboard Page After Successful Login
* Invalid Credential Validation
* PostgreSQL Database Integration
* REST API Based Backend
* Responsive User Interface

---

## Tech Stack

### Backend

* Java
* Spring Boot
* Spring Data JPA
* Maven

### Frontend

* HTML5
* CSS3
* JavaScript

### Database

* PostgreSQL

---

## Project Structure

```text
registration-loginpage
│
├── src
│   ├── main
│   │   ├── java
│   │   │   └── com/example/demo
│   │   │       ├── controller
│   │   │       │   └── UserController.java
│   │   │       ├── entity
│   │   │       │   └── User.java
│   │   │       ├── repository
│   │   │       │   └── UserRepository.java
│   │   │       ├── service
│   │   │       │   └── UserService.java
│   │   │       └── DemoApplication.java
│   │   │
│   │   └── resources
│   │       ├── application.properties
│   │       └── static
│   │           ├── index.html
│   │           ├── login.html
│   │           ├── dashboard.html
│   │           ├── style.css
│   │           ├── script.js
│   │           └── login.js
│
├── pom.xml
└── README.md
```

---

## Application Workflow

### Signup

1. User enters:

   * Name
   * Email
   * Mobile Number
   * Password

2. Data is sent to:

```http
POST /api/users/signup
```

3. User details are stored in PostgreSQL database.

---

### Login

1. User enters:

   * Email
   * Password

2. Data is sent to:

```http
POST /api/users/login
```

3. System validates credentials.

4. If credentials are valid:

```text
Login Successful
```

User is redirected to Dashboard.

5. If credentials are invalid:

```text
Invalid Email or Password
```

User remains on Login page.

---

## Database Table

### users

| Column   | Type    |
| -------- | ------- |
| id       | BIGINT  |
| name     | VARCHAR |
| email    | VARCHAR |
| mobile   | VARCHAR |
| password | VARCHAR |

---

## API Endpoints

### Register User

```http
POST /api/users/signup
```

Request Body

```json
{
  "name": "Rajnish",
  "email": "rajnish@gmail.com",
  "mobile": "9876543210",
  "password": "12345"
}
```

---

### Login User

```http
POST /api/users/login
```

Request Body

```json
{
  "email": "rajnish@gmail.com",
  "password": "12345"
}
```

---

## Database Configuration

Configure PostgreSQL in:

```properties
src/main/resources/application.properties
```

Example:

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/employee_db
spring.datasource.username=postgres
spring.datasource.password=postgres

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

---

## Run the Project

### Clone Repository

```bash
git clone https://github.com/Rajnishkumar693/registration-loginpage.git
```

### Navigate to Project

```bash
cd registration-loginpage
```

### Run Spring Boot Application

```bash
./mvnw spring-boot:run
```

or

```bash
mvn spring-boot:run
```

### Open Browser

```text
http://localhost:8080
```

---

## Future Enhancements

* Password Encryption (BCrypt)
* JWT Authentication
* Forgot Password Functionality
* Session Management
* User Profile Management
* Admin Dashboard
* Login Statistics
* Audit Logs

---

## Author

**Rajnish Kumar**

Java | Spring Boot | PostgreSQL | Web Development
