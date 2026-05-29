# Docker and PostgreSQL: Data Engineering Workshop

## Question 1. Understanding Docker images

Run docker with the `python:3.13` image. Use an entrypoint `bash` to interact with the container.

What's the version of `pip` in the image?

- 25.3
- 24.3.1
- 24.2.1
- 23.3.1

None? :anguished:
```
root@ca56e8aa1f04:/# python -V
Python 3.13.13
root@ca56e8aa1f04:/# pip -V
pip 26.0.1 from /usr/local/lib/python3.13/site-packages/pip (python 3.13)
```
For me it's 26.0.1 :sunglasses:

## Question 2. Understanding Docker networking and docker-compose

Given the following `docker-compose.yaml`, what is the `hostname` and `port` that pgadmin should use to connect to the postgres database?
- postgres:5433
- localhost:5432
- db:5433
- postgres:5432 
- ~~db:5432~~ :nerd_face:

I think its db:5432 cause 'postgress' its just a label for the cointainer and 'db' is the real name of the host and port 5432 becasue
5433 its for the main device and therefore 5432 is for the vm or contatiner.
