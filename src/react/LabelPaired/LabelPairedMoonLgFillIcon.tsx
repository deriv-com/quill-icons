import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMoonLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={30}
    viewBox='0 0 15 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8.71 6.75v.04h.743c.274.038.508.233.547.507a.56.56 0 0 1-.273.664 6.85 6.85 0 0 0-3.516 5.977 6.86 6.86 0 0 0 6.875 6.874c.39 0 .781 0 1.172-.078.273-.039.547.078.664.313.117.273.078.547-.117.742A8.7 8.7 0 0 1 8.71 24.25C3.906 24.25 0 20.344 0 15.5c0-4.805 3.906-8.75 8.71-8.75' />
    </g>
    <defs>
      <clipPath id='421890165c3c9694d36a86b9a2540c20__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMoonLgFillIcon);
export default ForwardRef;
