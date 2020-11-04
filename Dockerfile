FROM node:12

# COPY [".", "/usr/src/"]
COPY ["package.json", "package-lock.json", "/usr/src/"]

# seria lo mismo que hacer cd project, pero dentro del contexto de Docker
WORKDIR "/usr/src"

RUN ["npm", "install"]

COPY [".", "/usr/src/"]

EXPOSE 3000
CMD ["npm", "run", "build"]
CMD ["npm", "run", "start"]