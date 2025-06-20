import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleChevronLeftXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M24 18c0 4.313-2.297 8.25-6 10.406-3.75 2.157-8.297 2.157-12 0C2.25 26.25 0 22.313 0 18A11.91 11.91 0 0 1 6 7.64c3.703-2.156 8.25-2.156 12 0 3.703 2.157 6 6.094 6 10.36m-11.297-5.672L7.828 17.25a1.027 1.027 0 0 0 0 1.547l4.875 4.875a1.027 1.027 0 0 0 1.547 0c.469-.422.469-1.125 0-1.594L10.172 18l4.078-4.078c.469-.422.469-1.125 0-1.594a1.103 1.103 0 0 0-1.547 0' />
    </g>
    <defs>
      <clipPath id='001c5c17ff5037a84a02a6900264e666__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleChevronLeftXlFillIcon);
export default ForwardRef;
