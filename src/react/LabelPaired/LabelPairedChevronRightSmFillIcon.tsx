import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronRightSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={22}
    viewBox='0 0 9 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8.602 10.148a.843.843 0 0 1 0 1.23l-5.25 5.25a.843.843 0 0 1-1.23 0 .843.843 0 0 1 0-1.23l4.62-4.648-4.62-4.621a.843.843 0 0 1 0-1.23.843.843 0 0 1 1.23 0z' />
    </g>
    <defs>
      <clipPath id='0d375c2942e0290edb94b5691b2d9fea__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronRightSmFillIcon);
export default ForwardRef;
