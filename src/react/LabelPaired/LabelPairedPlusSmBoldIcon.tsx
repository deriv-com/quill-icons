import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPlusSmBoldIcon = (
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
      <path d='M7.156 5.719v4.375h4.375c.356 0 .656.3.656.656 0 .383-.3.656-.656.656H7.156v4.375c0 .383-.3.656-.656.656a.63.63 0 0 1-.656-.656v-4.375H1.469a.63.63 0 0 1-.657-.656c0-.355.274-.656.657-.656h4.375V5.719c0-.356.273-.657.656-.657.355 0 .656.301.656.657' />
    </g>
    <defs>
      <clipPath id='11e9dd0f6a9b3c8582aedebc0822b6d1__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlusSmBoldIcon);
export default ForwardRef;
