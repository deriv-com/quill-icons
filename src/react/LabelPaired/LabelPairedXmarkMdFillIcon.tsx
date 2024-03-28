import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedXmarkMdFillIcon = (
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
      <path d='M10.688 8.719 7.406 12l3.282 3.313a.964.964 0 0 1 0 1.406.964.964 0 0 1-1.407 0L6 13.437 2.688 16.72a.964.964 0 0 1-1.407 0 .964.964 0 0 1 0-1.407L4.563 12 1.28 8.719a.964.964 0 0 1 0-1.406.964.964 0 0 1 1.407 0L6 10.593l3.281-3.28a.964.964 0 0 1 1.406 0 .964.964 0 0 1 0 1.406' />
    </g>
    <defs>
      <clipPath id='faf8797f78e7b2c39b10206673cd0f85__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedXmarkMdFillIcon);
export default ForwardRef;
