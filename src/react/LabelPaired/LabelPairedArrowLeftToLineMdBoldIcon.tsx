import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowLeftToLineMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 17.25V6.75A.74.74 0 0 1 .75 6a.76.76 0 0 1 .75.75v10.5a.74.74 0 0 1-.75.75.72.72 0 0 1-.75-.75m4.219-5.781 4.25-4c.312-.282.781-.282 1.062.031s.281.781-.031 1.063L6.625 11.25h6.625A.76.76 0 0 1 14 12a.74.74 0 0 1-.75.75H6.625L9.5 15.469c.313.281.313.75.031 1.062-.281.313-.75.313-1.062.032l-4.25-4A.75.75 0 0 1 4 12c0-.187.063-.406.219-.531' />
    </g>
    <defs>
      <clipPath id='8702309bb979d2cd5595187ef88af5a5__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowLeftToLineMdBoldIcon);
export default ForwardRef;
