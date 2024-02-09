import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronRightSmRegularIcon = (
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
      <path d='M8.3 10.45q.274.3 0 .6L3.05 16.3q-.3.274-.6 0-.275-.3 0-.6l4.921-4.95L2.45 5.8q-.273-.3 0-.6.3-.274.602 0z' />
    </g>
    <defs>
      <clipPath id='9ad6e1c1a2b039c70d3950df5e057539__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronRightSmRegularIcon);
export default ForwardRef;
