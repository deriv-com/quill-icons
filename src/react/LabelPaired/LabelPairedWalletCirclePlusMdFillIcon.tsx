import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWalletCirclePlusMdFillIcon = (
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
      <path d='M0 7c0-1.094.875-2 2-2h12c.531 0 1 .469 1 1 0 .563-.469 1-1 1H2.5c-.281 0-.5.25-.5.5 0 .281.219.5.5.5H14c1.094 0 2 .906 2 2v.031c-.187 0-.344-.031-.5-.031a5.49 5.49 0 0 0-5.5 5.5c0 1.344.469 2.563 1.25 3.5H2c-1.125 0-2-.875-2-2zm11 8.5c0-2.469 2-4.5 4.5-4.5 2.469 0 4.5 2.031 4.5 4.5 0 2.5-2.031 4.5-4.5 4.5-2.5 0-4.5-2-4.5-4.5m2 0c0 .281.219.5.5.5H15v1.5c0 .281.219.5.5.5.25 0 .5-.219.5-.5V16h1.5c.25 0 .5-.219.5-.5 0-.25-.25-.5-.5-.5H16v-1.5c0-.25-.25-.5-.5-.5-.281 0-.5.25-.5.5V15h-1.5c-.281 0-.5.25-.5.5' />
    </g>
    <defs>
      <clipPath id='376c22cd154de7a640eeeee91e9fec0c__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWalletCirclePlusMdFillIcon);
export default ForwardRef;
