import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBookmarkCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={18}
    viewBox='0 0 9 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 4.625C0 4.015.492 3.5 1.125 3.5h6.75C8.485 3.5 9 4.016 9 4.625v10.313c0 .328-.258.562-.586.562a.54.54 0 0 1-.328-.094L4.5 12.875.89 15.406a.54.54 0 0 1-.327.094.54.54 0 0 1-.563-.562z' />
    </g>
    <defs>
      <clipPath id='21d13f214f39baaa5239d7e97bdd2118__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBookmarkCaptionFillIcon);
export default ForwardRef;
