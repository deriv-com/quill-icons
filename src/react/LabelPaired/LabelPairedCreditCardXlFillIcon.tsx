import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCreditCardXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={27}
    height={36}
    viewBox='0 0 27 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3 7.5h21c1.64 0 3 1.36 3 3V12H0v-1.5c0-1.64 1.313-3 3-3m24 9v9c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3v-9zm-21.75 6c-.422 0-.75.375-.75.75 0 .422.328.75.75.75h3c.375 0 .75-.328.75-.75 0-.375-.375-.75-.75-.75zm5.25.75c0 .422.328.75.75.75h6c.375 0 .75-.328.75-.75 0-.375-.375-.75-.75-.75h-6c-.422 0-.75.375-.75.75' />
    </g>
    <defs>
      <clipPath id='9973167e93bbbc55a22c3d29890ca982__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCreditCardXlFillIcon);
export default ForwardRef;
