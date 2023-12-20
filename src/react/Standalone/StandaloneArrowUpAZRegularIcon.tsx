import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneArrowUpAZRegularIcon = (
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
      d='m11.43 7.945 3.75 3.75c.26.287.26.573 0 .86-.287.26-.573.26-.86 0l-2.695-2.657v14.727c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625V9.898L7.68 12.555c-.287.26-.573.26-.86 0-.26-.287-.26-.573 0-.86l3.75-3.75c.287-.26.573-.26.86 0m7.07 9.805h5c.26 0 .443.117.547.352a.67.67 0 0 1-.04.664L19.79 24H23.5c.39.026.599.234.625.625-.026.39-.234.599-.625.625h-5a.553.553 0 0 1-.547-.352.619.619 0 0 1 .078-.664L22.211 19H18.5c-.39-.026-.599-.234-.625-.625.026-.39.234-.599.625-.625m2.5-10c.26 0 .443.117.547.352l2.5 5h.039l.586 1.25c.156.364.065.638-.274.82-.338.156-.611.065-.82-.274L23.11 14h-4.218l-.47.898c-.181.339-.455.43-.82.274-.338-.182-.43-.456-.273-.82l.625-1.25 2.5-5A.553.553 0 0 1 21 7.75m-1.484 5h2.968L21 9.781z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowUpAZRegularIcon);
export default ForwardRef;
