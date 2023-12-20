import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneArrowDownAZRegularIcon = (
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
    <path
      fillOpacity={0.72}
      d='m15.18 21.305-3.75 3.75c-.287.26-.573.26-.86 0l-3.75-3.75c-.26-.287-.26-.573 0-.86.287-.26.573-.26.86 0l2.695 2.657V8.375c.026-.39.234-.599.625-.625.39.026.599.234.625.625v14.727l2.695-2.657c.287-.26.573-.26.86 0 .26.287.26.573 0 .86m6.367-13.203 2.5 4.96v.04l.625 1.25c.156.338.065.611-.274.82-.364.156-.638.065-.82-.274L23.11 14h-4.218l-.47.898c-.207.339-.48.43-.82.274-.338-.182-.43-.456-.273-.82l.586-1.25h.04l2.5-5A.553.553 0 0 1 21 7.75c.26 0 .443.117.547.352M21 9.782l-1.484 2.968h2.968zm-2.5 7.968h5c.26 0 .443.117.547.352a.67.67 0 0 1-.04.664L19.79 24H23.5c.39.026.599.234.625.625-.026.39-.234.599-.625.625h-5a.553.553 0 0 1-.547-.352.619.619 0 0 1 .078-.664L22.211 19H18.5c-.39-.026-.599-.234-.625-.625.026-.39.234-.599.625-.625'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowDownAZRegularIcon);
export default ForwardRef;
