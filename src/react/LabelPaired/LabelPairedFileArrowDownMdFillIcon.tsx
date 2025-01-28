import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileArrowDownMdFillIcon = (
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
      <path d='M2 4h5v4c0 .563.438 1 1 1h4v9c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2V6c0-1.094.875-2 2-2m6 0 4 4H8zm-1.25 7.25h-.031a.74.74 0 0 0-.75-.75.76.76 0 0 0-.75.75v3.219L4.25 13.5a.684.684 0 0 0-1.031 0 .684.684 0 0 0 0 1.031l2.25 2.25a.684.684 0 0 0 1.031 0l2.25-2.25a.684.684 0 0 0 0-1.031.684.684 0 0 0-1.031 0l-.969.969z' />
    </g>
    <defs>
      <clipPath id='4c9a9b1febfdc0369a7c8c87f21cd74d__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileArrowDownMdFillIcon);
export default ForwardRef;
