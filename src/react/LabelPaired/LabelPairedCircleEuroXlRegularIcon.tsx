import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleEuroXlRegularIcon = (
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
      <path d='M22.5 18q-.047-2.859-1.406-5.25-1.407-2.39-3.844-3.844Q14.766 7.5 12 7.5T6.75 8.906Q4.313 10.36 2.906 12.75 1.546 15.141 1.5 18q.047 2.859 1.406 5.25 1.407 2.39 3.844 3.844Q9.234 28.5 12 28.5t5.25-1.406q2.437-1.453 3.844-3.844 1.36-2.391 1.406-5.25M0 18q.047-3.28 1.594-6Q3.187 9.282 6 7.594 8.859 6 12 6t6 1.594Q20.813 9.28 22.406 12q1.548 2.72 1.594 6-.046 3.282-1.594 6-1.593 2.719-4.406 4.406Q15.141 30 12 30t-6-1.594Q3.187 26.72 1.594 24 .047 21.282 0 18m6 .75h1.125a6 6 0 0 1-.047-.703q0-.422.047-.797H6q-.703-.046-.75-.75.046-.703.75-.75h1.594a5.13 5.13 0 0 1 1.922-2.156q1.265-.844 2.859-.844h1.922q.703.047.75.75-.047.703-.75.75h-1.922q-1.922.047-3 1.5H13.5q.703.046.75.75-.047.704-.75.75H8.672q-.094.375-.094.797 0 .375.094.703H13.5q.703.046.75.75-.047.704-.75.75H9.281q1.125 1.5 3.094 1.594h1.922q.703.047.75.75-.047.656-.75.75h-1.922q-1.64-.047-2.906-.89a5.1 5.1 0 0 1-1.875-2.204H6q-.703-.046-.75-.75.046-.704.75-.75' />
    </g>
    <defs>
      <clipPath id='bf45533f4e9e89b313ff9ddc5bbacad4__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleEuroXlRegularIcon);
export default ForwardRef;
