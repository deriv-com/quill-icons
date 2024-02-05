import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleArrowLeftXlRegularIcon = (
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
      <path d='M1.5 18q.047 2.859 1.406 5.25 1.407 2.39 3.844 3.844Q9.234 28.5 12 28.5t5.25-1.406q2.437-1.453 3.844-3.844 1.36-2.391 1.406-5.25-.047-2.859-1.406-5.25-1.407-2.39-3.844-3.844Q14.766 7.5 12 7.5T6.75 8.906Q4.313 10.36 2.906 12.75 1.546 15.141 1.5 18M24 18q-.046 3.282-1.594 6-1.593 2.719-4.406 4.406Q15.141 30 12 30t-6-1.594Q3.187 26.72 1.594 24 .047 21.282 0 18q.047-3.28 1.594-6Q3.187 9.282 6 7.594 8.859 6 12 6t6 1.594Q20.813 9.28 22.406 12q1.548 2.72 1.594 6m-13.266-5.016q.516-.468 1.032 0 .468.516 0 1.032L8.578 17.25h8.672q.704.046.75.75-.046.704-.75.75H8.578l3.188 3.234q.468.516 0 1.032-.516.468-1.032 0l-4.5-4.5q-.468-.516 0-1.032z' />
    </g>
    <defs>
      <clipPath id='a2534e63031133556f9259788cb69f22__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleArrowLeftXlRegularIcon);
export default ForwardRef;
