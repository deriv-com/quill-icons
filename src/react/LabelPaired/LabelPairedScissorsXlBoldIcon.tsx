import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedScissorsXlBoldIcon = (
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
      <path d='M23.719 26.578q-.704.75-1.547.14l-7.547-6.28 1.781-1.454 7.172 6.047q.75.704.14 1.547M5.25 8.25q-1.687.047-2.578 1.5-.844 1.5 0 3 .89 1.453 2.578 1.5 1.687-.047 2.578-1.5.845-1.5 0-3-.89-1.453-2.578-1.5m0-2.25q2.25.047 3.703 1.547Q10.453 9 10.5 11.25a5 5 0 0 1-.562 2.344l3.562 2.953 8.672-7.266q.843-.61 1.547.14.61.845-.14 1.548L9.937 22.406q.562 1.078.562 2.344-.047 2.25-1.547 3.703Q7.5 29.953 5.25 30 3 29.953 1.547 28.453.047 27 0 24.75q.047-2.25 1.547-3.703Q3 19.547 5.25 19.5q1.922.047 3.281 1.172L11.72 18 8.53 15.328Q7.171 16.453 5.25 16.5 3 16.453 1.547 14.953.047 13.5 0 11.25.047 9 1.547 7.547 3 6.047 5.25 6m3 18.75q-.047-1.687-1.5-2.578-1.5-.844-3 0-1.453.89-1.5 2.578.046 1.687 1.5 2.578 1.5.845 3 0 1.453-.89 1.5-2.578' />
    </g>
    <defs>
      <clipPath id='c0a6e2b9964ca914__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedScissorsXlBoldIcon);
export default ForwardRef;
