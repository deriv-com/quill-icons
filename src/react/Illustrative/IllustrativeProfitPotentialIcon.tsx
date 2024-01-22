import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const IllustrativeProfitPotentialIcon = (
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
      <path d='m28.94 15.393-2.947-1.32s.006-.046.006-.073c0-1.1-.9-2-2-2s-2 .9-2 2c0 .093.014.187.027.287L10.019 20.54A1.987 1.987 0 0 0 8.666 20c-.52 0-.987.2-1.34.527l-3.7-1.794a.672.672 0 0 0-.893.307.672.672 0 0 0 .306.893l3.654 1.774c-.014.1-.027.193-.027.293 0 1.1.9 2 2 2s2-.9 2-2c0-.093-.013-.187-.027-.28l12.007-6.253c.36.333.847.533 1.36.533.6 0 1.133-.273 1.5-.687l2.893 1.3a.662.662 0 0 0 .88-.333.664.664 0 0 0-.333-.88zM8.665 22.667A.669.669 0 0 1 7.999 22c0-.367.3-.667.667-.667.367 0 .667.3.667.667 0 .367-.3.667-.667.667m15.333-8a.671.671 0 0 1-.626-.434.669.669 0 0 1 .627-.9c.366 0 .666.3.666.667 0 .367-.3.667-.667.667' />
      <path d='M6 16h2.026l2.167 2.167c.126.126.3.193.473.193a.56.56 0 0 0 .253-.053.668.668 0 0 0 .414-.614V16h1.333c1.1 0 2-.9 2-2V3.333c0-1.1-.9-2-2-2H5.999c-1.1 0-2 .9-2 2V14c0 1.1.9 2 2 2M5.332 3.333c0-.366.3-.666.666-.666h6.667c.367 0 .667.3.667.666V14c0 .367-.3.667-.667.667h-2c-.367 0-.667.3-.667.666v.754l-1.22-1.22a.66.66 0 0 0-.473-.194H6a.669.669 0 0 1-.666-.666z' />
      <path d='M7.333 10.667c-.367 0-.667.3-.667.666 0 .367.3.667.667.667h1.333v.667c0 .366.3.666.667.666.366 0 .666-.3.666-.666V12h.667c.733 0 1.333-.6 1.333-1.333V9.333C12 8.6 11.4 8 10.666 8H7.999V6.667h3.334c.366 0 .666-.3.666-.667 0-.367-.3-.667-.666-.667H9.999v-.666C10 4.3 9.7 4 9.333 4c-.367 0-.667.3-.667.667v.666H8c-.733 0-1.333.6-1.333 1.334V8c0 .733.6 1.333 1.333 1.333h2.667v1.334zM24 17.333c-.367 0-.667.3-.667.667v8.667c0 .366-.3.666-.667.666h-4.973c-.367 0-.667.3-.667.667v.56l-1.26-1.067a.68.68 0 0 0-.433-.16h-5.027a.669.669 0 0 1-.667-.666V26c0-.367-.3-.667-.666-.667-.367 0-.667.3-.667.667v.667c0 1.1.9 2 2 2h4.78l2.173 1.84c.12.106.274.16.434.16.093 0 .193-.02.28-.06a.67.67 0 0 0 .386-.607v-1.333h4.307c1.1 0 2-.9 2-2V18c0-.367-.3-.667-.667-.667' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IllustrativeProfitPotentialIcon);
export default ForwardRef;
