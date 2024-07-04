## SonarQube for code quality and code security

### Use Dockerized SonarQube

```
$ docker-compose up -d
$ docker-compose ps
```

NAME IMAGE COMMAND SERVICE CREATED STATUS PORTS
sonarqube sonarqube "/opt/sonarqube/dock…" sonarqube About a minute ago Up About a minute 0.0.0.0:9000->9000/tcp
sonarqube-database postgres:12 "docker-entrypoint.s…" sonarqube-database About a minute ago Up About a minute 0.0.0.0:5432->5432/tcp

## SonarQube Admin (Demo)

1. Go to Admin URL: [http://localhost:9000/](http://localhost:9000/), first login using default admin account.
   Login: admin, Password: admin

2. Set up a local project. Analysis Method > Locally, get a token
   Token: sqp_64822b8bc44d90353015520a3a7e99ccc9f78af8

3. Run analysis on your project, download and unzip the Scanner.
   I use [SonarScanner CLI Docker Image](https://hub.docker.com/r/sonarsource/sonar-scanner-cli).

   I use local docker and you can find the host.url from
   Go to System References --> Network --> Advanced --> Open TCP/IP tabs --> copy the IPv4 Address.

```
$ docker run --rm \

  # Docker Mount local source code repo "${YOUR_REPO}:/usr/src"
  -v "/Users/davis_chang/code/nextjs-on-demand-isr/app:/usr/src" \
  sonarsource/sonar-scanner-cli \
  -Dsonar.projectKey=nextjs-on-demand-isr \
  -Dsonar.sources=. \

  # Docker SONARQUBE_URL
  -Dsonar.host.url=http://192.168.8.172:9000 \

  # SONARQUBE Token
  -Dsonar.token=sqp_64822b8bc44d90353015520a3a7e99ccc9f78af8
```

4. Find the Result. Go to Admin URL [http://localhost:9000/projects](http://localhost:9000/projects)
