import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedScissorsSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M13.836 15.781a.68.68 0 0 1-.93.082L8.531 12.2l1.012-.875 4.21 3.528c.274.246.302.656.083.93M3.063 5.063c-.63 0-1.204.355-1.532.875-.3.546-.3 1.23 0 1.75.328.546.903.875 1.532.875.601 0 1.175-.329 1.503-.876.301-.519.301-1.203 0-1.75-.328-.519-.902-.875-1.503-.875m0-1.313c1.667 0 3.062 1.395 3.062 3.063 0 .492-.137.957-.328 1.367l2.05 1.722 5.06-4.238a.68.68 0 0 1 .929.082.68.68 0 0 1-.082.93l-7.957 6.672c.191.41.328.875.328 1.34a3.075 3.075 0 0 1-3.062 3.062A3.057 3.057 0 0 1 0 14.688a3.075 3.075 0 0 1 3.063-3.063c.71 0 1.394.273 1.914.684l1.859-1.559-1.86-1.531c-.519.41-1.203.656-1.913.656A3.057 3.057 0 0 1 0 6.813 3.075 3.075 0 0 1 3.063 3.75m1.75 10.938c0-.602-.356-1.176-.875-1.504-.547-.301-1.231-.301-1.75 0a1.77 1.77 0 0 0-.876 1.504c0 .628.329 1.203.876 1.53.519.302 1.203.302 1.75 0 .519-.327.874-.902.874-1.53' />
    </g>
    <defs>
      <clipPath id='669842e40bd66a0557b4687b8b19d186__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedScissorsSmBoldIcon);
export default ForwardRef;
