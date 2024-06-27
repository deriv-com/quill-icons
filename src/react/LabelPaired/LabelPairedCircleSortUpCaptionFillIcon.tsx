import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleSortUpCaptionFillIcon = (
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
      <path d='M0 9.5a5.96 5.96 0 0 1 3-5.18 5.97 5.97 0 0 1 6 0 6 6 0 0 1 3 5.18 6.01 6.01 0 0 1-3 5.203 5.97 5.97 0 0 1-6 0A5.97 5.97 0 0 1 0 9.5m6.258-3.633a.397.397 0 0 0-.54 0l-2.25 2.25c-.093.117-.14.281-.07.422.047.117.188.211.352.211h4.5c.14 0 .281-.07.328-.21.07-.142.024-.306-.07-.423zm0 7.29 2.25-2.25c.094-.118.14-.282.07-.423a.35.35 0 0 0-.328-.234h-4.5a.36.36 0 0 0-.352.234c-.07.141-.023.305.07.422l2.25 2.25c.141.14.4.14.54 0M7.336 11 6 12.36 4.64 11z' />
    </g>
    <defs>
      <clipPath id='bc29d390371f16efa3b4a4a29acb4ed0__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleSortUpCaptionFillIcon);
export default ForwardRef;
