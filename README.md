# Memories-animesh624d 

![Alt Text](https://github.com/animesh624/Memories-animesh624d/blob/main/ReadmeImages/Screenshot%20(166).png)

## ❓ About Project

- Its a memory management Web-APP which has feature of creating, deleting and editing memories.

## [VIEW LIVE DEMO](https://memories-frontend-animesh624.vercel.app/)

## 🚧 Technology Stack

- **Server Enviornment** - NodeJS
- **Framework** - ExpressJS
- **Frontend** - ReactJS, HTML, CSS, Javascript
- **Database** - MongoDB
- **Cloud database service** - MongoDB Atlas
- **Deployment** - Vercel and Render

## 🔨 API Endpoints

`/jobs`
| REQUEST METHODS | ENDPOINTS | DESCRIPTION |
| :-------------- | :-------: | ------------------: |
| GET | /jobs?CATEGORY=MECHANIC | Show all jobs of requested category |
| POST | /jobs | Add new job to DB by recruiter|
| POST | /jobs/:job_id/apply | Applies on a Job |
| GET | /jobs/candidates?CATEGORY=LABOUR | Returns available candidates for requested job|

`/user`
| REQUEST METHODS | ENDPOINTS | DESCRIPTION |
| :-------------- | :-------: | ------------------: |
| POST | /user/register | Adds new user to DB |
