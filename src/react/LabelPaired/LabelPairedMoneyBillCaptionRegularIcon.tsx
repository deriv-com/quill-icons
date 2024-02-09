import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMoneyBillCaptionRegularIcon = (
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
      <path d='M11.5 5.75q.024.632.445 1.055.422.421 1.055.445V6.5a.73.73 0 0 0-.21-.54.73.73 0 0 0-.54-.21zm-.75 0h-7.5q-.023.96-.656 1.594Q1.96 7.976 1 8v3q.96.024 1.594.656.632.633.656 1.594h7.5q.024-.96.656-1.594Q12.04 11.023 13 11V8q-.96-.024-1.594-.656-.633-.633-.656-1.594M1 12.5q0 .328.21.54.212.21.54.21h.75a1.52 1.52 0 0 0-.445-1.055A1.52 1.52 0 0 0 1 11.75zm12-.75a1.52 1.52 0 0 0-1.055.445q-.421.422-.445 1.055h.75a.73.73 0 0 0 .54-.21.73.73 0 0 0 .21-.54zm-11.25-6a.73.73 0 0 0-.54.21.73.73 0 0 0-.21.54v.75a1.52 1.52 0 0 0 1.055-.445q.421-.423.445-1.055zm-1.5.75q.024-.632.445-1.055Q1.117 5.024 1.75 5h10.5q.633.024 1.055.445.421.423.445 1.055v6a1.52 1.52 0 0 1-.445 1.055q-.422.421-1.055.445H1.75a1.52 1.52 0 0 1-1.055-.445A1.52 1.52 0 0 1 .25 12.5zm8.25 3q-.024-.843-.75-1.29-.75-.42-1.5 0-.726.446-.75 1.29.024.844.75 1.29.75.42 1.5 0 .726-.446.75-1.29m-3.75 0q0-.609.305-1.125.304-.516.82-.82Q6.415 7.25 7 7.25a2.26 2.26 0 0 1 1.945 1.125q.305.516.305 1.125t-.305 1.125A2.255 2.255 0 0 1 7 11.75a2.26 2.26 0 0 1-1.945-1.125A2.17 2.17 0 0 1 4.75 9.5' />
    </g>
    <defs>
      <clipPath id='382cfeacc7f0543b1d3e3a1c01dce972__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMoneyBillCaptionRegularIcon);
export default ForwardRef;
