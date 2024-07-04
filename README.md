# Spotfaker - monte sua máquina do tempo e cards personalizados!

Este é um projeto pessoal desenvolvido em NextJs integrados a alguns frameworks para um desafio pessoal. 

O projeto consiste em um web app que permite ao usuário criar uma imagem de **Máquina do Tempo** idêntica a criada pelo recurso do app Spotify, mas totalmente personalizável pelo usuário. Junto dela, aprimorei uma ferramenta de criação de **cards com letras** que já havia feito antes, também no mesmo design do spotify, mas sem as limitações de linhas e tamanho.


# Ferramentas


## Principal

A base do app é feita em react utilizando typescript e estruturada em NextJs. A estilização é feita com Tailwind CSS e um pouco de CSS puro.

## Spotify API

A integração com a Spotify Web Api permite que o usuário busque items da própria base do spotify, facilitando o princípio da aplicação de mostrar os nomes e imagens de artistas e músicas.

## Download da imagem

O download da imagem é possível utilizando o pacote html-to-image, que possui ótimas funcionalidades para facilitar esse tipo de ação.

## Upload de imagem
Também é possível que o usuário faça upload de qualquer imagem para ser utilizada, isso foi montado com ferramentas do pacote @vercel/blob.

## Extract Colors

Através do pacote extract-colors foi possível extrair as cores mais presentes nas imagens (tanto do próprio spotify quanto enviadas pelo usuário).

## Ícones e animações

Os ícones da aplicação são da biblioteca Lucide-react, já as animações e principalmente o componente de lista onde é possível reordenar músicas e artistas foram montadas com framer-motion.


# Teste você mesmo

Para clonar este repositório e testar você precisa de seguir alguns requisitos: 

- Ter um pouco de familiaridade com Nextjs
- Criar um [app no Spotify for Developers](https://developer.spotify.com/documentation/web-api/tutorials/getting-started#create-an-app)
- Criar um [projeto vercel para usar o @vercel/blob](https://vercel.com/docs/storage/vercel-blob/using-blob-sdk)

Primeiro, você precisa clonar este repositório para o seu dipositivo através do terminal:

```
	git clone https://github.com/kaizinbr/spotfaker.git
```

Depois, instale os comandos com ```npm install```, e com os apps da Web Api do Spotify e Vercel Blob criados, você precisa copiar as environment variables para o arquivo **.env.exemplo** e renomeá-lo apenas para **.env**.

```
	BLOB_READ_WRITE_TOKEN=seu_token_aqui
	SPOTIFY_CLIENT_ID=seu_ID_Aqui
	SPOTIFY_CLIENT_SECRET=seu_secret_aqui
	SPOTIFY_REFRESH_TOKEN=esse_pode_ser_uma_string_aleatória_como_txt_4th_gen_leaders
```

Concluídos os passos, basta executar ```npm run dev``` ou ```npm run build``` e o projeto começará a rodar em ```http://localhost:3000/```
