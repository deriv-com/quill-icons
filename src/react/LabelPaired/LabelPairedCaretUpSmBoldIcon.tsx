import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCaretUpSmBoldIcon = (
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
      <path d='m4.5 8.754-2.46 2.434h4.894zm-.629-1.23a.843.843 0 0 1 1.23 0l3.5 3.5a.89.89 0 0 1 .192.957A.83.83 0 0 1 8 12.5H1c-.355 0-.684-.191-.82-.52a.89.89 0 0 1 .191-.957z' />
    </g>
    <defs>
      <clipPath id='25628244ae656269c4c454492cc2b7bf__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCaretUpSmBoldIcon);
export default ForwardRef;
