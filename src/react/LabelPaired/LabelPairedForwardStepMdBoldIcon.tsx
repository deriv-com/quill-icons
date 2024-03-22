import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedForwardStepMdBoldIcon = (
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
      <path d='M7.5 6.75A.74.74 0 0 1 8.25 6a.76.76 0 0 1 .75.75v10.5a.74.74 0 0 1-.75.75.72.72 0 0 1-.75-.75v-3.281l-5.531 3.875c-.157.125-.344.156-.532.156a.92.92 0 0 1-.937-.937V6.969C.5 6.437.906 6 1.438 6c.187 0 .375.063.53.188L7.5 10.063zm0 5.406v-.281L2 8.031V16z' />
    </g>
    <defs>
      <clipPath id='6d4b6ca34306508f8e1d8b76f1199db1__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardStepMdBoldIcon);
export default ForwardRef;
