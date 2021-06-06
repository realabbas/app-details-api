### App details API

#### Installation

`git clone https://github.com/realabbas/app-details-api.git`

`cd app-details-api`

`npm install`

`node app.js`

#### API Endpoints

| Method | Endpoint        | Params | Details |
|--------|-----------------|--------|---------|
| GET    | /v1/details/:id | id     | App ID  |

#### Response Schema

| Property                  | Type    | Value |
|---------------------------|---------|-------|
| id                        | string  |       |
| logo                      | string  | url   |
| app_name                  | string  |       |
| app_url                   | string  | url   |
| category                  | string  |       |
| contains_ads              | boolean |       |
| publisher_account_url     | string  | url   |
| publisher_name            | string  |       |
| preview_images            | array   |       |
| youtube_trailer           | string  | url   |
| description               | string  |       |
| application_meta_data     | object  |       |
| latest_update_description | string  |       |
| ratings_data              | array   |       |
