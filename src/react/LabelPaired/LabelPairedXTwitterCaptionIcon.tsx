import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedXTwitterCaptionIcon = (
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
      <path d='M9.117 4.625h1.664L7.171 8.75l4.243 5.625H8.086l-2.602-3.398-2.976 3.398H.844L4.71 9.969.633 4.625H4.03l2.367 3.117zm-.586 8.766h.938l-5.93-7.828h-.984z' />
    </g>
    <defs>
      <clipPath id='b00a8fe082f3469418f11168066b7e45__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedXTwitterCaptionIcon);
export default ForwardRef;
