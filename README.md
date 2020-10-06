# API de jogos

**Contratos**

| Recurso | Descrição |
| --- | --- |
| `/jogos` | Retorna todas os jogos da API |
```json
    [
        {
            "id": 1070,
            "nome": "Super Mario World",
            "genero": "Plataform",
            "plataformas": "Wii, New Nintendo 3DS, Wii U, Super Nintendo Entertainment System (SNES)",
            "capa": "https://images.igdb.com/igdb/image/upload/t_cover_big/co23jy.jpg"    
       }, ...
    ]
```
| Recurso | Descrição |
| --- | --- |
| `/jogos/:id` | Retorna apenas os dados do jogo com um determinado id |
```json
    {
        "id": 1070,
        "nome": "Super Mario World",
        "genero": "Plataform",
        "plataformas": "Wii, New Nintendo 3DS, Wii U, Super Nintendo Entertainment System (SNES)",
        "data_lancamento": 659145600,
        "slug": "super-mario-world",
        "resumo": "Super Mario World is a jump-and-run platformer and a follow-up to Super Mario Bros. 3. The game retains many of the elements that debuted in Super Mario Bros. 3, such as the world map and Koopaling boss fights, while introducing a large variety of new gameplay mechanics, such as an expanded and less linear world map and the ability to save the game. Much of the game\u0027s introduced characters, game mechanics, and artistic themes influenced later titles in the Mario series. The game was released to best-selling status on the SNES, received large amounts of critical acclaim, and is commonly seen on Nintendo\u0027s best games of all times on various critic listings.",
        "empresa":"Nintendo EAD",
        "capa": "https://images.igdb.com/igdb/image/upload/t_cover_big/co23jy.jpg"    
    }
```