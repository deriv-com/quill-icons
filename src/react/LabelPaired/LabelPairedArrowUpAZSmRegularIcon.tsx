import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowUpAZSmRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 16 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m4.8 4.762 2.626 2.625c.182.2.182.4 0 .601-.2.183-.401.183-.602 0l-1.886-1.86v10.31c-.019.273-.165.419-.438.437-.273-.018-.42-.164-.437-.437V6.127l-1.887 1.86c-.2.183-.401.183-.602 0-.182-.2-.182-.4 0-.601L4.2 4.762c.2-.183.401-.183.602 0m4.95 6.863h3.5c.182 0 .31.082.383.246a.47.47 0 0 1-.027.465L10.651 16h2.598c.273.018.42.164.438.438-.019.273-.165.419-.438.437h-3.5a.387.387 0 0 1-.383-.246.433.433 0 0 1 .055-.465l2.926-3.664H9.75c-.273-.018-.42-.164-.437-.437.018-.274.164-.42.437-.438m1.75-7c.182 0 .31.082.383.246l1.75 3.5h.027l.41.875c.11.255.046.447-.191.574-.237.11-.428.046-.574-.191L12.977 9h-2.954l-.328.629c-.127.237-.319.3-.574.191-.237-.127-.3-.319-.191-.574l.437-.875 1.75-3.5a.387.387 0 0 1 .383-.246m-1.04 3.5h2.08L11.5 6.047z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpAZSmRegularIcon);
export default ForwardRef;
