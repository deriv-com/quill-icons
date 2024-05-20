import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSortXlBoldIcon = (
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
      <path d='M3.281 14.25h8.39L7.5 10.078zm5.25-6.281 6 6c.422.422.563 1.078.328 1.64a1.54 1.54 0 0 1-1.406.938H1.5c-.61 0-1.172-.375-1.406-.938a1.52 1.52 0 0 1 .328-1.64l6-6a1.445 1.445 0 0 1 2.11 0M3.281 21.75 7.5 25.969l4.172-4.219zm5.25 6.328c-.562.61-1.547.61-2.11 0l-6-6a1.52 1.52 0 0 1-.327-1.64A1.54 1.54 0 0 1 1.5 19.5h12c.563 0 1.125.375 1.36.938a1.52 1.52 0 0 1-.329 1.64z' />
    </g>
    <defs>
      <clipPath id='5be0d3a29b354f708bcc6aec94e9ef72__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortXlBoldIcon);
export default ForwardRef;
