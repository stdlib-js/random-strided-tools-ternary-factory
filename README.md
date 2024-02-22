<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

<!-- lint disable maximum-heading-length -->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# ternaryFactory

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create a factory function for filling strided arrays with pseudorandom values drawn from a ternary PRNG.



<section class="usage">

## Usage

```javascript
import ternaryFactory from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-strided-tools-ternary-factory@esm/index.mjs';
```
The previous example will load the latest bundled code from the esm branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/random-strided-tools-ternary-factory/tags). For example,

```javascript
import ternaryFactory from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-strided-tools-ternary-factory@v0.2.1-esm/index.mjs';
```

#### ternaryFactory( prng )

Returns a factory function for filling strided arrays with pseudorandom values drawn from a ternary PRNG.

```javascript
import triangular from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-triangular@esm/index.mjs';

var factory = ternaryFactory( triangular );
// returns <Function>
```

The function has the following parameters:

-   **prng**: ternary pseudorandom number generator.

* * *

#### factory( \[options] )

Returns a function for filling strided arrays with pseudorandom values drawn from a ternary PRNG.

```javascript
import triangular from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-triangular@esm/index.mjs';

var factory = ternaryFactory( triangular );
// returns <Function>

var random = factory();
// returns <Function>
```

The function has the following parameters:

-   **options**: function options.

The function supports the following options:

-   **prng**: pseudorandom number generator which generates uniformly distributed pseudorandom numbers.
-   **seed**: pseudorandom value generator seed.
-   **state**: pseudorandom value generator state.
-   **copy**: boolean indicating whether to copy a provided pseudorandom value generator state.

To use a custom PRNG as the underlying source of uniformly distributed pseudorandom numbers, set the `prng` option.

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs';
import minstd from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-minstd@esm/index.mjs';
import triangular from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-triangular@esm/index.mjs';

var factory = ternaryFactory( triangular );
// returns <Function>

var opts = {
    'prng': minstd.normalized
};

var random = factory( opts );
// returns <Function>

var out = new Float64Array( 10 );
random( out.length, [ 2.0 ], 0, [ 5.0 ], 0, [ 3.0 ], 0, out, 1 );
```

To seed the underlying pseudorandom number generator, set the `seed` option.

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs';
import triangular from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-triangular@esm/index.mjs';

var factory = ternaryFactory( triangular );
// returns <Function>

var opts = {
    'seed': 12345
};

var random = factory( opts );
// returns <Function>

var out = new Float64Array( 10 );
random( out.length, [ 2.0 ], 0, [ 5.0 ], 0, [ 3.0 ], 0, out, 1 );
```

* * *

#### random( N, param1, sp1, param2, sp2, param3, sp3, out, so )

Fills a strided array with pseudorandom values drawn from a ternary PRNG.

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs';
import triangular from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-triangular@esm/index.mjs';

var factory = ternaryFactory( triangular );
// returns <Function>

var random = factory();
// returns <Function>

var out = new Float64Array( 10 );
// returns <Float64Array>

var v = random( out.length, [ 2.0 ], 0, [ 5.0 ], 0, [ 3.0 ], 0, out, 1 );
// returns <Float64Array>
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **param1**: first PRNG parameter.
-   **sp1**: index increment for `param1`.
-   **param2**: second PRNG parameter.
-   **sp2**: index increment for `param2`.
-   **param3**: third PRNG parameter.
-   **sp3**: index increment for `param3`.
-   **out**: output array.
-   **so**: index increment for `out`.

The `N` and stride parameters determine which strided array elements are accessed at runtime. For example, to access every other value in `out`,

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs';
import triangular from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-triangular@esm/index.mjs';

var factory = ternaryFactory( triangular );
// returns <Function>

var random = factory();
// returns <Function>

var out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

random( 3, [ 2.0 ], 0, [ 5.0 ], 0, [ 3.0 ], 0, out, 2 );
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs';
import triangular from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-triangular@esm/index.mjs';

var factory = ternaryFactory( triangular );
// returns <Function>

var random = factory();
// returns <Function>

// Initial arrays:
var param1 = new Float64Array( [ 2.0, 2.0, 2.0, 2.0, 2.0, 2.0 ] );
var param2 = new Float64Array( [ 5.0, 5.0, 5.0, 5.0, 5.0, 5.0 ] );
var param3 = new Float64Array( [ 3.0, 3.0, 3.0, 3.0, 3.0, 3.0 ] );

