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
      <path d='M2.297 17.25H1.125Q.095 17.157 0 16.125.095 15.095 1.125 15h1.547q1.03-3.329 3.75-5.39Q9.14 7.545 12.75 7.5h1.125q1.032.095 1.125 1.125-.093 1.032-1.125 1.125H12.75q-2.672.047-4.687 1.453a8.34 8.34 0 0 0-3 3.797h7.312q1.032.095 1.125 1.125-.093 1.032-1.125 1.125H4.547a6 6 0 0 0 0 1.5h7.828q1.032.094 1.125 1.125-.093 1.032-1.125 1.125H5.063a8.34 8.34 0 0 0 3 3.797q2.015 1.406 4.687 1.453h1.125q1.032.094 1.125 1.125-.093 1.032-1.125 1.125H12.75q-3.61-.046-6.328-2.11-2.72-2.061-3.75-5.39H1.125Q.095 20.907 0 19.875q.095-1.03 1.125-1.125h1.172a6 6 0 0 1 0-1.5' />
    </g>
    <defs>
      <clipPath id='4afd492222d713a1__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEuroSignXlBoldIcon);
export default ForwardRef;
