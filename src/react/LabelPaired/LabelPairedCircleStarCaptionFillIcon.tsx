import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleStarCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 9.5a6.14 6.14 0 0 1 .797-3A6.2 6.2 0 0 1 3 4.297 6.1 6.1 0 0 1 6 3.5q1.57 0 3 .797A6.2 6.2 0 0 1 11.203 6.5q.774 1.359.797 3a6.14 6.14 0 0 1-.797 3A6.2 6.2 0 0 1 9 14.703a6.1 6.1 0 0 1-3 .797 6.1 6.1 0 0 1-3-.797A6.2 6.2 0 0 1 .797 12.5 6.14 6.14 0 0 1 0 9.5m6-3.562a.33.33 0 0 0-.328.21L4.828 7.86l-1.898.282a.37.37 0 0 0-.305.257.34.34 0 0 0 .094.375l1.36 1.36-.329 1.875a.39.39 0 0 0 .164.375.4.4 0 0 0 .398.023L6 11.516l1.71.89q.188.094.376-.023a.39.39 0 0 0 .164-.375l-.328-1.875 1.383-1.336a.47.47 0 0 0 .093-.399.42.42 0 0 0-.304-.257l-1.899-.282-.867-1.71A.33.33 0 0 0 6 5.936' />
    </g>
    <defs>
      <clipPath id='c97161e1be9c286f50303c63a14a4c29__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleStarCaptionFillIcon);
export default ForwardRef;