// Create offset views:
var view1 = new Float64Array( param1.buffer, param1.BYTES_PER_ELEMENT*3 ); // start at 4th element
var view2 = new Float64Array( param2.buffer, param2.BYTES_PER_ELEMENT*2 ); // start at 3rd element
var view3 = new Float64Array( param3.buffer, param3.BYTES_PER_ELEMENT*1 ); // start at 2nd element

// Create an output array:
var out = new Float64Array( 3 );

// Fill the output array:
random( out.length, view1, -1, view2, 1, view3, 1, out, 1 );
```

#### random.ndarray( N, param1, sp1, op1, param2, sp2, op2, param3, sp3, op3, out, so, oo )

Fills a strided array with pseudorandom values drawn from a ternary PRNG using alternative indexing semantics.

<!-- eslint-disable max-len -->

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs';
import triangular from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-triangular@esm/index.mjs';

var factory = ternaryFactory( triangular );
// returns <Function>

var random = factory();
// returns <Function>

var out = new Float64Array( 10 );
// returns <Float64Array>

var v = random.ndarray( out.length, [ 2.0 ], 0, 0, [ 5.0 ], 0, 0, [ 3.0 ], 0, 0, out, 1, 0 );
// returns <Float64Array>
```

The function has the following additional parameters:

-   **op1**: starting index for `param1`.
-   **op2**: starting index for `param2`.
-   **op3**: starting index for `param3`.
-   **oo**: starting index for `out`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying `buffer`, the offset parameters support indexing semantics based on starting indices. For example, to access every other value in `out` starting from the second value,

```javascript
import triangular from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-triangular@esm/index.mjs';

var factory = ternaryFactory( triangular );
// returns <Function>

var random = factory();
// returns <Function>

var out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

random.ndarray( 3, [ 2.0 ], 0, 0, [ 5.0 ], 0, 0, [ 3.0 ], 0, 0, out, 2, 1 );
```

* * *

#### random.PRNG

The underlying pseudorandom number generator.

```javascript
import triangular from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-triangular@esm/index.mjs';

var factory = ternaryFactory( triangular );
// returns <Function>

var random = factory();
// returns <Function>

var prng = random.PRNG;
// returns <Function>
```

#### random.seed

The value used to seed the underlying pseudorandom number generator.

```javascript
import triangular from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-triangular@esm/index.mjs';

var factory = ternaryFactory( triangular );
// returns <Function>

var random = factory();
// returns <Function>

var seed = random.seed;
// returns <Uint32Array>
```

If the `factory` function is provided a PRNG for uniformly distributed numbers, the associated property value on the returned function is `null`.

```javascript
var minstd = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-minstd-shuffle' ).normalized;
import triangular from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-triangular@esm/index.mjs';

var factory = ternaryFactory( triangular );
// returns <Function>

var random = factory({
    'prng': minstd
});
// returns <Function>

var seed = random.seed;
// returns null
```

#### random.seedLength

Length of underlying pseudorandom number generator seed.

```javascript
import triangular from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-triangular@esm/index.mjs';

var factory = ternaryFactory( triangular );
// returns <Function>

var random = factory();
// returns <Function>

var len = random.seedLength;
// returns <number>
```

If the `factory` function is provided a PRNG for uniformly distributed numbers, the associated property value on the returned function is `null`.

```javascript
var minstd = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-minstd-shuffle' ).normalized;
import triangular from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-triangular@esm/index.mjs';

var factory = ternaryFactory( triangular );
// returns <Function>

var random = factory({
    'prng': minstd
});
// returns <Function>

var len = random.seedLength;
// returns null
```

#### random.state

Writable property for getting and setting the underlying pseudorandom number generator state.

```javascript
import triangular from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-triangular@esm/index.mjs';

var factory = ternaryFactory( triangular );
// returns <Function>

var random = factory();
// returns <Function>

var state = random.state;
// returns <Uint32Array>
```

If the `factory` function is provided a PRNG for uniformly distributed numbers, the associated property value on the returned function is `null`.

