import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPauseMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={10}
    height={24}
    viewBox='0 0 10 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.5 6h1C3.313 6 4 6.688 4 7.5v9A1.5 1.5 0 0 1 2.5 18h-1A1.48 1.48 0 0 1 0 16.5v-9A1.5 1.5 0 0 1 1.5 6m6 0h1c.813 0 1.5.688 1.5 1.5v9A1.5 1.5 0 0 1 8.5 18h-1A1.48 1.48 0 0 1 6 16.5v-9A1.5 1.5 0 0 1 7.5 6' />
    </g>
    <defs>
      <clipPath id='5eff00dca69783f222654486ea0853ea__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPauseMdFillIcon);
export default ForwardRef;
