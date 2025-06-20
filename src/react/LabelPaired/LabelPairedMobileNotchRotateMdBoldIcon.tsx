import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMobileNotchRotateMdBoldIcon = (
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
      <path d='M.5 6.5C.5 5.125 1.594 4 3 4h6c1.375 0 2.5 1.125 2.5 2.5v3.875c-.156.063-.312.156-.469.219-.25-.313-.625-.5-1.031-.563V6.5c0-.531-.469-1-1-1H8V6c0 .281-.25.5-.5.5h-3A.494.494 0 0 1 4 6v-.5H3c-.562 0-1 .469-1 1v11c0 .563.438 1 1 1h5.875c.313.5.719.938 1.156 1.281C9.72 19.938 9.344 20 9 20H3a2.47 2.47 0 0 1-2.5-2.5zM9 11.75a.74.74 0 0 1 .75-.75.76.76 0 0 1 .75.75v.406a4.43 4.43 0 0 1 3-1.156c1.844 0 3.406 1.125 4.125 2.719a.75.75 0 0 1-.406.969.71.71 0 0 1-.969-.376c-.469-1.062-1.531-1.812-2.75-1.812-.906 0-1.687.406-2.25 1h1a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75h-2.5a.72.72 0 0 1-.75-.75zm.375 5.563c-.187-.375 0-.813.375-1 .375-.157.813.03 1 .406.438 1.062 1.5 1.781 2.75 1.781a2.91 2.91 0 0 0 2.219-1h-.969a.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75h2.5a.76.76 0 0 1 .75.75v2.5a.74.74 0 0 1-.75.75.72.72 0 0 1-.75-.75v-.375a4.52 4.52 0 0 1-3 1.125c-1.875 0-3.437-1.094-4.125-2.687' />
    </g>
    <defs>
      <clipPath id='84ecf2cda95858587840359602bc127f__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMobileNotchRotateMdBoldIcon);
export default ForwardRef;
