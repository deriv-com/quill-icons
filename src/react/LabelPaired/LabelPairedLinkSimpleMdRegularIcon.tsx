import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLinkSimpleMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={24}
    viewBox='0 0 18 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 12c0-2.75 2.219-5 5-5h2.5c.25 0 .5.25.5.5 0 .281-.25.5-.5.5H5c-2.219 0-4 1.813-4 4 0 2.219 1.781 4 4 4h2.5c.25 0 .5.25.5.5 0 .281-.25.5-.5.5H5c-2.781 0-5-2.219-5-5m18 0c0 2.781-2.25 5-5 5h-2.5a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5H13c2.188 0 4-1.781 4-4 0-2.187-1.812-4-4-4h-2.5a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5H13c2.75 0 5 2.25 5 5m-13.25-.5h8.5c.25 0 .5.25.5.5 0 .281-.25.5-.5.5h-8.5a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5' />
    </g>
    <defs>
      <clipPath id='f0f568373ab5000a0ce1440342f409f8__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLinkSimpleMdRegularIcon);
export default ForwardRef;
