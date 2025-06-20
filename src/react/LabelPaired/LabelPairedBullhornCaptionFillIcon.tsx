import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBullhornCaptionFillIcon = (
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
      <path d='M11.25 4.25v3.469c.422.21.75.773.75 1.406 0 .656-.328 1.219-.75 1.43V14a.77.77 0 0 1-.469.703.76.76 0 0 1-.82-.164L8.93 13.508a6 6 0 0 0-4.242-1.758H4.5v3c0 .422-.352.75-.75.75h-1.5a.74.74 0 0 1-.75-.75v-3a1.48 1.48 0 0 1-1.5-1.5V8c0-.82.656-1.5 1.5-1.5h3.188A6 6 0 0 0 8.93 4.742l1.03-1.008a.76.76 0 0 1 .821-.164.76.76 0 0 1 .469.68m-1.5 1.805A7.48 7.48 0 0 1 4.688 8H4.5v2.25h.188c1.875 0 3.68.703 5.062 1.969V6.055' />
    </g>
    <defs>
      <clipPath id='2f537e45d515ff1edd4cb63be8170d2b__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBullhornCaptionFillIcon);
export default ForwardRef;
