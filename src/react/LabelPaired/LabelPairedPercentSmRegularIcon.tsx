import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPercentSmRegularIcon = (
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
      <path d='M2 6.375a.88.88 0 0 0-.875.875c0 .492.383.875.875.875a.88.88 0 0 0 .875-.875A.9.9 0 0 0 2 6.375M2 9a1.78 1.78 0 0 1-1.531-.875c-.301-.52-.301-1.203 0-1.75C.797 5.855 1.37 5.5 2 5.5c.602 0 1.176.355 1.504.875.3.547.3 1.23 0 1.75A1.77 1.77 0 0 1 2 9m7 4.375a.88.88 0 0 0-.875.875c0 .492.383.875.875.875a.88.88 0 0 0 .875-.875.9.9 0 0 0-.875-.875M9 16a1.78 1.78 0 0 1-1.531-.875c-.301-.52-.301-1.203 0-1.75.328-.52.902-.875 1.531-.875.602 0 1.176.355 1.504.875.3.547.3 1.23 0 1.75A1.77 1.77 0 0 1 9 16m1.613-9.734L.988 15.89a.463.463 0 0 1-.629 0 .463.463 0 0 1 0-.63l9.625-9.624a.463.463 0 0 1 .63 0 .463.463 0 0 1 0 .629' />
    </g>
    <defs>
      <clipPath id='e6ea4b5bfd6326130efe4766e9881f0b__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPercentSmRegularIcon);
export default ForwardRef;
