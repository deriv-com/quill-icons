import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLaptopMobileMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4 5.5c-.281 0-.5.25-.5.5v8H11v2H1.5A1.48 1.48 0 0 1 0 14.5c0-.25.219-.5.5-.5H2V6c0-1.094.875-2 2-2h10c1.094 0 2 .906 2 2v1h-1.5V6c0-.25-.25-.5-.5-.5zm8 4A1.5 1.5 0 0 1 13.5 8h5c.813 0 1.5.688 1.5 1.5v9a1.5 1.5 0 0 1-1.5 1.5h-5a1.48 1.48 0 0 1-1.5-1.5zm1.5 0v9h5v-9z' />
    </g>
    <defs>
      <clipPath id='7d65a094e751fba205d8d8208245f6d5__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLaptopMobileMdBoldIcon);
export default ForwardRef;
