import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileChartColumnSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={22}
    viewBox='0 0 11 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2 3.75h4.375v3.5c0 .492.383.875.875.875h3.5V16c0 .984-.793 1.75-1.75 1.75H2c-.984 0-1.75-.766-1.75-1.75V5.5c0-.957.766-1.75 1.75-1.75m5.25 0 3.5 3.5h-3.5zm-1.094 6.781c0-.355-.3-.656-.656-.656-.383 0-.656.3-.656.656v4.813c0 .383.273.656.656.656a.65.65 0 0 0 .656-.656zm2.407 1.75c0-.355-.301-.656-.657-.656-.383 0-.656.3-.656.656v3.063c0 .383.273.656.656.656a.65.65 0 0 0 .657-.656zm-4.813 1.75c0-.355-.3-.656-.656-.656-.383 0-.656.3-.656.656v1.313c0 .383.273.656.656.656a.65.65 0 0 0 .656-.656z' />
    </g>
    <defs>
      <clipPath id='a81642ffadf404103ff18fd482793e0a__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileChartColumnSmFillIcon);
export default ForwardRef;
