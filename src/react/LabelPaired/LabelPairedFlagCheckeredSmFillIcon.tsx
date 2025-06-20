import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFlagCheckeredSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.25 3.75a.9.9 0 0 1 .875.875v.438l1.887-.465a4.48 4.48 0 0 1 3.09.355 4.52 4.52 0 0 0 4.02 0l.273-.137c.546-.273 1.23.137 1.23.766v7.629a.86.86 0 0 1-.574.82l-.957.356a4.8 4.8 0 0 1-3.883-.192 4.87 4.87 0 0 0-3.336-.383l-1.75.438v2.625c0 .492-.41.875-.875.875a.864.864 0 0 1-.875-.875V4.625c0-.465.383-.875.875-.875m.875 5.14 1.75-.382v1.777l-1.75.383v1.777l1.313-.328c.136-.027.273-.055.437-.082v-1.75l1.04-.219c.245-.054.464-.082.71-.054v-1.75c.355 0 .738.054 1.094.164l.656.191v1.832l-1.148-.355a2.3 2.3 0 0 0-.602-.082v1.941a8 8 0 0 1 1.75.383v-1.887l.602.164c.382.11.765.192 1.148.219V9.055c-.219 0-.437-.055-.656-.11l-1.094-.328V6.922a9 9 0 0 1-1.066-.41 3.4 3.4 0 0 0-.684-.246v1.996q-.532-.041-1.066.082l-.684.164V6.43l-1.75.437zm7 4.047c.438.055.902-.027 1.367-.19l.383-.138v-1.968l-.219.054a6 6 0 0 1-1.531.137zm1.75-4.074V6.922a6.4 6.4 0 0 1-1.75.246v1.887A3.1 3.1 0 0 0 10.246 9z' />
    </g>
    <defs>
      <clipPath id='0521beb38a3b787e62d0b14cf484f5af__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFlagCheckeredSmFillIcon);
export default ForwardRef;
