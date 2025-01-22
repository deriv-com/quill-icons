import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMagnifyingGlassPlusCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.875 4.25a4.18 4.18 0 0 0-3.586 2.063 4.18 4.18 0 0 0 0 4.125A4.13 4.13 0 0 0 4.875 12.5a4.12 4.12 0 0 0 3.563-2.062 4.18 4.18 0 0 0 0-4.126c-.75-1.265-2.11-2.062-3.563-2.062m0 9A4.87 4.87 0 0 1 0 8.375C0 5.703 2.18 3.5 4.875 3.5c2.672 0 4.875 2.203 4.875 4.875 0 1.219-.445 2.32-1.172 3.188l3.305 3.304c.14.14.14.399 0 .54a.397.397 0 0 1-.54 0L8.04 12.077c-.844.75-1.969 1.172-3.164 1.172M4.5 10.625V8.75H2.625a.37.37 0 0 1-.375-.375c0-.187.164-.375.375-.375H4.5V6.125c0-.187.164-.375.375-.375.188 0 .375.188.375.375V8h1.875c.188 0 .375.188.375.375 0 .21-.187.375-.375.375H5.25v1.875c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375' />
    </g>
    <defs>
      <clipPath id='7c9bbc4f2699aab10b46b1c2c64a5a7d__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMagnifyingGlassPlusCaptionRegularIcon);
export default ForwardRef;
