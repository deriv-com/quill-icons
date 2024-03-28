import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUserSlashMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.188 4.188 6 7.938A3.995 3.995 0 0 1 10 4c2.188 0 4 1.813 4 4 0 1.875-1.281 3.406-2.969 3.875l8.657 6.813c.343.25.406.718.125 1.03-.25.345-.72.407-1.032.126l-18.5-14.5c-.343-.25-.406-.719-.125-1.032.25-.343.719-.406 1.032-.125M8.25 13.53l8.156 6.406c-.125.063-.218.063-.343.063H3.906A.907.907 0 0 1 3 19.094c0-2.969 2.313-5.407 5.25-5.563' />
    </g>
    <defs>
      <clipPath id='4c265252f83aa9cfad70f44d4b7c669e__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUserSlashMdFillIcon);
export default ForwardRef;
