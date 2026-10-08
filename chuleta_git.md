# Chuleta Git Resumida

## Inicios
* **`git init`** ➔ Crea un repositorio local nuevo.
* **`git clone [url]`** ➔ Descarga un repositorio de internet.

## Cambios (Tu día a día)
* **`git status`** ➔ Muestra qué archivos han cambiado.
* **`git add .`** ➔ Añade todos los archivos cambiados al área de preparación (usa `git add [archivo]` para uno solo).
* **`git commit -m "mensaje"`** ➔ Guarda los cambios añadidos con un mensaje descriptivo.
* **`git stash`** ➔ Guarda cambios a medias sin hacer commit (los aparta temporalmente).
* **`git stash pop`** ➔ Recupera esos cambios guardados temporalmente.

## Sincronización (Remoto)
* **`git pull`** ➔ Descarga y aplica los cambios del servidor remoto a tu rama actual.
* **`git push`** ➔ Sube tus commits locales al servidor remoto.
* **`git fetch`** ➔ Solo descarga los cambios del remoto (pero no los aplica ni los mezcla).

## Ramas (Branches)
* **`git branch`** ➔ Lista tus ramas locales.
* **`git branch [nombre]`** ➔ Crea una rama nueva.
* **`git checkout [rama]`** ➔ Cambia a esa rama (también puedes usar `git switch [rama]`).
* **`git checkout -b [nombre]`** ➔ Crea una rama nueva y cambia a ella de golpe.
* **`git merge [rama]`** ➔ Fusiona la rama indicada hacia la rama en la que estás actualmente.

## Historial y Deshacer
* **`git log`** ➔ Muestra el historial de commits.
* **`git diff`** ➔ Muestra los cambios exactos línea por línea.
* **`git reset [archivo]`** ➔ Saca un archivo del `git add` (sin borrar tus modificaciones, solo lo quita del próximo commit).
* **`git reset --hard`** ➔ **¡Peligro!** Borra definitivamente todos los cambios locales que no hayas guardado en un commit.
