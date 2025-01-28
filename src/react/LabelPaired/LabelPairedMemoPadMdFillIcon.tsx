import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMemoPadMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 6c0-1.094.875-2 2-2h10c1.094 0 2 .906 2 2v1H0zm0 2h14v10c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2zm3 3c0 .281.219.5.5.5h7c.25 0 .5-.219.5-.5 0-.25-.25-.5-.5-.5h-7c-.281 0-.5.25-.5.5m0 3c0 .281.219.5.5.5h7c.25 0 .5-.219.5-.5 0-.25-.25-.5-.5-.5h-7c-.281 0-.5.25-.5.5m0 3c0 .281.219.5.5.5h3c.25 0 .5-.219.5-.5 0-.25-.25-.5-.5-.5h-3c-.281 0-.5.25-.5.5' />
    </g>
    <defs>
      <clipPath id='7c138effff25916b78c4e0e76e3150b9__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMemoPadMdFillIcon);
export default ForwardRef;
