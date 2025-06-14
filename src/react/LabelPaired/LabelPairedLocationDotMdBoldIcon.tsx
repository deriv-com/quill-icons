import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLocationDotMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={24}
    viewBox='0 0 12 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10.5 10c0-2.469-2.031-4.5-4.5-4.5-2.5 0-4.5 2.031-4.5 4.5 0 .406.125 1 .469 1.813.312.75.781 1.624 1.312 2.5C4.187 15.75 5.22 17.125 6 18.125c.75-1 1.781-2.375 2.688-3.812.53-.876 1-1.75 1.312-2.5.344-.813.5-1.407.5-1.813m1.5 0c0 2.75-3.656 7.594-5.281 9.625a.943.943 0 0 1-1.469 0C3.656 17.594 0 12.75 0 10c0-3.312 2.688-6 6-6 3.313 0 6 2.688 6 6m-5 0c0-.531-.469-1-1-1-.562 0-1 .469-1 1 0 .563.438 1 1 1 .531 0 1-.437 1-1m-3.5 0c0-.875.469-1.687 1.25-2.156.75-.438 1.719-.438 2.5 0C8 8.312 8.5 9.125 8.5 10c0 .906-.5 1.719-1.25 2.188-.781.437-1.75.437-2.5 0A2.53 2.53 0 0 1 3.5 10' />
    </g>
    <defs>
      <clipPath id='2756672f7d3d7b0832f0145b7aae1f59__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLocationDotMdBoldIcon);
export default ForwardRef;
