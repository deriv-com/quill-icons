import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPlaySmFillIcon = (
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
      <path d='m2.246 4.816 7.875 4.813q.601.41.629 1.121-.027.738-.629 1.121l-7.875 4.813q-.656.383-1.312.027-.657-.383-.684-1.148V5.938q.027-.766.684-1.149.656-.356 1.312.027' />
    </g>
    <defs>
      <clipPath id='4900d433e5db2bfc04376a5bf4135d75__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlaySmFillIcon);
export default ForwardRef;
