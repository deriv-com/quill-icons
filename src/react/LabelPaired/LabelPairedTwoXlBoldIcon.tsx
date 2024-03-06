import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTwoXlBoldIcon = (
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
      <path d='M6.938 9.75q-1.969.046-3.329 1.36l-1.687 1.687q-.797.656-1.594 0-.655-.797 0-1.594l1.688-1.64Q4.03 7.547 6.938 7.5h.328q2.812.094 4.687 1.922 1.829 1.875 1.922 4.687-.046 2.86-2.11 4.829l-7.78 7.312h9.89q1.032.094 1.125 1.125-.093 1.032-1.125 1.125H1.125q-.75-.047-1.031-.703-.234-.703.281-1.219l9.89-9.281q1.314-1.313 1.36-3.188-.046-1.828-1.266-3.093-1.265-1.22-3.093-1.266z' />
    </g>
    <defs>
      <clipPath id='8f1b9bdfec2db701f10e0bab6dede64b__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTwoXlBoldIcon);
export default ForwardRef;
