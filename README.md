# ChromeExtensionTemplateForDeno

# Required development tools
- deno : `v1.29.1` or higher

Haven't installed Deno yet?  
Let's install Deno now! ↓↓↓↓  
https://deno.land/

# Manifest
- `public\manifest.json` manifest version 3

# Build

```
deno task build
```
Build output `/dist`

# VSCode settings
- Enable deno
- Enable lint
- Enable format on save

# Type safety
The following types used in extensions have type safety enabled.

- `chrome`
- DOM such as `Document` and `Element`
