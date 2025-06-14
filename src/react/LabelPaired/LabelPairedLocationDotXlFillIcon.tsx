import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLocationDotXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={36}
    viewBox='0 0 18 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10.078 29.438a1.414 1.414 0 0 1-2.203 0C5.485 26.39 0 19.124 0 15c0-4.969 4.031-9 9-9s9 4.031 9 9c0 4.125-5.484 11.39-7.922 14.438M9 12c-1.078 0-2.062.61-2.625 1.5-.516.938-.516 2.11 0 3A3.05 3.05 0 0 0 9 18c1.031 0 2.016-.562 2.578-1.5.516-.89.516-2.062 0-3C11.016 12.61 10.031 12 9 12' />
    </g>
    <defs>
      <clipPath id='f7ac6062fe72bcf4e5a4108af06f8012__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLocationDotXlFillIcon);
export default ForwardRef;
