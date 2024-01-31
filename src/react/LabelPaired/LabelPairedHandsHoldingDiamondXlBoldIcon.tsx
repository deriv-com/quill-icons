import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHandsHoldingDiamondXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M13.922 6.422A1.56 1.56 0 0 1 15 6q.61 0 1.078.422l4.5 4.5Q21 11.39 21 12t-.422 1.078l-4.5 4.5A1.56 1.56 0 0 1 15 18q-.61 0-1.078-.422l-4.5-4.5A1.56 1.56 0 0 1 9 12q0-.61.422-1.078zM3.375 9q1.454.047 2.39.984.939.938.985 2.391v6.047q.89-.75 2.11-.797 1.359 0 2.296.938l2.906 2.906q.516.515.938 1.172.422-.657.984-1.172l2.86-2.907q.937-.937 2.297-.937 1.218.047 2.109.797v-6.047q.047-1.454.984-2.39.985-.939 2.391-.985 1.454.047 2.39.984.939.938.985 2.391V22.5q0 2.344-1.64 3.984l-3.188 3.188q-.797.656-1.594 0-.655-.797 0-1.594l3.188-3.187q.984-.985.984-2.391V12.375q-.093-1.03-1.125-1.125-1.03.095-1.125 1.125v6.844q0 1.875-1.312 3.187l-.75.75-1.266 1.266-.75.75q-.797.656-1.594 0-.655-.797 0-1.594l.75-.75 1.266-1.265a.95.95 0 0 0 .281-.704q-.093-.89-.984-.984a.95.95 0 0 0-.703.281l-2.907 2.907q-1.36 1.406-1.406 3.421v2.391Q16.032 29.907 15 30q-1.03-.093-1.125-1.125v-2.39q-.047-2.016-1.406-3.422l-2.906-2.907a.95.95 0 0 0-.704-.281q-.89.094-.984.984 0 .423.281.703l1.266 1.266.75.75q.656.797 0 1.594-.797.656-1.594 0l-.75-.75-1.266-1.266-.703-.75Q4.547 21.094 4.5 19.22v-6.844q-.093-1.03-1.125-1.125-1.03.095-1.125 1.125V22.5q0 1.406.984 2.39l3.188 3.188q.656.797 0 1.594-.797.656-1.594 0l-3.187-3.188Q.047 24.844 0 22.5V12.375q.047-1.454.984-2.39.937-.939 2.391-.985' />
    </g>
    <defs>
      <clipPath id='6425daa1d147caa4__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHandsHoldingDiamondXlBoldIcon);
export default ForwardRef;
