import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSixCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={18}
    viewBox='0 0 8 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7 11q-.024-1.266-.867-2.133Q5.265 8.024 4 8q-1.267.024-2.086.867-.843.82-.914 2.063V11q.024 1.266.867 2.133.868.843 2.133.867 1.266-.024 2.133-.867Q6.976 12.265 7 11M3.227 7.344Q3.602 7.25 4 7.25q1.594.046 2.648 1.102Q7.703 9.406 7.75 11q-.046 1.594-1.102 2.648Q5.594 14.703 4 14.75q-1.593-.046-2.648-1.102Q.297 12.594.25 11v-.14a3.87 3.87 0 0 1 .96-2.391l3.634-4.102q.258-.234.539-.023.234.258.023.539z' />
    </g>
    <defs>
      <clipPath id='a31c87edd866b49364f0907f7caf4cf2__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSixCaptionRegularIcon);
export default ForwardRef;
