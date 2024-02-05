import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowsRotateXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M23.25 15.375q-.093 1.032-1.125 1.125h-6.75q-1.03-.093-1.125-1.125.095-1.03 1.125-1.125h4.031l-2.437-2.437Q14.906 9.797 12 9.75q-2.578.047-4.594 1.406a8.26 8.26 0 0 0-3 3.61q-.468.938-1.453.609-.937-.516-.61-1.5a10.3 10.3 0 0 1 3.798-4.594Q8.719 7.547 12 7.5q3.797.047 6.563 2.719L21 12.656V8.625q.094-1.03 1.125-1.125 1.032.095 1.125 1.125zM1.875 19.5h5.25q1.032.094 1.125 1.125-.093 1.032-1.125 1.125H4.594l2.437 2.438Q9.094 26.202 12 26.25q2.578-.047 4.594-1.406a8.26 8.26 0 0 0 3-3.61q.469-.89 1.453-.562.937.468.61 1.453-1.266 2.86-3.798 4.594Q15.281 28.453 12 28.5q-3.797-.046-6.562-2.719L3 23.344v2.531Q2.907 26.907 1.875 27 .845 26.907.75 25.875v-5.25q.095-1.03 1.125-1.125' />
    </g>
    <defs>
      <clipPath id='fcae95a20fd628a13cbf7967547a1971__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowsRotateXlBoldIcon);
export default ForwardRef;
