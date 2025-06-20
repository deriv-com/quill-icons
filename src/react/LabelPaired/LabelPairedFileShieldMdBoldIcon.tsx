import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileShieldMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={24}
    viewBox='0 0 18 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2 18.5h7.688c.343.469.75.906 1.25 1.281-.282.157-.626.219-.938.219H2c-1.125 0-2-.875-2-2V6c0-1.094.875-2 2-2h5.156c.532 0 1.032.219 1.407.594l2.843 2.843c.375.375.594.875.594 1.407v1.625l-1.5.625V9H8c-.562 0-1-.437-1-1V5.5H2c-.281 0-.5.25-.5.5v12c0 .281.219.5.5.5m11.219-7.437a.78.78 0 0 1 .531 0l3.75 1.5c.313.124.5.406.5.687 0 2-.812 5.281-4.219 6.719a.97.97 0 0 1-.594 0C9.782 18.53 9 15.25 9 13.25a.78.78 0 0 1 .469-.687zm3.25 2.687L13.5 12.563v5.874c2.125-1.03 2.844-3.093 2.969-4.687' />
    </g>
    <defs>
      <clipPath id='8e3c785a4f48fb2597c98e7a5e2aec20__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileShieldMdBoldIcon);
export default ForwardRef;
