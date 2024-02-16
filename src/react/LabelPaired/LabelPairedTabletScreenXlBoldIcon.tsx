import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTabletScreenXlBoldIcon = (
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
      <path d='M2.25 27q.046.704.75.75h15q.704-.046.75-.75v-3.75H2.25zm0-6h16.5V9q-.046-.703-.75-.75H3q-.703.047-.75.75zM0 9q.047-1.266.89-2.11Q1.735 6.048 3 6h15q1.266.047 2.11.89.843.844.89 2.11v18q-.047 1.266-.89 2.11-.844.843-2.11.89H3q-1.266-.047-2.11-.89Q.048 28.265 0 27zm9 15.75h3q.703.046.75.75-.047.704-.75.75H9q-.703-.046-.75-.75.047-.704.75-.75' />
    </g>
    <defs>
      <clipPath id='bf8ea9c76ec7db96cea0408e2c563e38__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTabletScreenXlBoldIcon);
export default ForwardRef;
