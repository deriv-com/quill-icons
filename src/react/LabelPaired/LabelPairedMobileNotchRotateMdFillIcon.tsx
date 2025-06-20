import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMobileNotchRotateMdFillIcon = (
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
      <path d='M.5 6.5C.5 5.125 1.594 4 3 4h6c1.375 0 2.5 1.125 2.5 2.5v3.875c-.156.063-.312.156-.469.219C10.72 10.25 10.25 10 9.75 10c-.094 0-.187.031-.25.031V6.5c0-.25-.25-.5-.5-.5H8v.5c0 .281-.25.5-.5.5h-3a.494.494 0 0 1-.5-.5V6H3c-.281 0-.5.25-.5.5v11c0 .281.219.5.5.5h5.594a5.3 5.3 0 0 0 1.437 1.781c-.312.157-.687.219-1.062.219H3a2.47 2.47 0 0 1-2.5-2.5zm3.5 10c0-.25.219-.5.5-.5h3c.25 0 .5.25.5.5 0 .281-.25.5-.5.5h-3a.494.494 0 0 1-.5-.5m5-4.75a.74.74 0 0 1 .75-.75.76.76 0 0 1 .75.75v.406a4.43 4.43 0 0 1 3-1.156c1.844 0 3.406 1.125 4.125 2.719a.75.75 0 0 1-.406.969.71.71 0 0 1-.969-.376c-.469-1.062-1.531-1.812-2.75-1.812-.906 0-1.687.406-2.25 1h1a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75h-2.5a.72.72 0 0 1-.75-.75zm.375 5.563c-.187-.375 0-.813.375-1 .375-.157.813.03 1 .406.438 1.062 1.5 1.781 2.75 1.781a2.91 2.91 0 0 0 2.219-1h-.969a.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75h2.5a.76.76 0 0 1 .75.75v2.5a.74.74 0 0 1-.75.75.72.72 0 0 1-.75-.75v-.375a4.52 4.52 0 0 1-3 1.125c-1.875 0-3.437-1.094-4.125-2.687' />
    </g>
    <defs>
      <clipPath id='676868e69ecf5ae0209cce7e4a54e23e__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMobileNotchRotateMdFillIcon);
export default ForwardRef;
