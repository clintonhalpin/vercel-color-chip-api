# vercel-color-chip-api
A simple API to generate images of colors

Get Started
```
pnpm i
vercel dev
```

API
```
endpoint: http://localhost:3000/api/color-chip
query params:
    - hex: Code without '#' ex. c13c36
    - w (optional): width of chip
    - h (optional): height of chip
```

Examples

![blue](https://vercel-color-chip-api.vercel.app/api/color-chip?hex=0b2942&w=200&h=6)

![darker](https://vercel-color-chip-api.vercel.app/api/color-chip?hex=01111d&w=200&h=6)

![light](https://vercel-color-chip-api.vercel.app/api/color-chip?hex=a2bffc&w=200&h=6)

