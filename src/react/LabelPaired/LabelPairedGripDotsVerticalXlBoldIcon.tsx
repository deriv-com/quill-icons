import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGripDotsVerticalXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={36}
    viewBox='0 0 12 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3 12a1.48 1.48 0 0 1-1.5-1.5C1.5 9.703 2.156 9 3 9c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5m0 7.5A1.48 1.48 0 0 1 1.5 18c0-.797.656-1.5 1.5-1.5.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5m1.5 6c0 .844-.703 1.5-1.5 1.5a1.48 1.48 0 0 1-1.5-1.5c0-.797.656-1.5 1.5-1.5.797 0 1.5.703 1.5 1.5M9 12a1.48 1.48 0 0 1-1.5-1.5C7.5 9.703 8.156 9 9 9c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5m1.5 6c0 .844-.703 1.5-1.5 1.5A1.48 1.48 0 0 1 7.5 18c0-.797.656-1.5 1.5-1.5.797 0 1.5.703 1.5 1.5M9 27a1.48 1.48 0 0 1-1.5-1.5c0-.797.656-1.5 1.5-1.5.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5' />
    </g>
    <defs>
      <clipPath id='181f676164ea044470ce8062bbb96154__a'>
        <path d='M0 0h12v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGripDotsVerticalXlBoldIcon);
export default ForwardRef;
