import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFieldPasswordCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={18}
    viewBox='0 0 15 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.25 6.125c-.633 0-1.125.516-1.125 1.125v4.5a1.11 1.11 0 0 0 1.125 1.125h10.5c.61 0 1.125-.492 1.125-1.125v-4.5a1.14 1.14 0 0 0-1.125-1.125zM.375 7.25c0-1.031.82-1.875 1.875-1.875h10.5a1.88 1.88 0 0 1 1.875 1.875v4.5a1.866 1.866 0 0 1-1.875 1.875H2.25A1.85 1.85 0 0 1 .375 11.75zm9.75 4.5a.37.37 0 0 1-.375-.375v-3.75c0-.187.164-.375.375-.375.188 0 .375.188.375.375v3.75c0 .21-.187.375-.375.375M3 9.5c0-.398.328-.75.75-.75.398 0 .75.352.75.75 0 .422-.352.75-.75.75A.74.74 0 0 1 3 9.5m2.25 0c0-.398.328-.75.75-.75.398 0 .75.352.75.75 0 .422-.352.75-.75.75a.74.74 0 0 1-.75-.75m2.25 0c0-.398.328-.75.75-.75.398 0 .75.352.75.75 0 .422-.352.75-.75.75a.74.74 0 0 1-.75-.75' />
    </g>
    <defs>
      <clipPath id='fbb3b832996953863425500d058560c7__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFieldPasswordCaptionRegularIcon);
export default ForwardRef;
