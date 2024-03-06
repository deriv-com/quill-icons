import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMoneyBillCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={18}
    viewBox='0 0 14 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.875 6.125A1.52 1.52 0 0 1 2.43 7.18q-.423.421-1.055.445v3.75q.633.024 1.055.445.421.422.445 1.055h8.25q.024-.633.445-1.055.422-.421 1.055-.445v-3.75a1.52 1.52 0 0 1-1.055-.445 1.52 1.52 0 0 1-.445-1.055zM.25 6.5q.024-.632.445-1.055Q1.117 5.024 1.75 5h10.5q.633.024 1.055.445.421.423.445 1.055v6a1.52 1.52 0 0 1-.445 1.055q-.422.421-1.055.445H1.75a1.52 1.52 0 0 1-1.055-.445A1.52 1.52 0 0 1 .25 12.5zM7 7.25q.609 0 1.125.305.516.304.82.82.305.54.305 1.125a2.26 2.26 0 0 1-1.125 1.945A2.17 2.17 0 0 1 7 11.75q-.609 0-1.125-.305A2.255 2.255 0 0 1 4.75 9.5a2.26 2.26 0 0 1 1.125-1.945A2.17 2.17 0 0 1 7 7.25' />
    </g>
    <defs>
      <clipPath id='d4c32a6f3495eed59162a08f8b734028__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMoneyBillCaptionBoldIcon);
export default ForwardRef;
