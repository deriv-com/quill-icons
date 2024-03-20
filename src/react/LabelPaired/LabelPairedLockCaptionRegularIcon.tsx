import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLockCaptionRegularIcon = (
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
      <path d='M3.25 6.5V8h4.5V6.5a2.25 2.25 0 0 0-4.5 0M2.5 8V6.5c0-1.64 1.336-3 3-3 1.64 0 3 1.36 3 3V8h.375a1.88 1.88 0 0 1 1.875 1.875v3.75A1.866 1.866 0 0 1 8.875 15.5h-6.75A1.85 1.85 0 0 1 .25 13.625v-3.75C.25 8.844 1.07 8 2.125 8zM1 9.875v3.75a1.11 1.11 0 0 0 1.125 1.125h6.75c.61 0 1.125-.492 1.125-1.125v-3.75A1.14 1.14 0 0 0 8.875 8.75h-6.75C1.492 8.75 1 9.266 1 9.875' />
    </g>
    <defs>
      <clipPath id='ebe7a5723e64fbb03f5db0814ae5447f__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLockCaptionRegularIcon);
export default ForwardRef;
