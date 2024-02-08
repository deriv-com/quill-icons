import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSearchXlRegularIcon = (
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
      <path d='M18 15.75q0-2.25-1.125-4.125-1.078-1.875-3-3Q11.907 7.5 9.75 7.5q-2.155 0-4.125 1.125-1.921 1.125-3 3Q1.5 13.5 1.5 15.75t1.125 4.125q1.079 1.875 3 3Q7.595 24 9.75 24q2.157 0 4.125-1.125 1.922-1.125 3-3Q18 18 18 15.75m-1.922 7.406q-2.625 2.25-6.328 2.344-4.125-.094-6.89-2.86Q.093 19.876 0 15.75q.094-4.125 2.86-6.89Q5.624 6.093 9.75 6q4.125.094 6.89 2.86 2.766 2.765 2.86 6.89-.094 3.703-2.344 6.328l6.61 6.656q.468.516 0 1.032-.516.468-1.032 0z' />
    </g>
    <defs>
      <clipPath id='b4df6982802152162b20aca93d58fbfa__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSearchXlRegularIcon);
export default ForwardRef;
