# Desarrollo de una Aplicación en SSR con Next.js

Se ha desarrollado una aplicación web con Next.js utilizando SSR (Server-Side Rendering) para optimizar la carga de datos. Permite a los usuarios explorar una lista de películas populares, buscar películas por título y ver detalles específicos de cada película. 

# Instrucciones para Ejecutar el Proyecto

1. Clonar el repositorio:
    git clone https://github.com/tu_usuario/movie-explorer-next.git
    cd movie-explorer-next

2. Instalar dependencias:
    npm install

 3. Iniciar el servidor de desarrollo:
    npm run dev

# Estructura del Proyecto

/movie-explorer-next
│── app/
│   ├── layout.js      # Diseño principal (Navbar, Footer, etc.)
│   ├── page.js        # Página de inicio (Lista de películas populares)
│   ├── search/
│   │   ├── page.js    # Página de búsqueda de películas
│   ├── movie/
│   │   ├── [id]/
│   │   │   ├── page.js  # Página de detalles de la película

