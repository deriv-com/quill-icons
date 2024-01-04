import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const IllustrativeSoftwareDevelopersIcon = (
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
      <path d='M12.447 19c0 1.653 1.346 3 3 3 1.653 0 3-1.347 3-3s-1.347-3-3-3c-1.654 0-3 1.347-3 3Zm4.666 0a1.667 1.667 0 1 1-3.334-.001 1.667 1.667 0 0 1 3.334.001ZM17.447 22.667c-.367 0-.667.3-.667.666 0 .367.3.667.667.667.733 0 1.333.6 1.333 1.333v2c0 .367-.3.667-.667.667H12.78a.669.669 0 0 1-.667-.667v-2c0-.733.6-1.333 1.334-1.333.366 0 .666-.3.666-.667 0-.366-.3-.666-.666-.666a2.666 2.666 0 0 0-2.667 2.666v2c0 1.1.9 2 2 2h5.333c1.1 0 2-.9 2-2v-2a2.666 2.666 0 0 0-2.666-2.666ZM8.113 18c-1.226 0-2.22 1-2.22 2.22 0 1.22 1 2.22 2.22 2.22 1.22 0 2.22-1 2.22-2.22 0-1.22-1-2.22-2.22-2.22Zm0 3.113a.886.886 0 1 1 0-1.772.886.886 0 0 1 0 1.772ZM8.78 27.113H6.333c-.12 0-.22-.1-.22-.22V25.56c0-.367.3-.667.667-.667.367 0 .667-.3.667-.666 0-.367-.3-.667-.667-.667-1.1 0-2 .9-2 2v1.333c0 .86.7 1.554 1.553 1.554H8.78c.367 0 .667-.3.667-.667 0-.367-.3-.667-.667-.667ZM25 20.22c0-1.227-1-2.22-2.22-2.22-1.22 0-2.22 1-2.22 2.22 0 1.22 1 2.22 2.22 2.22 1.22 0 2.22-1 2.22-2.22Zm-3.113 0a.886.886 0 1 1 1.772 0 .886.886 0 0 1-1.772 0ZM24.113 23.553c-.366 0-.666.3-.666.667 0 .367.3.667.666.667.367 0 .667.3.667.666v1.334c0 .12-.1.22-.22.22h-2.447c-.366 0-.666.3-.666.666 0 .367.3.667.666.667h2.447c.86 0 1.553-.7 1.553-1.553v-1.334c0-1.1-.9-2-2-2ZM11.28 16.307a.668.668 0 0 0 .413-.614V14h2.974c1.1 0 2-.9 2-2V5.333c0-1.1-.9-2-2-2H5.333c-1.1 0-2 .9-2 2V12c0 1.1.9 2 2 2h3.06l2.167 2.167c.127.126.3.193.473.193a.56.56 0 0 0 .254-.053h-.007Zm-.92-2.974v.754l-1.22-1.22a.66.66 0 0 0-.473-.194H5.333a.669.669 0 0 1-.666-.666V5.333c0-.366.3-.666.666-.666h9.334c.366 0 .666.3.666.666V12c0 .367-.3.667-.666.667h-3.64c-.367 0-.667.3-.667.666Z' />
      <path d='M9.14 6.193a.664.664 0 0 0-.94 0l-2 2c-.26.26-.26.68 0 .94l2 2c.133.134.3.194.473.194a.664.664 0 0 0 .473-1.133L7.62 8.666 9.147 7.14c.26-.26.26-.68 0-.94l-.007-.007ZM11.807 11.14l2-2c.26-.26.26-.68 0-.94l-2-2a.664.664 0 1 0-.94.94l1.526 1.527-1.526 1.526a.664.664 0 0 0 .473 1.134c.173 0 .34-.067.473-.194l-.006.007ZM19.333 10.94v1.727c0 1.1.9 2 2 2 .367 0 .667-.3.667-.667 0-.367-.3-.667-.667-.667a.669.669 0 0 1-.666-.666v-2a.688.688 0 0 0-.194-.474l-.86-.86.86-.86A.66.66 0 0 0 20.667 8V6c0-.367.3-.667.666-.667.367 0 .667-.3.667-.666C22 4.3 21.7 4 21.333 4c-1.1 0-2 .9-2 2v1.727l-1.14 1.14c-.26.26-.26.68 0 .94l1.14 1.14v-.007ZM27.807 8.86l-1.14-1.14V5.993c0-1.1-.9-2-2-2-.367 0-.667.3-.667.667 0 .367.3.667.667.667.366 0 .666.3.666.666v2c0 .18.074.347.194.474l.86.86-.86.86a.66.66 0 0 0-.194.473v2c0 .367-.3.667-.666.667-.367 0-.667.3-.667.666 0 .367.3.667.667.667 1.1 0 2-.9 2-2v-1.727l1.14-1.14c.26-.26.26-.68 0-.94v.007Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IllustrativeSoftwareDevelopersIcon);
export default ForwardRef;
