import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedXmarkSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={22}
    viewBox='0 0 11 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9.602 7.879 6.73 10.75l2.872 2.898a.843.843 0 0 1 0 1.23.843.843 0 0 1-1.23 0L5.5 12.009l-2.898 2.87a.843.843 0 0 1-1.23 0 .843.843 0 0 1 0-1.23l2.87-2.898-2.87-2.871a.843.843 0 0 1 0-1.23.843.843 0 0 1 1.23 0L5.5 9.518l2.871-2.87a.843.843 0 0 1 1.23 0 .843.843 0 0 1 0 1.23' />
    </g>
    <defs>
      <clipPath id='0ebeaad2cc5d84b821df37b91dc6c625__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedXmarkSmFillIcon);
export default ForwardRef;
