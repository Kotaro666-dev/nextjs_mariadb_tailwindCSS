# 技術スタック

フロントエンド：Next.js(TypeScript), Tailwind CSS
バックエンド：Next.js(TypeScript), MariaDB

# バージョン情報

node:
Next.js:
React:
MariaDB:

# 開発メモ

## webコンテナ起動時にエラー発生し、exit(1)してしまう

```
➜  nextjs_mariadb_tailwindCSS git:(master) ✗ dc ps
NAME                               COMMAND                  SERVICE             STATUS              PORTS
nextjs_mariadb_tailwindcss-db-1    "docker-entrypoint.s…"   db                  running             0.0.0.0:3306->3306/tcp
nextjs_mariadb_tailwindcss-web-1   "docker-entrypoint.s…"   web                 exited (1)
➜  nextjs_mariadb_tailwindCSS git:(master) ✗ dc logs
nextjs_mariadb_tailwindcss-web-1  |
nextjs_mariadb_tailwindcss-web-1  | > srcs@0.1.0 dev
nextjs_mariadb_tailwindcss-web-1  | > next dev
nextjs_mariadb_tailwindcss-web-1  |
nextjs_mariadb_tailwindcss-web-1  | ready - started server on 0.0.0.0:3000, url: http://localhost:3000
nextjs_mariadb_tailwindcss-web-1  | warn  - Attempted to load @next/swc-linux-x64-gnu, but it was not installed
nextjs_mariadb_tailwindcss-web-1  | warn  - Attempted to load @next/swc-linux-x64-gnux32, but it was not installed
nextjs_mariadb_tailwindcss-web-1  | warn  - Attempted to load @next/swc-linux-x64-musl, but it was not installed
nextjs_mariadb_tailwindcss-web-1  | error - Failed to load SWC binary for linux/x64, see more info here: https://nextjs.org/docs/messages/failed-loading-swc
nextjs_mariadb_tailwindcss-web-1  | npm notice
nextjs_mariadb_tailwindcss-web-1  | npm notice New minor version of npm available! 8.11.0 -> 8.12.1
nextjs_mariadb_tailwindcss-web-1  | npm notice Changelog: <https://github.com/npm/cli/releases/tag/v8.12.1>
nextjs_mariadb_tailwindcss-web-1  | npm notice Run `npm install -g npm@8.12.1` to update!
nextjs_mariadb_tailwindcss-web-1  | npm notice
```

原因は、next.jsのコンパイラがRUST製になってから互換性がない環境だとエラーが発生するため。

> SWC requires a binary be downloaded that is compatible specific to your system. In some cases this binary may fail to load either from failing to download or an incompatibility with your architecture.

https://nextjs.org/docs/messages/failed-loading-swc

以下の方法で、RUST製コンパイラを使用しないように変更したことで解決した。

https://stackoverflow.com/questions/69816589/next-failed-to-load-swc-binary/69820670#69820670

# Next.js に tailwind CSS を導入する

以下の公式ドキュメント通りに実行と Dockerfile に追記する

https://tailwindcss.com/docs/guides/nextjs
