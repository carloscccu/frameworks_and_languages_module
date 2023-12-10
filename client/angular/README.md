# Angular Application

## Overview
This repository contains an angular application. Angular is front-end framework, designed to be more expressive and robust in handling web applications.

## Running the Application

### Setup
Modify the `docker-compose.yml` file at the root of this project to include the following service configuration:

```yaml
services:
  server:
    build:
      context: ./client/angular/
    # ... other configurations