```javascript
var minstd = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-minstd-shuffle' ).normalized;
import triangular from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-triangular@esm/index.mjs';

var factory = ternaryFactory( triangular );
// returns <Function>

var random = factory({
    'prng': minstd
});
// returns <Function>

var state = random.state;
// returns null
```

#### random.stateLength

Length of underlying pseudorandom number generator state.

```javascript
import triangular from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-triangular@esm/index.mjs';

var factory = ternaryFactory( triangular );
// returns <Function>

var random = factory();
// returns <Function>

var len = random.stateLength;
// returns <number>
```

If the `factory` function is provided a PRNG for uniformly distributed numbers, the associated property value on the returned function is `null`.

```javascript
var minstd = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-minstd-shuffle' ).normalized;
import triangular from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-triangular@esm/index.mjs';

var factory = ternaryFactory( triangular );
// returns <Function>

var random = factory({
    'prng': minstd
});
// returns <Function>

var len = random.stateLength;
// returns null
```

#### random.byteLength

Size (in bytes) of underlying pseudorandom number generator state.

```javascript
import triangular from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-triangular@esm/index.mjs';

var factory = ternaryFactory( triangular );
// returns <Function>

var random = factory();
// returns <Function>

var sz = random.byteLength;
// returns <number>
```

If the `factory` function is provided a PRNG for uniformly distributed numbers, the associated property value on the returned function is `null`.

```javascript
var minstd = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-minstd-shuffle' ).normalized;
import triangular from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-triangular@esm/index.mjs';

var factory = ternaryFactory( triangular );
// returns <Function>

var random = factory({
    'prng': minstd
});
// returns <Function>

var sz = random.byteLength;
// returns null
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

* * *

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import triangular from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-triangular@esm/index.mjs';
import zeros from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-zeros@esm/index.mjs';
import zeroTo from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-zero-to@esm/index.mjs';
import logEach from 'https://cdn.jsdelivr.net/gh/stdlib-js/console-log-each@esm/index.mjs';
import ternaryFactory from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-strided-tools-ternary-factory@esm/index.mjs';

// Create a PRNG factory function:
var factory = ternaryFactory( triangular );
// returns <Function>

// Specify a PRNG seed:
var opts = {
    'seed': 1234
};

// Create a function for filling strided arrays:
var rand1 = factory( opts );
// returns <Function>

// Create an array:
var x1 = zeros( 10, 'float64' );

// Fill the array with pseudorandom numbers:
rand1( x1.length, [ 2.0 ], 0, [ 5.0 ], 0, [ 3.0 ], 0, x1, 1 );

// Create another function for filling strided arrays:
var rand2 = factory( opts );
// returns <Function>

// Create a second array:
var x2 = zeros( 10, 'generic' );

// Fill the array with the same pseudorandom numbers:
rand2( x2.length, [ 2.0 ], 0, [ 5.0 ], 0, [ 3.0 ], 0, x2, 1 );

// Create a list of indices:
var idx = zeroTo( x1.length, 'generic' );

// Print the array contents:
logEach( 'x1[%d] = %.2f; x2[%d] = %.2f', idx, x1, idx, x2 );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/random-strided-tools-ternary-factory.svg
[npm-url]: https://npmjs.org/package/@stdlib/random-strided-tools-ternary-factory

[test-image]: https://github.com/stdlib-js/random-strided-tools-ternary-factory/actions/workflows/test.yml/badge.svg?branch=v0.2.1
[test-url]: https://github.com/stdlib-js/random-strided-tools-ternary-factory/actions/workflows/test.yml?query=branch:v0.2.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/random-strided-tools-ternary-factory/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/random-strided-tools-ternary-factory?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/random-strided-tools-ternary-factory.svg
[dependencies-url]: https://david-dm.org/stdlib-js/random-strided-tools-ternary-factory/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/random-strided-tools-ternary-factory/tree/deno
[deno-readme]: https://github.com/stdlib-js/random-strided-tools-ternary-factory/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/random-strided-tools-ternary-factory/tree/umd
[umd-readme]: https://github.com/stdlib-js/random-strided-tools-ternary-factory/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/random-strided-tools-ternary-factory/tree/esm
[esm-readme]: https://github.com/stdlib-js/random-strided-tools-ternary-factory/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/random-strided-tools-ternary-factory/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/random-strided-tools-ternary-factory/main/LICENSE

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
