import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedForwardMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7 6.938c0-.5.406-.938.938-.938.187 0 .375.063.53.188l7.22 5.218c.187.156.312.375.312.594 0 .25-.125.469-.312.625l-7.22 5.219a1.05 1.05 0 0 1-.53.156.92.92 0 0 1-.938-.937v-3.094l-5.531 3.875c-.157.125-.344.156-.532.156A.92.92 0 0 1 0 17.063V6.969C0 6.437.406 6 .938 6c.187 0 .375.063.53.188L7 10.063zm0 4.937L1.5 8.031V16L7 12.156zm6.969.125L8.5 8.063v7.906z' />
    </g>
    <defs>
      <clipPath id='cf040297bd5b100861e6524cd6a32d60__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardMdBoldIcon);
export default ForwardRef;
