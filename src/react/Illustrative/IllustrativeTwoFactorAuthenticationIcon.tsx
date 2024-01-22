import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const IllustrativeTwoFactorAuthenticationIcon = (
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
    <path d='M29.907 12.12v8.827a3.186 3.186 0 0 1-3.187 3.186h-8.787v1.814h2.48a.66.66 0 0 1 .667.666.66.66 0 0 1-.667.667h-6.306a.66.66 0 0 1-.667-.667.66.66 0 0 1 .667-.666H16.6v-1.814h-2.48a.66.66 0 0 1-.667-.666.66.66 0 0 1 .667-.667h12.6a1.85 1.85 0 0 0 1.853-1.853V12.12a.66.66 0 0 1 .667-.667.66.66 0 0 1 .667.667m-24.627.667a.66.66 0 0 0 .667-.667v-1.893A1.85 1.85 0 0 1 7.8 8.373h14.067a.66.66 0 0 0 .666-.666.66.66 0 0 0-.666-.667H7.8a3.187 3.187 0 0 0-3.187 3.187v1.893a.66.66 0 0 0 .667.667m6.453 7.346a.66.66 0 0 0-.666.667v6.4c0 .813-.654 1.467-1.467 1.467H4.8A1.462 1.462 0 0 1 3.333 27.2V16.533a1.48 1.48 0 0 1 1.107-1.426.664.664 0 0 0 .48-.814.674.674 0 0 0-.813-.48 2.794 2.794 0 0 0-2.094 2.707v10.667a2.8 2.8 0 0 0 2.8 2.8h4.8a2.8 2.8 0 0 0 2.8-2.8v-6.4a.66.66 0 0 0-.666-.667zm-7.12 6.534a.66.66 0 0 0 .667.666h3.787a.66.66 0 0 0 .666-.666.66.66 0 0 0-.666-.667H5.28a.66.66 0 0 0-.667.667M30 6.933v2.134a1.73 1.73 0 0 1-1.733 1.733h-3.2a1.73 1.73 0 0 1-1.734-1.733V6.933c0-.96.774-1.733 1.734-1.733H27.6V3.733a.41.41 0 0 0-.4-.4h-1.067a.41.41 0 0 0-.4.4.66.66 0 0 1-.666.667.66.66 0 0 1-.667-.667c0-.96.773-1.733 1.733-1.733H27.2c.96 0 1.733.773 1.733 1.733v1.6A1.74 1.74 0 0 1 30 6.933m-1.333 0c0-.226-.174-.4-.4-.4h-3.2c-.227 0-.4.174-.4.4v2.134c0 .226.173.4.4.4h3.2c.226 0 .4-.174.4-.4zM12.4 15.467V17.6a1.73 1.73 0 0 1-1.733 1.733h-3.2A1.73 1.73 0 0 1 5.733 17.6v-2.133c0-.72.44-1.334 1.067-1.6v-.534c0-.96.773-1.733 1.733-1.733H9.6c.467 0 .907.173 1.227.507.32.333.506.773.506 1.226v.534a1.74 1.74 0 0 1 1.067 1.6m-4.267-2.134v.4H10v-.4s0-.186-.107-.293c-.08-.08-.173-.107-.293-.107H8.533a.41.41 0 0 0-.4.4m2.934 2.134c0-.227-.174-.4-.4-.4h-3.2c-.227 0-.4.173-.4.4V17.6c0 .227.173.4.4.4h3.2c.226 0 .4-.173.4-.4z' />
  </svg>
);
const ForwardRef = forwardRef(IllustrativeTwoFactorAuthenticationIcon);
export default ForwardRef;
