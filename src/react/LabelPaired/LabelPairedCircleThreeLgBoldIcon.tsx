import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleThreeLgBoldIcon = (
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
      <path d='M10 7.375q-2.227 0-4.062 1.094-1.836 1.055-2.97 2.969A8.06 8.06 0 0 0 1.876 15.5q0 2.148 1.094 4.063 1.133 1.914 2.969 2.968Q7.773 23.625 10 23.625t4.063-1.094q1.835-1.054 2.968-2.968a8.06 8.06 0 0 0 1.094-4.063 8.06 8.06 0 0 0-1.094-4.062q-1.132-1.915-2.968-2.97Q12.226 7.377 10 7.376M10 25.5q-2.735-.04-5-1.328-2.265-1.329-3.672-3.672Q0 18.118 0 15.5t1.328-5Q2.735 8.157 5 6.828q2.265-1.29 5-1.328 2.735.04 5 1.328 2.265 1.329 3.672 3.672Q20 12.882 20 15.5t-1.328 5Q17.265 22.844 15 24.172q-2.265 1.29-5 1.328m-2.812-15h5q.624.039.859.586.195.585-.235 1.055l-1.992 1.797q1.29.156 2.07 1.093.82.899.86 2.188-.04 1.406-.977 2.304-.898.938-2.304.977H9.375q-1.876-.039-2.89-1.602l-.079-.156q-.39-.78.274-1.289.78-.39 1.289.313l.117.156q.468.664 1.289.703h1.094q.585 0 1.015-.39.39-.43.391-1.016 0-.626-.43-1.016-.39-.39-.976-.39H8.438q-.626-.04-.86-.586-.195-.587.234-1.055l1.954-1.797H7.188q-.86-.079-.938-.937.078-.86.938-.938' />
    </g>
    <defs>
      <clipPath id='b22cf3f07e925c0792b578b1ceaa8f14__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleThreeLgBoldIcon);
export default ForwardRef;
