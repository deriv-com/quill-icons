import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const IllustrativeDepositAndWithdrawalIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g fillOpacity={0.72}>
      <path d='M18.637 16.98c0-.733-.6-1.333-1.333-1.333h-2.667v-1.334h3.334c.366 0 .666-.3.666-.666 0-.367-.3-.667-.666-.667h-1.334v-.667c0-.366-.3-.666-.666-.666-.367 0-.667.3-.667.666v.667h-.667c-.733 0-1.333.6-1.333 1.333v1.334c0 .733.6 1.333 1.333 1.333h2.667v1.333h-3.333c-.367 0-.667.3-.667.667 0 .367.3.667.667.667h1.333v.666c0 .367.3.667.667.667.366 0 .666-.3.666-.667v-.666h.667c.733 0 1.333-.6 1.333-1.334V16.98ZM19.47 22.773c.167-.093.334-.186.487-.293.307-.2.4-.613.2-.92a.668.668 0 0 0-.92-.2 4.993 4.993 0 0 1-.406.24.667.667 0 1 0 .64 1.173Z' />
      <path d='m24.93 7.373-2.826-2.826.273-.274A1.334 1.334 0 0 0 21.431 2h-5.934c-.366 0-.666.3-.666.667v5.92a1.334 1.334 0 0 0 2.273.947l.273-.274 2.827 2.827a5.993 5.993 0 0 1 .713 7.62.664.664 0 0 0 .174.926.67.67 0 0 0 .926-.173 7.336 7.336 0 0 0-.873-9.32l-3.3-3.3a.664.664 0 0 0-.94 0l-.747.747V3.32h5.267l-.747.747c-.26.26-.26.68 0 .94l3.3 3.3c3.86 3.86 4.427 9.926 1.34 14.42a.664.664 0 0 0 .174.926c.113.08.246.12.373.12.213 0 .42-.1.553-.286 3.447-5.02 2.82-11.8-1.493-16.114h.007ZM23.497 24.807c-.5.44-1.033.84-1.593 1.186a.67.67 0 0 0 .347 1.24c.12 0 .24-.033.346-.1a12.73 12.73 0 0 0 1.78-1.326.665.665 0 1 0-.886-.994l.006-.006ZM19.71 27.033c-.186.067-.366.12-.553.18a.668.668 0 0 0 .187 1.307c.06 0 .127-.007.187-.027.206-.06.413-.126.62-.2.346-.12.533-.5.413-.846a.668.668 0 0 0-.847-.414h-.006ZM12.504 9.853a7.17 7.17 0 0 0-.487.287.668.668 0 0 0 .36 1.227.649.649 0 0 0 .36-.107c.134-.087.267-.167.407-.24a.667.667 0 1 0-.64-1.173v.006ZM16.317 22.807a1.334 1.334 0 0 0-1.453.286l-.273.274-2.827-2.827a5.993 5.993 0 0 1-.713-7.62.665.665 0 0 0-.174-.927.67.67 0 0 0-.926.174 7.336 7.336 0 0 0 .873 9.32l3.3 3.3c.26.26.68.26.94 0l.747-.747v5.267h-5.267l.747-.747c.26-.26.26-.68 0-.94l-3.3-3.3C4.13 20.46 3.564 14.393 6.65 9.9a.665.665 0 0 0-.174-.927.665.665 0 0 0-.926.174A12.663 12.663 0 0 0 7.044 25.26l2.827 2.827-.274.273a1.334 1.334 0 0 0 .947 2.273h5.933c.367 0 .667-.3.667-.666v-5.934c0-.54-.32-1.026-.82-1.233l-.007.007ZM8.044 7.987c.16 0 .313-.054.44-.167.5-.44 1.033-.84 1.593-1.187a.67.67 0 0 0 .22-.92.67.67 0 0 0-.92-.22A13.19 13.19 0 0 0 7.591 6.82a.665.665 0 0 0-.054.94.675.675 0 0 0 .5.227h.007ZM12.05 5.633a.64.64 0 0 0 .22-.04c.187-.066.367-.12.554-.18a.668.668 0 0 0 .453-.826.663.663 0 0 0-.826-.454c-.207.06-.414.127-.62.2a.665.665 0 0 0 .213 1.293l.007.007Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IllustrativeDepositAndWithdrawalIcon);
export default ForwardRef;