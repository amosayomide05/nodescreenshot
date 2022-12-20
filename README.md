# NodeScreenshot by amosayomide05
This module lets you easily create screenshots of web pages for free without the use of any API.

## Installation

Using `npm`:

	npm install screenshot

### Take a screenshot

```js
var nodeshot = require('@amosayomide05/nodescreenshot');

const screenshot = await takeScreenshot('https://amosayomide05.github.io');
```

Note that this function returns a Promise that resolves with a Buffer containing the screenshot data. You can use the Buffer class to save the screenshot to a file or manipulate the data in some other way.
