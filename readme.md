![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

## Using this component

`linkable-title` is available in npm and CDN

### CDN

-  `<script type="module" src="https://cdn.jsdelivr.net/npm/linkable-title@latest/dist/linkable-title/linkable-title.esm.js"></script>`
-  `<script nomodule src="https://cdn.jsdelivr.net/npm/linkable-title@latest/dist/linkable-title/linkable-title.js"></script>`

add the script tags in your html and the component will get lazy loaded.

### Framework integration

Please refer to the [StencilJS docs](https://stenciljs.com/docs/overview) for instructions on how to integrate with your favourite JavaScript framework.

## Usage

### Linkable-title

`<linkable-title>` element is meant to be used like a heading element. You need to specify an `id` attribute for it to know what to link to.

### Default usage

```html
<linkable-title tag="h1" id="heading-1">I'm a heading and I can be linked</linkable-title>
```

### Custom icon
```html
<linkable-title tag="h2" id="heading-2">
  <div slot="icon">
    <!-- go nuts here -->
    <small>link</small>
  </div>
  I'm linkable with custom icon (not a pretty one)
</linkable-title>
```

### No icon
```html
<linkable-title tag="h2" id="heading-3" no-icon>
  I'm another heading with no icon
</linkable-title>
```

You can use CSS variables to change the icon spacing

```css
/* defaults */
linkable-title {
  --icon-width: 2rem;
  --icon-gap: 0.4rem;
}
```



## Properties

| Property | Attribute | Description                                       | Type      | Default |
| -------- | --------- | ------------------------------------------------- | --------- | ------- |
| `noIcon` | `no-icon` | If there's an icon to be displayed on hover/focus | `boolean` | `false` |
| `tag`    | `tag`     | HTML tag to be used for the content               | `string`  | `'h4'`  |
