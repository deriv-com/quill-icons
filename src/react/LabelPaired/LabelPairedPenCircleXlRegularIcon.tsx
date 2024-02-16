import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPenCircleXlRegularIcon = (
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
      <path d='M22.5 18q-.047-2.859-1.406-5.25-1.407-2.39-3.844-3.844Q14.766 7.5 12 7.5T6.75 8.906Q4.313 10.36 2.906 12.75 1.546 15.141 1.5 18q.047 2.859 1.406 5.25 1.407 2.39 3.844 3.844Q9.234 28.5 12 28.5t5.25-1.406q2.437-1.453 3.844-3.844 1.36-2.391 1.406-5.25M0 18q.047-3.28 1.594-6Q3.187 9.282 6 7.594 8.859 6 12 6t6 1.594Q20.813 9.28 22.406 12q1.548 2.72 1.594 6-.046 3.282-1.594 6-1.593 2.719-4.406 4.406Q15.141 30 12 30t-6-1.594Q3.187 26.72 1.594 24 .047 21.282 0 18m15.563-4.36q-.563-.42-1.079 0l-.984 1.032 1.875 1.875.984-1.031q.423-.516 0-1.032zm-6.985 5.954a.6.6 0 0 0-.234.328l-.563 2.297 2.297-.563a.7.7 0 0 0 .328-.187l3.89-3.89-1.874-1.876-3.89 3.89zm4.828-6.985q.703-.656 1.594-.656.89 0 1.594.656l.843.797q.657.703.657 1.594 0 .89-.657 1.594L11.485 22.5a1.95 1.95 0 0 1-1.03.61L6.936 24a.67.67 0 0 1-.703-.234q-.281-.282-.187-.703l.844-3.516q.188-.563.609-1.031z' />
    </g>
    <defs>
      <clipPath id='03f96217c77451b3c975f1c6a1a9bf79__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPenCircleXlRegularIcon);
export default ForwardRef;
