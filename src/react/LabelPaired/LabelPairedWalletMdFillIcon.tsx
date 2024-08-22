import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWalletMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2 5h12c.531 0 1 .469 1 1 0 .563-.469 1-1 1H2.5c-.281 0-.5.25-.5.5 0 .281.219.5.5.5H14c1.094 0 2 .906 2 2v7c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2V7c0-1.094.875-2 2-2m11 7.5c-.562 0-1 .469-1 1 0 .563.438 1 1 1 .531 0 1-.437 1-1 0-.531-.469-1-1-1' />
    </g>
    <defs>
      <clipPath id='0e685983221d3b09662cce8e92d204ff__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWalletMdFillIcon);
export default ForwardRef;
