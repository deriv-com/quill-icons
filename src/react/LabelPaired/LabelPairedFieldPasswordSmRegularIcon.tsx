import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFieldPasswordSmRegularIcon = (
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
      <path d='M2.875 6.813c-.738 0-1.312.601-1.312 1.312v5.25c0 .738.574 1.313 1.312 1.313h12.25c.71 0 1.313-.575 1.313-1.313v-5.25a1.33 1.33 0 0 0-1.313-1.312zM.688 8.124c0-1.203.957-2.187 2.187-2.187h12.25c1.203 0 2.188.984 2.188 2.187v5.25c0 1.23-.985 2.188-2.188 2.188H2.875a2.16 2.16 0 0 1-2.187-2.188zm11.375 5.25a.43.43 0 0 1-.438-.437V8.561a.45.45 0 0 1 .438-.437.47.47 0 0 1 .437.438v4.374a.45.45 0 0 1-.437.438M3.75 10.75c0-.465.383-.875.875-.875a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875a.864.864 0 0 1-.875-.875m2.625 0c0-.465.383-.875.875-.875a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875a.864.864 0 0 1-.875-.875m2.625 0c0-.465.383-.875.875-.875a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875A.864.864 0 0 1 9 10.75' />
    </g>
    <defs>
      <clipPath id='9804be1105098a964f5e0549ed89814e__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFieldPasswordSmRegularIcon);
export default ForwardRef;
