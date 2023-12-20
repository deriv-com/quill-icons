import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowUpAZLgRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 23 30'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m6.93 6.945 3.75 3.75c.26.287.26.573 0 .86-.287.26-.573.26-.86 0L7.125 8.898v14.727c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625V8.898L3.18 11.555c-.287.26-.573.26-.86 0-.26-.287-.26-.573 0-.86l3.75-3.75c.287-.26.573-.26.86 0M14 16.75h5c.26 0 .443.117.547.352a.67.67 0 0 1-.04.664L15.29 23H19c.39.026.599.234.625.625-.026.39-.234.599-.625.625h-5a.553.553 0 0 1-.547-.352.619.619 0 0 1 .078-.664L17.711 18H14c-.39-.026-.599-.234-.625-.625.026-.39.234-.599.625-.625m2.5-10c.26 0 .443.117.547.352l2.5 5h.039l.586 1.25c.156.364.065.638-.274.82-.338.156-.611.065-.82-.274L18.61 13h-4.218l-.47.898c-.181.339-.455.43-.82.274-.338-.182-.43-.456-.273-.82l.625-1.25 2.5-5a.553.553 0 0 1 .547-.352m-1.484 5h2.968L16.5 8.781z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpAZLgRegularIcon);
export default ForwardRef;
