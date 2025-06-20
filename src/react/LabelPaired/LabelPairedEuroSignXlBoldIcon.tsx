import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEuroSignXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={36}
    viewBox='0 0 15 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.25 17.25H1.125C.469 17.25 0 16.781 0 16.125 0 15.515.469 15 1.125 15h1.547c1.265-4.312 5.297-7.5 10.078-7.5h1.125c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125H12.75A8.24 8.24 0 0 0 5.063 15h7.312c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125H4.5v1.5h7.875c.61 0 1.125.516 1.125 1.125A1.11 1.11 0 0 1 12.375 21H5.063c1.171 3.094 4.171 5.25 7.687 5.25h1.125c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125H12.75c-4.781 0-8.812-3.14-10.078-7.5H1.125C.469 21 0 20.531 0 19.875c0-.61.469-1.125 1.125-1.125H2.25v-1.5' />
    </g>
    <defs>
      <clipPath id='fa4decf8304a3620374c92f182e29ecc__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEuroSignXlBoldIcon);
export default ForwardRef;
