import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedQuestionSmFillIcon = (
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
      <path d='M2.313 8.125c0 .492-.41.875-.876.875a.864.864 0 0 1-.874-.875c0-1.914 1.558-3.5 3.5-3.5h.875c1.914 0 3.5 1.586 3.5 3.5v.11c0 1.203-.63 2.296-1.614 2.953l-1.148.738a.63.63 0 0 0-.301.547v.027c0 .492-.41.875-.875.875a.864.864 0 0 1-.875-.875v-.027c0-.82.41-1.586 1.094-2.024l1.148-.738c.492-.328.82-.875.82-1.477v-.109c0-.957-.792-1.75-1.75-1.75h-.875c-.984 0-1.75.793-1.75 1.75m2.187 8.75c-.41 0-.766-.191-.957-.547a1.11 1.11 0 0 1 0-1.094c.191-.328.547-.546.957-.546.383 0 .738.218.93.546.191.356.191.766 0 1.094a1.04 1.04 0 0 1-.93.547' />
    </g>
    <defs>
      <clipPath id='b5552f38a7bd7f69946b7468ad725210__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedQuestionSmFillIcon);
export default ForwardRef;
