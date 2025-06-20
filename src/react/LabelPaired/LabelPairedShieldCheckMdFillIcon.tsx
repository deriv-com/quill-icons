import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedShieldCheckMdFillIcon = (
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
      <path d='m8.406 4.094 5.875 2.5c.688.312 1.219.968 1.219 1.781-.031 3.125-1.312 8.781-6.687 11.375-.532.25-1.126.25-1.657 0C1.781 17.156.5 11.5.5 8.375c-.031-.812.5-1.469 1.188-1.781l5.875-2.5a1 1 0 0 1 .843 0M9.75 10.5c0-.937-.812-1.75-1.75-1.75-.969 0-1.75.813-1.75 1.75 0 .719.406 1.313 1 1.594v2.156c0 .438.313.75.75.75a.74.74 0 0 0 .75-.75v-2.156c.563-.281 1-.875 1-1.594' />
    </g>
    <defs>
      <clipPath id='c5458b2ce24968c63d03e56a0222f500__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedShieldCheckMdFillIcon);
export default ForwardRef;
