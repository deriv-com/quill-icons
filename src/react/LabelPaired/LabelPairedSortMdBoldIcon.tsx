import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSortMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={10}
    height={24}
    viewBox='0 0 10 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.188 9.5H7.78L5 6.719zm3.5-4.187 4 4c.28.28.374.718.218 1.093a1.02 1.02 0 0 1-.937.625H1c-.406 0-.781-.25-.937-.625A1.01 1.01 0 0 1 .28 9.312l4-4a.964.964 0 0 1 1.407 0m-3.5 9.187L5 17.313 7.781 14.5zm3.5 4.219a.964.964 0 0 1-1.407 0l-4-4a1.01 1.01 0 0 1-.219-1.094C.22 13.25.595 13 1 13h8c.375 0 .75.25.906.625a1.01 1.01 0 0 1-.219 1.094z' />
    </g>
    <defs>
      <clipPath id='a374cbf2d5db4fd53d702d8d56238d5c__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortMdBoldIcon);
export default ForwardRef;
