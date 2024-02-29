import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpXlBoldIcon = (
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
      <path d='M9.797 7.828v.047l7.875 8.25q.656.797 0 1.547-.844.656-1.594 0l-5.953-6.235v15.938Q10.032 28.407 9 28.5q-1.03-.093-1.125-1.125V11.438l-5.953 6.187q-.75.703-1.594.047-.655-.75 0-1.594l7.875-8.25Q8.532 7.5 9 7.5t.797.328' />
    </g>
    <defs>
      <clipPath id='219b162d9d1a58bce420f41acd65b12b__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpXlBoldIcon);
export default ForwardRef;
