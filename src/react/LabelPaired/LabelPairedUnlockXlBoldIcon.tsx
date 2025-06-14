import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUnlockXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6.75 12v3H18c1.64 0 3 1.36 3 3v9c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3v-9c0-1.64 1.313-3 3-3h1.5v-3c0-3.281 2.672-6 6-6 2.672 0 4.922 1.781 5.672 4.172a1.12 1.12 0 0 1-.703 1.406 1.12 1.12 0 0 1-1.406-.703c-.516-1.5-1.922-2.625-3.563-2.625A3.73 3.73 0 0 0 6.75 12m-4.5 6v9c0 .422.328.75.75.75h15c.375 0 .75-.328.75-.75v-9c0-.375-.375-.75-.75-.75H3c-.422 0-.75.375-.75.75' />
    </g>
    <defs>
      <clipPath id='187e2adc405a3cb65bcc4c2735c2684e__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUnlockXlBoldIcon);
export default ForwardRef;
