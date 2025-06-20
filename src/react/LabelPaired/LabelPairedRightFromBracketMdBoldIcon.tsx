import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRightFromBracketMdBoldIcon = (
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
      <path d='M11 8.594v1.656a.74.74 0 0 1-.75.75H6.5v2h3.75a.76.76 0 0 1 .75.75v1.688L14.438 12zM16 12c0 .375-.156.719-.406.969l-3.625 3.625a1.44 1.44 0 0 1-1.031.406A1.414 1.414 0 0 1 9.5 15.563V14.5h-3A1.48 1.48 0 0 1 5 13v-2a1.5 1.5 0 0 1 1.5-1.5h3V8.469C9.5 7.656 10.125 7 10.938 7c.374 0 .75.156 1.03.438l3.626 3.625c.25.25.406.593.406.937M5.25 6.5h-2.5c-.719 0-1.25.563-1.25 1.25v8.5c0 .719.531 1.25 1.25 1.25h2.5a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75h-2.5A2.734 2.734 0 0 1 0 16.25v-8.5C0 6.25 1.219 5 2.75 5h2.5a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75' />
    </g>
    <defs>
      <clipPath id='a36c37e84e5adc0eac03cc23b1e27fa7__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRightFromBracketMdBoldIcon);
export default ForwardRef;
