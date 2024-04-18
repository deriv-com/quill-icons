import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSortUpXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={36}
    viewBox='0 0 15 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.5 10.078 3.281 14.25h8.39zm-1.078-2.11a1.445 1.445 0 0 1 2.11 0l6 6c.421.423.562 1.079.327 1.641-.234.563-.75.938-1.359.938h-12c-.61 0-1.172-.375-1.406-.938a1.52 1.52 0 0 1 .328-1.64z' />
    </g>
    <defs>
      <clipPath id='3784bec029e5acad0bdfe73c77d57341__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortUpXlBoldIcon);
export default ForwardRef;
