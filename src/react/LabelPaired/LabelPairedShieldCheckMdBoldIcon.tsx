import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedShieldCheckMdBoldIcon = (
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
      <path d='M2.281 7.969c-.187.093-.281.25-.281.406 0 2.875 1.188 7.781 5.813 10 .093.063.25.063.343 0 4.625-2.187 5.813-7.125 5.844-10 0-.156-.125-.312-.281-.406L8 5.562zm12-1.375c.688.312 1.219.968 1.219 1.781-.031 3.125-1.312 8.781-6.687 11.375-.532.25-1.126.25-1.657 0C1.781 17.156.5 11.5.5 8.375c-.031-.812.5-1.469 1.188-1.781l5.875-2.5a1 1 0 0 1 .843 0zM9.75 10.5c0 .719-.437 1.313-1 1.594v2.156A.74.74 0 0 1 8 15a.72.72 0 0 1-.75-.75v-2.156c-.594-.281-1-.875-1-1.594 0-.937.781-1.75 1.75-1.75.938 0 1.75.813 1.75 1.75' />
    </g>
    <defs>
      <clipPath id='a5aae064e1ae7df7c35aa7a48e527132__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedShieldCheckMdBoldIcon);
export default ForwardRef;
