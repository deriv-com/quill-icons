import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRightToLineSmBoldIcon = (
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
      <path d='M12.625 6.156v9.188c0 .383-.3.656-.656.656a.63.63 0 0 1-.656-.656V6.156c0-.355.273-.656.656-.656.355 0 .656.3.656.656m-3.719 5.086-3.719 3.5a.68.68 0 0 1-.93-.027c-.245-.274-.245-.684.028-.93l2.516-2.379H1.03a.63.63 0 0 1-.656-.656c0-.355.273-.656.656-.656h5.77L4.285 7.742c-.273-.246-.273-.656-.027-.93.246-.273.656-.273.93-.027l3.718 3.5c.137.137.219.3.219.465a.69.69 0 0 1-.219.492' />
    </g>
    <defs>
      <clipPath id='f5b7cf0d1f0a57ae4c13f0e183cf4c3e__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightToLineSmBoldIcon);
export default ForwardRef;
