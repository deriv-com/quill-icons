import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSixCaptionBoldIcon = (
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
      <path d='M6.625 11q-.024-1.125-.773-1.852-.727-.75-1.852-.773-1.172.024-1.922.844l-.117.14A2.55 2.55 0 0 0 1.375 11q.024 1.125.773 1.852.727.75 1.852.773 1.125-.024 1.852-.773.75-.727.773-1.852M3.672 7.273Q3.837 7.25 4 7.25q1.594.046 2.648 1.102Q7.703 9.406 7.75 11q-.046 1.594-1.102 2.648Q5.594 14.703 4 14.75q-1.593-.046-2.648-1.102Q.297 12.594.25 11q.024-1.5.984-2.531L4.492 4.46q.375-.375.797-.094.375.375.094.797z' />
    </g>
    <defs>
      <clipPath id='30d43522fc102f64f0a695e435cf7435__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSixCaptionBoldIcon);
export default ForwardRef;
