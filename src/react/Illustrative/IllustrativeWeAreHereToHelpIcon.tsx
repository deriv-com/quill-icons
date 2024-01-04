import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const IllustrativeWeAreHereToHelpIcon = (
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
      <path d='M14.447 21.333c-1.1 0-2 .9-2 2V26c0 1.1.9 2 2 2h6.593l2.167 2.167c.126.126.3.193.473.193a.56.56 0 0 0 .253-.053.668.668 0 0 0 .414-.614V28h1.546c1.1 0 2-.9 2-2v-2.667c0-1.1-.9-2-2-2H14.447ZM26.553 26c0 .367-.3.667-.666.667h-2.214c-.366 0-.666.3-.666.666v.754l-1.22-1.22a.66.66 0 0 0-.474-.194h-6.866a.669.669 0 0 1-.667-.666V23.34c0-.367.3-.667.667-.667h11.446c.367 0 .667.3.667.667v2.667L26.553 26Z' />
      <path d='M24.447 24H15.78c-.367 0-.667.3-.667.667 0 .366.3.666.667.666h8.667c.366 0 .666-.3.666-.666 0-.367-.3-.667-.666-.667ZM16.447 8h4.593l2.167 2.167c.126.126.3.193.473.193a.56.56 0 0 0 .253-.053.668.668 0 0 0 .414-.614V8h1.546c1.1 0 2-.9 2-2V3.333c0-1.1-.9-2-2-2h-9.446c-1.1 0-2 .9-2 2V6c0 1.1.9 2 2 2Zm-.667-4.667c0-.366.3-.666.667-.666h9.446c.367 0 .667.3.667.666V6c0 .367-.3.667-.667.667H23.68c-.367 0-.667.3-.667.666v.754l-1.22-1.22a.66.66 0 0 0-.473-.194h-4.867a.669.669 0 0 1-.666-.666V3.333h-.007Z' />
      <path d='M17.78 5.333h6.667c.366 0 .666-.3.666-.666 0-.367-.3-.667-.666-.667H17.78c-.367 0-.667.3-.667.667 0 .366.3.666.667.666ZM26 11.333h-7.447c-1.1 0-2 .9-2 2V16c0 1.1.9 2 2 2h2.594l2.166 2.167a.67.67 0 0 0 .474.193.559.559 0 0 0 .253-.053.668.668 0 0 0 .413-.614V18H26c1.1 0 2-.9 2-2v-2.667c0-1.1-.9-2-2-2ZM26.667 16c0 .367-.3.667-.667.667h-2.213c-.367 0-.667.3-.667.666v.754l-1.22-1.22a.66.66 0 0 0-.473-.194H18.56a.669.669 0 0 1-.667-.666V13.34c0-.367.3-.667.667-.667h7.447c.366 0 .666.3.666.667v2.667L26.667 16Z' />
      <path d='M24.553 14h-4.666c-.367 0-.667.3-.667.667 0 .366.3.666.667.666h4.666c.367 0 .667-.3.667-.666 0-.367-.3-.667-.667-.667ZM14 18V9.693c0-1.1-.9-2-2-2H6.667c-1.1 0-2 .9-2 2V18c0 1.1.9 2 2 2h.88v1.693c0 .267.16.514.413.614a.664.664 0 0 0 .727-.14L10.853 20H12c1.1 0 2-.9 2-2Zm-1.333 0c0 .367-.3.667-.667.667h-1.42a.688.688 0 0 0-.473.193l-1.22 1.22v-.753c0-.367-.3-.667-.667-.667H6.673a.669.669 0 0 1-.666-.667v-8.3c0-.366.3-.666.666-.666H12c.367 0 .667.3.667.666V18Z' />
      <path d='M9.333 17.027a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334ZM9.333 10.36c-1.1 0-2 .9-2 2 0 .367.3.667.667.667.367 0 .667-.3.667-.667 0-.367.306-.667.666-.667.36 0 .667.307.667.667 0 .42-.18.56-.553.827-.234.166-.56.393-.707.766a.671.671 0 0 0-.073.307v.1c0 .367.3.667.666.667.34 0 .62-.254.66-.587.054-.047.147-.113.22-.167.42-.293 1.12-.793 1.12-1.92 0-1.126-.9-2-2-2v.007Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IllustrativeWeAreHereToHelpIcon);
export default ForwardRef;
