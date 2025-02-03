import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMagnifyingGlassMinusMdRegularIcon = (
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
      <path d='M6.5 5C4.531 5 2.719 6.063 1.719 7.75c-.969 1.719-.969 3.813 0 5.5A5.51 5.51 0 0 0 6.5 16a5.5 5.5 0 0 0 4.75-2.75c.969-1.687.969-3.781 0-5.5C10.25 6.063 8.438 5 6.5 5m0 12A6.495 6.495 0 0 1 0 10.5C0 6.938 2.906 4 6.5 4c3.563 0 6.5 2.938 6.5 6.5a6.58 6.58 0 0 1-1.562 4.25l4.406 4.406a.53.53 0 0 1 0 .719.53.53 0 0 1-.719 0l-4.406-4.437C9.594 16.438 8.094 17 6.5 17m-3-7h6c.25 0 .5.25.5.5 0 .281-.25.5-.5.5h-6a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5' />
    </g>
    <defs>
      <clipPath id='f1ca44862257df2ed998388e406d4504__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMagnifyingGlassMinusMdRegularIcon);
export default ForwardRef;
