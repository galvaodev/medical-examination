# Exames Médico

Projeto e um teste pra realizamos um cadastro de um exame, onde enviamos algumas informações e armazenamos para futuras consultas.

## Deploy Front/Back

Para fazer o deploy desse projeto, acesse até a pasta (/front) e rode os seguinte comandos.

```bash
  docker-compose up --build
```

Em seguida acesse a pasta (/api) e rode o seguinte comando.

```bash
  docker build -t medial .
  docker run -p 3000:3000 medical
```

## Armazenamento

Todo armazenamento e em cache, não utilizamos nenhum banco apenas a simulção de um mongodb em cache.
