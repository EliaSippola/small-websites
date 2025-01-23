@ECHO OFF

:: create .env file

(
ECHO # db username
ECHO DB_USER = "root"
ECHO.
ECHO # db pass
ECHO DB_PASSWORD = ""
ECHO.
ECHO # database name
ECHO DB_DATABASE = "newsdb"
ECHO.
ECHO # db host
ECHO DB_HOST = localhost
ECHO.
ECHO # db port
ECHO DB_PORT = 3306
) > ./.env