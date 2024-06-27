import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownRightXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={36}
    viewBox='0 0 18 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M15 25.5H4.5A1.48 1.48 0 0 1 3 24c0-.797.656-1.5 1.5-1.5h6.844l-9.422-9.422a1.445 1.445 0 0 1 0-2.11 1.445 1.445 0 0 1 2.11 0l9.468 9.423V13.5c0-.797.656-1.5 1.5-1.5.797 0 1.5.703 1.5 1.5V24c0 .844-.703 1.5-1.5 1.5' />
    </g>
    <defs>
      <clipPath id='6042d9335af072b191598e5c78813655__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownRightXlFillIcon);
export default ForwardRef;
