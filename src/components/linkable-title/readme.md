# linkable-title



<!-- Auto Generated Below -->


## Usage

### Linkable-title

`<linkable-title>` element is meant to be used like a heading element. You need to specify an `id` attribute for it to know what to link to.

### Default usage

```html
<linkable-title tag="h1" id="heading-1">I'm a heading and I can be linked</linkable-title>
<linkable-title tag="h1" id="heading-2" icon-position="start">I have my icon on the left</linkable-title>
```

### Custom icon
```html
<linkable-title tag="h2" id="heading-3">
  <div slot="icon">
    <!-- go nuts here -->
    <small>link</small>
  </div>
  I'm linkable with custom icon (not a pretty one)
</linkable-title>
```

### No icon
```html
<linkable-title tag="h2" id="heading-4" no-icon>
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

| Property       | Attribute       | Description                                       | Type               | Default |
| -------------- | --------------- | ------------------------------------------------- | ------------------ | ------- |
| `iconPosition` | `icon-position` | Position of icon                                  | `"end" \| "start"` | `'end'` |
| `noIcon`       | `no-icon`       | If there's an icon to be displayed on hover/focus | `boolean`          | `false` |
| `tag`          | `tag`           | HTML tag to be used for the content               | `string`           | `'h4'`  |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
