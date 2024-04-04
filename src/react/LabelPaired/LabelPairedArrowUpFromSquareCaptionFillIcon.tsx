import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpFromSquareCaptionFillIcon = (
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
      <path d='m6.516 3.734 2.25 2.25a.723.723 0 0 1 0 1.055.723.723 0 0 1-1.055 0l-.961-.96V11c0 .422-.352.75-.75.75a.74.74 0 0 1-.75-.75V6.078l-.984.961a.723.723 0 0 1-1.055 0 .723.723 0 0 1 0-1.055l2.25-2.25a.723.723 0 0 1 1.055 0M1.5 6.125v7.5c0 .21.164.375.375.375h8.25a.385.385 0 0 0 .375-.375v-7.5a.4.4 0 0 0-.375-.375h-.187a.74.74 0 0 1-.75-.75c0-.398.328-.75.75-.75h.187A1.88 1.88 0 0 1 12 6.125v7.5a1.866 1.866 0 0 1-1.875 1.875h-8.25A1.85 1.85 0 0 1 0 13.625v-7.5C0 5.094.82 4.25 1.875 4.25h.188c.398 0 .75.352.75.75 0 .422-.352.75-.75.75h-.188a.385.385 0 0 0-.375.375' />
    </g>
    <defs>
      <clipPath id='864cb86217c14cf7b18f2b3bdce162ee__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpFromSquareCaptionFillIcon);
export default ForwardRef;
