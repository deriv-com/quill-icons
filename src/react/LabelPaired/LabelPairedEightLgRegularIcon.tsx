import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEightLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={30}
    viewBox='0 0 13 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12.125 11.438c0 1.64-.82 3.046-2.07 3.906 1.562.742 2.695 2.344 2.695 4.219a4.676 4.676 0 0 1-4.687 4.687H4.937A4.65 4.65 0 0 1 .25 19.563a4.66 4.66 0 0 1 2.656-4.22c-1.25-.859-2.031-2.265-2.031-3.905A4.676 4.676 0 0 1 5.563 6.75h1.875a4.7 4.7 0 0 1 4.687 4.688m-4.687 4.687h-2.5A3.443 3.443 0 0 0 1.5 19.563 3.42 3.42 0 0 0 4.938 23h3.125a3.443 3.443 0 0 0 3.437-3.437c0-1.875-1.562-3.438-3.437-3.438zm0-1.25a3.443 3.443 0 0 0 3.437-3.437C10.875 9.562 9.313 8 7.438 8H5.563a3.443 3.443 0 0 0-3.438 3.438c0 1.914 1.523 3.437 3.398 3.437h1.915' />
    </g>
    <defs>
      <clipPath id='c31627e969bd774ae7a624b6aa0e7ca9__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEightLgRegularIcon);
export default ForwardRef;
