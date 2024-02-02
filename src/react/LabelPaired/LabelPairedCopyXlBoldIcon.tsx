import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCopyXlBoldIcon = (
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
      <path d='M18 21.75q.704-.046.75-.75v-9.562L15.563 8.25H9q-.703.047-.75.75v12q.047.704.75.75zM9 24q-1.266-.047-2.11-.89Q6.048 22.265 6 21V9q.047-1.266.89-2.11Q7.735 6.048 9 6h6.563a2.17 2.17 0 0 1 1.593.656l3.188 3.188Q21 10.5 21 11.438V21q-.047 1.266-.89 2.11-.844.843-2.11.89zM3 12h1.5v2.25H3q-.703.047-.75.75v12q.046.704.75.75h9q.703-.046.75-.75v-1.5H15V27q-.047 1.266-.89 2.11-.844.843-2.11.89H3q-1.266-.047-2.11-.89Q.048 28.265 0 27V15q.047-1.266.89-2.11.844-.843 2.11-.89' />
    </g>
    <defs>
      <clipPath id='3709cb582fbd4419b31d4b3931553bbe__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCopyXlBoldIcon);
export default ForwardRef;
