import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCaretUpMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={10}
    height={24}
    viewBox='0 0 10 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5 9.719 2.219 12.5H7.78zM4.281 8.28Q4.594 8.001 5 8q.405 0 .719.281l4 4q.437.5.219 1.094-.281.594-.938.625H1q-.656-.031-.937-.625-.219-.594.218-1.094z' />
    </g>
    <defs>
      <clipPath id='7918fa46103c9130d78f69a1d1b898a2__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCaretUpMdBoldIcon);
export default ForwardRef;
