import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEightMdFillIcon = (
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
      <path d='M9.5 9a4 4 0 0 1-1.125 2.781C9.344 12.531 10 13.687 10 15c0 2.219-1.812 4-4 4H4c-2.219 0-4-1.781-4-4 0-1.312.625-2.469 1.625-3.219C.906 11.062.5 10.094.5 9c0-2.187 1.781-4 4-4h1c2.188 0 4 1.813 4 4m-4 4H4c-1.125 0-2 .906-2 2 0 1.125.875 2 2 2h2c1.094 0 2-.875 2-2 0-1.094-.906-2-2-2zm0-2c1.094 0 2-.875 2-2 0-1.094-.906-2-2-2h-1c-1.125 0-2 .906-2 2 0 1.125.875 2 2 2z' />
    </g>
    <defs>
      <clipPath id='abf5046a2faad7b4945364a3dc2a4b8a__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEightMdFillIcon);
export default ForwardRef;
