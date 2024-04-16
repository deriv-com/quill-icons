import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownLeftSmBoldIcon = (
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
      <path d='M1.781 15.125a.63.63 0 0 1-.656-.656V7.906c0-.355.273-.656.656-.656.356 0 .657.3.657.656v5.004l6.316-6.344a.644.644 0 0 1 .902 0c.274.274.274.684 0 .93L3.34 13.813h5.004c.355 0 .656.3.656.656 0 .383-.3.656-.656.656z' />
    </g>
    <defs>
      <clipPath id='bd7f809e164b31af98adbb7f221ce73d__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownLeftSmBoldIcon);
export default ForwardRef;
