import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWifiSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={22}
    viewBox='0 0 18 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.988 8.809c-.191.164-.465.164-.629 0-.164-.192-.164-.465 0-.63A12.29 12.29 0 0 1 9 4.626a12.27 12.27 0 0 1 8.613 3.555c.164.164.164.437 0 .629-.164.164-.437.164-.629 0A11.24 11.24 0 0 0 9 5.5C5.855 5.5 3.04 6.758.988 8.809M9 9.875a6.98 6.98 0 0 0-4.95 2.05c-.163.165-.437.165-.628 0a.43.43 0 0 1 0-.6A7.85 7.85 0 0 1 9 9.026c2.16 0 4.129.875 5.55 2.297a.43.43 0 0 1 0 .602c-.163.164-.437.164-.628 0A6.97 6.97 0 0 0 9 9.875m0 4.375a.88.88 0 0 0-.875.875c0 .492.383.875.875.875a.88.88 0 0 0 .875-.875A.9.9 0 0 0 9 14.25m0 2.625A1.78 1.78 0 0 1 7.469 16c-.301-.52-.301-1.203 0-1.75.328-.52.902-.875 1.531-.875.602 0 1.176.355 1.504.875.3.547.3 1.23 0 1.75A1.77 1.77 0 0 1 9 16.875' />
    </g>
    <defs>
      <clipPath id='0b91dcfce82a60908b54bb48b89ac4c3__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWifiSmRegularIcon);
export default ForwardRef;
