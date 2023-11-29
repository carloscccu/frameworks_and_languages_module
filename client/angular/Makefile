# Define the Docker image name
DOCKER_IMAGE:=client

# Target for running the app locally
run_local: client/angular/package.json
	@echo "Starting the Angular app on port 8001"
	@cd client/angular && PORT=8001 npm start

# Target to ensure that package.json exists
client/angular/package.json:
	@echo "Creating new Angular app..."
	@npx @angular/cli new angular-app

# Target for building the Docker image
build: client/angular/package.json
	@echo "Building the Docker image..."
	@docker build --tag $(DOCKER_IMAGE) -f client/angular/Dockerfile client/angular

# Target for running the Docker container
run:
	@echo "Running the Docker container on port 8001..."
	@docker run --rm -it --publish 8001: $(DOCKER_IMAGE)


