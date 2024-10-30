# Tot ! Custom 1.7.x

## New
`1.7.0`
- Added Partial Body Profile
    - A partial body profile only apply its non default value of a body on the current body, like an overlay.
    - Non default value are marked in blue and with a asterisk.
    - This can be used for example to have a different haircut, different hair color, while not having to duplicate all the values of the main body. This way, when you modify the main one, you don't have to update all of your variations.

## Changed
`1.7.0`
- Body export format has changed since internally the data is structured differently, but old export will be backward compatible.

## Fixed
`1.7.0`
- Dual wielded weapons were not scaled properly