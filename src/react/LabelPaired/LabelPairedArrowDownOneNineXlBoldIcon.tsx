import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownOneNineXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={27}
    height={36}
    viewBox='0 0 27 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M21.375 8.625v5.625H22.5q1.032.095 1.125 1.125-.093 1.032-1.125 1.125H18q-1.03-.093-1.125-1.125.094-1.03 1.125-1.125h1.125v-4.078l-.75.281q-1.031.234-1.453-.703-.234-1.031.703-1.453l2.25-.75a1.2 1.2 0 0 1 1.031.187q.47.33.469.891M6.703 28.172l-4.5-4.5q-.655-.797 0-1.594.797-.655 1.594 0l2.578 2.578V8.625Q6.47 7.595 7.5 7.5q1.032.095 1.125 1.125v16.031l2.578-2.578q.797-.655 1.594 0 .656.797 0 1.594l-4.5 4.5q-.797.656-1.594 0M19.875 24q1.079-.047 1.64-.937.47-.937 0-1.875-.561-.891-1.64-.938-1.079.047-1.64.938-.47.938 0 1.875.561.89 1.64.937m-.844 2.156q-1.453-.327-2.343-1.406-.891-1.079-.938-2.625.047-1.734 1.219-2.906T19.875 18q1.734.047 2.906 1.219T24 22.125a4.1 4.1 0 0 1-.984 2.719l-2.625 3.234q-.75.75-1.594.188-.75-.75-.188-1.594z' />
    </g>
    <defs>
      <clipPath id='1e6efa0f65d579e9__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownOneNineXlBoldIcon);
export default ForwardRef;
