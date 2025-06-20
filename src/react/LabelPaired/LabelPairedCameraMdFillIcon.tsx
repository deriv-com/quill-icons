import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCameraMdFillIcon = (
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
      <path d='M4.656 6.031A1.48 1.48 0 0 1 6.063 5h3.843c.656 0 1.219.438 1.406 1.031l.344.969H14c1.094 0 2 .906 2 2v8c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2V9c0-1.094.875-2 2-2h2.313zM8 10c-1.094 0-2.062.594-2.625 1.5-.531.938-.531 2.094 0 3A3.03 3.03 0 0 0 8 16c1.063 0 2.031-.562 2.594-1.5.531-.906.531-2.062 0-3C10.03 10.594 9.063 10 8 10' />
    </g>
    <defs>
      <clipPath id='7cb38886f9af8fefe195aa8a294b0b75__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCameraMdFillIcon);
export default ForwardRef;
