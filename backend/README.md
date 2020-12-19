# Backend Documentation
## Hackathon Routes
``/hackathon``
- Gets a list of all hackathons.

``/hackathon/current``
- Gets the current active hackathon.

``/hackathon/new``
- Creates a new hackathon.

## Project Routes
``/project``
- Gets a list of matching projects.
- Query parameters:
    - projectId: the unique identifier for a project.
    - hackathonId: the unique identifier for a hackathon.