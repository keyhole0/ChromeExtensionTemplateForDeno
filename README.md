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

caution :
Use the `deno bundle` command to build. As of `v1.29.1` the `deno bundle` does not support NPM yet, so do not reference NPM in your code.  
If you really want to use the npm library now, you may be able to use it by referring to https://unpkg.com/ as a workaround.

# VSCode settings
- Enable deno
- Enable lint
- Enable format on save

# Type safety
The following types used in extensions have type safety enabled.

- `chrome`
- DOM such as `Document` and `Element`
