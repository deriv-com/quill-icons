import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSevenXlRegularIcon = (
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
      <path d='M0 8.25c0-.375.328-.75.75-.75h13.5c.234 0 .516.188.656.422a.85.85 0 0 1-.047.75l-12 19.5c-.187.328-.656.469-1.03.234-.329-.234-.47-.656-.235-1.031L12.89 9H.75A.74.74 0 0 1 0 8.25' />
    </g>
    <defs>
      <clipPath id='fed2515b15abe7e555cb32b788efafb3__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSevenXlRegularIcon);
export default ForwardRef;
