# CV for Carl

```
╔═╗┌─┐┌┬┐┌─┐┬ ┬┌┬┐┌─┐┬─┐  ╔═╗┌─┐┬─┐┬  
║  │ ││││├─┘│ │ │ ├┤ ├┬┘  ║  ├─┤├┬┘│  
╚═╝└─┘┴ ┴┴  └─┘ ┴ └─┘┴└─  ╚═╝┴ ┴┴└─┴─┘
```


As a personal preference, I like to bundle all of the component files (source, Storybook stories, image files, and tests) into a folder for organization and portability.

* Components are written using JSX.
* Components are styled with styled-components.
* Created use Gatsby JS (using React JS).


Gatsby can be a little *fragile*.
If you should receive an error, run the following in a bash shell before starting Gatsby JS:

> `Error: error:0308010C:digital envelope routines::unsupported`

`export NODE_OPTIONS=--openssl-legacy-provider`