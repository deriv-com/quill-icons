import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMobileScreenButtonMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={24}
    viewBox='0 0 12 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.5 6c0-1.094.875-2 2-2h7c1.094 0 2 .906 2 2v12c0 1.125-.906 2-2 2h-7c-1.125 0-2-.875-2-2zm4 12c0 .281.219.5.5.5h2c.25 0 .5-.219.5-.5 0-.25-.25-.5-.5-.5H5c-.281 0-.5.25-.5.5m5-12h-7v10h7z' />
    </g>
    <defs>
      <clipPath id='c290c021ffb96454ea80dab9e853166f__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMobileScreenButtonMdFillIcon);
export default ForwardRef;
