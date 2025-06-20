import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedComputerMouseScrollwheelSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={22}
    viewBox='0 0 11 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9.875 13.375v-5.25c0-1.914-1.586-3.5-3.5-3.5h-1.75a3.507 3.507 0 0 0-3.5 3.5v5.25a3.49 3.49 0 0 0 3.5 3.5h1.75c1.914 0 3.5-1.559 3.5-3.5M.25 8.125A4.37 4.37 0 0 1 4.625 3.75h1.75a4.39 4.39 0 0 1 4.375 4.375v5.25a4.37 4.37 0 0 1-4.375 4.375h-1.75A4.353 4.353 0 0 1 .25 13.375zm5.688-1.312v1.75A.45.45 0 0 1 5.5 9a.43.43 0 0 1-.437-.437v-1.75a.45.45 0 0 1 .437-.438.47.47 0 0 1 .438.438' />
    </g>
    <defs>
      <clipPath id='9923dda507edde1cf02e5c20b542add9__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedComputerMouseScrollwheelSmRegularIcon);
export default ForwardRef;
