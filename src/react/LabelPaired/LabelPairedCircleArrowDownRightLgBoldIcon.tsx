import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleArrowDownRightLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10 23.625q2.227 0 4.063-1.094 1.835-1.054 2.968-2.968a8.06 8.06 0 0 0 1.094-4.063 8.06 8.06 0 0 0-1.094-4.062q-1.132-1.915-2.968-2.97Q12.226 7.377 10 7.376T5.938 8.469q-1.836 1.055-2.97 2.969A8.06 8.06 0 0 0 1.876 15.5q0 2.148 1.094 4.063 1.133 1.914 2.969 2.968Q7.773 23.625 10 23.625M10 5.5q2.735.04 5 1.328 2.265 1.329 3.672 3.672Q20 12.882 20 15.5t-1.328 5Q17.265 22.844 15 24.172q-2.265 1.29-5 1.328-2.735-.04-5-1.328-2.265-1.329-3.672-3.672Q0 18.118 0 15.5t1.328-5Q2.735 8.157 5 6.828q2.265-1.29 5-1.328M7.5 19.875q-.86-.078-.937-.937.078-.86.937-.938h3.672l-5.274-5.273q-.546-.664 0-1.329.664-.546 1.329 0l5.273 5.274v-3.985q.078-.858.938-.937.858.078.937.938v6.25q-.079.858-.937.937z' />
    </g>
    <defs>
      <clipPath id='0ecf915791cd3929c1ac1d6373c68a20__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleArrowDownRightLgBoldIcon);
export default ForwardRef;
