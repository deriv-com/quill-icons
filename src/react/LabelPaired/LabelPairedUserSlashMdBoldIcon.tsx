import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUserSlashMdBoldIcon = (
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
      <path d='M1.188 4.188 6 7.938A3.995 3.995 0 0 1 10 4c2.188 0 4 1.813 4 4 0 1.875-1.281 3.406-2.969 3.875l8.657 6.813c.343.25.406.718.125 1.03-.25.345-.72.407-1.032.126l-18.5-14.5c-.343-.25-.406-.719-.125-1.032.25-.343.719-.406 1.032-.125m7.875 6.156c.28.094.593.156.937.156 1.375 0 2.5-1.094 2.5-2.5 0-1.375-1.125-2.5-2.5-2.5A2.487 2.487 0 0 0 7.5 8c0 .563.156 1.063.438 1.469zM8.25 13.53 10.125 15H8.563a4.08 4.08 0 0 0-4.032 3.5h10.063l1.812 1.438c-.125.062-.218.062-.343.062H3.906A.907.907 0 0 1 3 19.094c0-2.969 2.313-5.407 5.25-5.563' />
    </g>
    <defs>
      <clipPath id='6f212b8f9355f1a48e5cfc586f053363__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUserSlashMdBoldIcon);
export default ForwardRef;
