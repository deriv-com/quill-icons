import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpAZSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={22}
    viewBox='0 0 16 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m4.8 4.762 2.626 2.625q.273.3 0 .601-.3.274-.602 0l-1.886-1.86v10.31q-.029.41-.438.437-.41-.027-.437-.437V6.127l-1.887 1.86q-.3.274-.602 0-.273-.3 0-.601L4.2 4.762q.3-.274.602 0m4.95 6.863h3.5q.273 0 .383.246a.47.47 0 0 1-.027.465L10.651 16h2.598q.41.027.438.438-.028.41-.438.437h-3.5a.39.39 0 0 1-.383-.246.43.43 0 0 1 .055-.465l2.926-3.664H9.75q-.41-.027-.437-.437.027-.411.437-.438m1.75-7q.273 0 .383.246l1.75 3.5h.027l.41.875q.165.383-.191.574-.355.165-.574-.191L12.977 9h-2.954l-.328.629q-.191.355-.574.191-.355-.191-.191-.574l.437-.875 1.75-3.5a.39.39 0 0 1 .383-.246m-1.04 3.5h2.08L11.5 6.047z' />
    </g>
    <defs>
      <clipPath id='22214366237e6215d20c8b32ea4aab17__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpAZSmRegularIcon);
export default ForwardRef;
