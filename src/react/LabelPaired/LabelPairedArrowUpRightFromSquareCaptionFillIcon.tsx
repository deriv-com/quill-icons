import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpRightFromSquareCaptionFillIcon = (
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
      <path d='M7.5 3.5h3.75c.398 0 .75.352.75.75V8c0 .422-.352.75-.75.75A.74.74 0 0 1 10.5 8V6.078L5.766 10.79a.723.723 0 0 1-1.055 0 .723.723 0 0 1 0-1.055L9.42 5H7.5a.74.74 0 0 1-.75-.75c0-.398.328-.75.75-.75m-5.625.75H4.5c.398 0 .75.352.75.75 0 .422-.352.75-.75.75H1.875a.385.385 0 0 0-.375.375v7.5c0 .21.164.375.375.375h7.5a.385.385 0 0 0 .375-.375V11c0-.398.328-.75.75-.75.398 0 .75.352.75.75v2.625A1.866 1.866 0 0 1 9.375 15.5h-7.5A1.85 1.85 0 0 1 0 13.625v-7.5C0 5.094.82 4.25 1.875 4.25' />
    </g>
    <defs>
      <clipPath id='c343822d07606af1de3f2c80092e1f73__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpRightFromSquareCaptionFillIcon);
export default ForwardRef;
