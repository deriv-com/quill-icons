import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedZeroSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={22}
    viewBox='0 0 9 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.125 9A4.37 4.37 0 0 1 4.5 4.625 4.39 4.39 0 0 1 8.875 9v3.5A4.37 4.37 0 0 1 4.5 16.875 4.353 4.353 0 0 1 .125 12.5zM4.5 5.5A3.507 3.507 0 0 0 1 9v3.5A3.49 3.49 0 0 0 4.5 16C6.414 16 8 14.441 8 12.5V9c0-1.914-1.586-3.5-3.5-3.5' />
    </g>
    <defs>
      <clipPath id='2c82f3660247b549508761960dfe47a4__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedZeroSmRegularIcon);
export default ForwardRef;
