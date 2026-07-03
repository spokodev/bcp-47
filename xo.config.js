/**
 * @import {FlatXoConfig} from 'xo'
 */

/** @type {FlatXoConfig} */
const xoConfig = [
  {
    name: 'default',
    prettier: true,
    rules: {
      complexity: 'off',
      'max-depth': 'off',
      'unicorn/prefer-code-point': 'off'
    },
    space: true
  }
]

export default xoConfig
