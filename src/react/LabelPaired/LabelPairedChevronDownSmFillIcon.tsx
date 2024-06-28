import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronDownSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m6.371 14.879-5.25-5.25a.843.843 0 0 1 0-1.23.843.843 0 0 1 1.23 0L7 13.018l4.621-4.62a.843.843 0 0 1 1.23 0 .843.843 0 0 1 0 1.23l-5.25 5.25a.843.843 0 0 1-1.23 0' />
    </g>
    <defs>
      <clipPath id='2774ed6c54861f5d60b05dc097cd92bc__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronDownSmFillIcon);
export default ForwardRef;
