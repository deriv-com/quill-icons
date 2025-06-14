import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLaptopMobileSmRegularIcon = (
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
      <path d='M3.75 4.625a.88.88 0 0 0-.875.875v6.125h7v.875H1.152c.164.52.63.875 1.176.875h7.547v.875H2.328A2.077 2.077 0 0 1 .25 12.172c0-.3.219-.547.52-.547H2V5.5c0-.957.766-1.75 1.75-1.75h8.75c.957 0 1.75.793 1.75 1.75v.875h-.875V5.5a.9.9 0 0 0-.875-.875zm7.875 3.938v7.874c0 .247.191.438.438.438h4.374a.45.45 0 0 0 .438-.437V8.563a.47.47 0 0 0-.437-.438h-4.375a.45.45 0 0 0-.438.438m-.875 0c0-.711.574-1.313 1.313-1.313h4.374c.711 0 1.313.602 1.313 1.313v7.874c0 .739-.602 1.313-1.312 1.313h-4.375a1.296 1.296 0 0 1-1.313-1.312z' />
    </g>
    <defs>
      <clipPath id='788bc3f103ccfd2465846d9ff2123d39__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLaptopMobileSmRegularIcon);
export default ForwardRef;
