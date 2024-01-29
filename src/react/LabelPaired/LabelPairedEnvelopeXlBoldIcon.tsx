import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEnvelopeXlBoldIcon = (
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
      <path d='M3 11.25q-.703.047-.75.75v1.031l8.11 6.656q.75.563 1.64.563.938 0 1.688-.562l8.062-6.657V12q-.046-.703-.75-.75zm-.75 4.688V24q.046.704.75.75h18q.704-.046.75-.75v-8.062l-6.656 5.484Q13.687 22.5 12 22.5t-3.094-1.078zM0 12q.047-1.266.89-2.11Q1.735 9.048 3 9h18q1.266.047 2.11.89.843.844.89 2.11v12q-.047 1.266-.89 2.11-.844.843-2.11.89H3q-1.266-.047-2.11-.89Q.048 25.265 0 24z' />
    </g>
    <defs>
      <clipPath id='8e753ae49726269d286d535870cf8012__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEnvelopeXlBoldIcon);
export default ForwardRef;
