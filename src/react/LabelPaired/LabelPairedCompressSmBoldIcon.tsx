import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCompressSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.75 5.281v3.063c0 .383-.3.656-.656.656H1.03a.63.63 0 0 1-.656-.656c0-.356.273-.656.656-.656h2.407V5.28c0-.355.273-.656.656-.656.355 0 .656.3.656.656M1.031 12.5h3.063c.355 0 .656.3.656.656v3.063c0 .383-.3.656-.656.656a.63.63 0 0 1-.657-.656v-2.407H1.031a.63.63 0 0 1-.656-.656c0-.355.273-.656.656-.656m8.532-7.219v2.407h2.406c.355 0 .656.3.656.656 0 .383-.3.656-.656.656H8.906a.63.63 0 0 1-.656-.656V5.28c0-.355.273-.656.656-.656.356 0 .656.3.656.656M8.906 12.5h3.063c.355 0 .656.3.656.656 0 .383-.3.656-.656.656H9.563v2.407c0 .383-.301.656-.657.656a.63.63 0 0 1-.656-.656v-3.063c0-.355.273-.656.656-.656' />
    </g>
    <defs>
      <clipPath id='8c116b6259e0d9c7aa784d71519f2c87__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCompressSmBoldIcon);
export default ForwardRef;
