import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPlaceholderSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3 4.625h.875v1.75H3a.88.88 0 0 0-.875.875v.875H.375V7.25A2.626 2.626 0 0 1 3 4.625M.375 9h1.75v3.5H.375zm10.5 0h1.75v3.5h-1.75zm1.75-.875h-1.75V7.25A.9.9 0 0 0 10 6.375h-.875v-1.75H10a2.626 2.626 0 0 1 2.625 2.625zm0 5.25v.875A2.626 2.626 0 0 1 10 16.875h-.875v-1.75H10a.88.88 0 0 0 .875-.875v-.875zm-10.5 0v.875c0 .492.383.875.875.875h.875v1.75H3A2.626 2.626 0 0 1 .375 14.25v-.875zm2.625 3.5v-1.75h3.5v1.75zm0-10.5v-1.75h3.5v1.75z' />
    </g>
    <defs>
      <clipPath id='be4195ce9af640c414aa1a1a8be0a6ff__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlaceholderSmFillIcon);
export default ForwardRef;
