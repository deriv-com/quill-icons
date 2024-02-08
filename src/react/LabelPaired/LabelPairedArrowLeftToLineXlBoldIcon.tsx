import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowLeftToLineXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 25.875v-15.75Q.095 9.095 1.125 9q1.032.095 1.125 1.125v15.75Q2.157 26.907 1.125 27 .095 26.907 0 25.875m6.375-8.672 6.375-6q.797-.656 1.547.047.656.797-.047 1.594l-4.266 4.031h9.891Q20.907 16.969 21 18q-.093 1.032-1.125 1.125h-9.89l4.312 4.078q.656.75.047 1.594-.797.656-1.594.047l-6.375-6Q6 18.468 6 18t.375-.797' />
    </g>
    <defs>
      <clipPath id='4737de3f319f0654e4ca7183fe3fa40a__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowLeftToLineXlBoldIcon);
export default ForwardRef;
