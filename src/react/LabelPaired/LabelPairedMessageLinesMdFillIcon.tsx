import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMessageLinesMdFillIcon = (
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
      <path d='M0 6c0-1.094.875-2 2-2h12c1.094 0 2 .906 2 2v9c0 1.125-.906 2-2 2H9.656l-3.875 2.906c-.156.125-.343.125-.531.063A.51.51 0 0 1 5 19.5V17H2c-1.125 0-2-.875-2-2zm4.75 2.5a.74.74 0 0 0-.75.75c0 .438.313.75.75.75h6.5a.74.74 0 0 0 .75-.75.76.76 0 0 0-.75-.75zm0 3a.74.74 0 0 0-.75.75c0 .438.313.75.75.75h3.5a.74.74 0 0 0 .75-.75.76.76 0 0 0-.75-.75z' />
    </g>
    <defs>
      <clipPath id='776e219d61a660c0dda3460519525e41__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMessageLinesMdFillIcon);
export default ForwardRef;
