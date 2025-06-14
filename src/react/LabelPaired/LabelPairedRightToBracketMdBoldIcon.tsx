import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRightToBracketMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6 15.438 9.438 12 6 8.594v1.656a.74.74 0 0 1-.75.75H1.5v2h3.75a.76.76 0 0 1 .75.75zM11 12c0 .375-.156.719-.406.969l-3.625 3.625A1.44 1.44 0 0 1 5.937 17 1.414 1.414 0 0 1 4.5 15.563V14.5h-3A1.48 1.48 0 0 1 0 13v-2a1.5 1.5 0 0 1 1.5-1.5h3V8.469C4.5 7.656 5.125 7 5.938 7c.375 0 .75.156 1.03.438l3.626 3.625c.25.25.406.593.406.937m-.25 5.5h2.5c.688 0 1.25-.531 1.25-1.25v-8.5c0-.687-.562-1.25-1.25-1.25h-2.5a.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75h2.5C14.75 5 16 6.25 16 7.75v8.5c0 1.531-1.25 2.75-2.75 2.75h-2.5a.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75' />
    </g>
    <defs>
      <clipPath id='08e7c355c00ff0a889dd8663f5de3168__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRightToBracketMdBoldIcon);
export default ForwardRef;
