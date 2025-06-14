import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedExpandCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1 4.25h2.25c.398 0 .75.352.75.75 0 .422-.352.75-.75.75h-1.5v1.5c0 .422-.352.75-.75.75a.74.74 0 0 1-.75-.75V5c0-.398.328-.75.75-.75m.75 7.5v1.5h1.5c.398 0 .75.352.75.75 0 .422-.352.75-.75.75H1A.74.74 0 0 1 .25 14v-2.25c0-.398.328-.75.75-.75.398 0 .75.352.75.75m6-7.5H10c.398 0 .75.352.75.75v2.25c0 .422-.352.75-.75.75a.74.74 0 0 1-.75-.75v-1.5h-1.5A.74.74 0 0 1 7 5c0-.398.328-.75.75-.75m3 7.5V14c0 .422-.352.75-.75.75H7.75A.74.74 0 0 1 7 14c0-.398.328-.75.75-.75h1.5v-1.5c0-.398.328-.75.75-.75.398 0 .75.352.75.75' />
    </g>
    <defs>
      <clipPath id='7a3aee5ddd4f1e6d9092f36dd007e306__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedExpandCaptionFillIcon);
export default ForwardRef;
