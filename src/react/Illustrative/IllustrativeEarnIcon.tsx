import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const IllustrativeEarnIcon = (
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
    <g>
      <path d='M25.333 15.453v-.786c0-1.1-.9-2-2-2H23.3C22.96 8.933 19.82 6 16 6s-6.96 2.933-7.3 6.667H7.333c-1.1 0-2 .9-2 2V28c0 1.1.9 2 2 2h17.334c1.1 0 2-.9 2-2V17.333c0-.866-.56-1.6-1.334-1.88m0 9.207h-4.666a.669.669 0 0 1-.667-.667v-2.666c0-.367.3-.667.667-.667h4.666zM24 14.667v.666h-.953c.126-.433.206-.88.253-1.333h.033c.367 0 .667.3.667.667m-8-7.334c3.307 0 6 2.694 6 6 0 .694-.12 1.36-.347 2h-2.986V14c0-.733-.6-1.333-1.334-1.333h-2.666v-1.334H18c.367 0 .667-.3.667-.666 0-.367-.3-.667-.667-.667h-1.333v-.667c0-.366-.3-.666-.667-.666-.367 0-.667.3-.667.666V10h-.666c-.734 0-1.334.6-1.334 1.333v1.334c0 .733.6 1.333 1.334 1.333h2.666v1.333h-6.98a5.98 5.98 0 0 1-.346-2c0-3.306 2.693-6 6-6zM7.333 14H8.7c.04.453.127.9.247 1.333H7.333a.677.677 0 0 1-.666-.666c0-.36.306-.667.666-.667m18 14c0 .367-.3.667-.666.667H7.333A.669.669 0 0 1 6.667 28V16.547c.206.073.433.12.666.12h17.334c.366 0 .666.3.666.666v2h-4.666c-1.1 0-2 .9-2 2V24c0 1.1.9 2 2 2h4.666z' />
      <path d='M22.667 23.333a.667.667 0 1 0 0-1.333.667.667 0 0 0 0 1.333M24 8.667c.367 0 .667-.3.667-.667V5.333c0-.366-.3-.666-.667-.666-.367 0-.667.3-.667.666V8c0 .367.3.667.667.667M8.667 8.667c.366 0 .666-.3.666-.667V5.333c0-.366-.3-.666-.666-.666-.367 0-.667.3-.667.666V8c0 .367.3.667.667.667M12 5.333c.367 0 .667-.3.667-.666V3.333c0-.366-.3-.666-.667-.666-.367 0-.667.3-.667.666v1.334c0 .366.3.666.667.666M20.667 5.333c.366 0 .666-.3.666-.666V3.333c0-.366-.3-.666-.666-.666-.367 0-.667.3-.667.666v1.334c0 .366.3.666.667.666M16 4c.367 0 .667-.3.667-.667v-.666c0-.367-.3-.667-.667-.667-.367 0-.667.3-.667.667v.666c0 .367.3.667.667.667' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IllustrativeEarnIcon);
export default ForwardRef;
