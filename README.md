# Haltero

App de **halterofilia** para iPhone: programación de 42 sesiones con los kilos calculados a partir de tus RMs, discos por lado, dibujo de la barra, contador de series en los descansos, resultados y copia de seguridad.

Es una **app web instalable**, así que no hace falta Mac, Xcode ni cuenta de desarrollador de Apple.

## Publicarla (una sola vez)

1. Sube este repo a GitHub (con el nombre `Haltero`). Tiene que ser **público** para usar GitHub Pages gratis.
2. En GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**. Elige **Branch: `main`**, carpeta **`/ (root)`** y pulsa **Save**.
3. Al minuto, la app estará en `https://<tu-usuario>.github.io/Haltero/`.

## Instalarla en el iPhone

1. Abre esa dirección en **Safari** (tiene que ser Safari).
2. Pulsa **Compartir → Añadir a pantalla de inicio → Añadir**.
3. Ábrela siempre desde el icono: se ve a pantalla completa y funciona **sin conexión**.

## Actualizarla

Cambia los archivos, sube **`VERSION` en `sw.js`** (por ejemplo, `haltero-v2`) y haz push. La próxima vez que abras la app con internet, se descarga la nueva versión; ciérrala y vuelve a abrirla para verla.

## Archivos

- `index.html`: la app.
- `programs/halterofilia.js`: las 42 sesiones.
- `sw.js`: guarda la app para que funcione sin internet.
- `manifest.webmanifest` e `icons/`: nombre e icono en la pantalla de inicio.

Los RMs, los resultados y las series marcadas se guardan en el iPhone, dentro de la app. Si borras la app de la pantalla de inicio, se borran. Antes, haz una copia en **Ajustes → Copia de seguridad**. Las copias de la app Android (Vida) también se pueden restaurar aquí.
