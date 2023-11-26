# Define the Docker image name
DOCKER_IMAGE:=client

# Target for running the app locally
run_local: my-app/package.json
	@echo "Starting the app on port 8000"
	@cd my-app && PORT=8000 npm start

# Target to ensure that package.json exists
my-app/package.json:
	@echo "Creating new React app..."
	@npx create-react-app my-app

# Target for building the Docker image
build: my-app/package.json
	@echo "Building the Docker image..."
	@docker build --tag $(DOCKER_IMAGE) .

# Target for running the Docker container
run:
	@echo "Running the Docker container on port 8000..."
	@docker run --rm -it --publish 8000:8000 $(DOCKER_IMAGE)

