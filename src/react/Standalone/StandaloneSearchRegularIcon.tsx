import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneSearchRegularIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d='M21 14.625c0-2.422-1.328-4.687-3.437-5.937-2.149-1.211-4.766-1.211-6.875 0a6.87 6.87 0 0 0-3.438 5.937c0 2.46 1.29 4.727 3.438 5.977 2.109 1.21 4.726 1.21 6.874 0 2.11-1.25 3.438-3.516 3.438-5.977m-1.602 6.172c-1.406 1.25-3.28 1.953-5.273 1.953A8.12 8.12 0 0 1 6 14.625C6 10.172 9.633 6.5 14.125 6.5c4.453 0 8.125 3.672 8.125 8.125 0 2.031-.742 3.867-1.953 5.313l5.508 5.507a.66.66 0 0 1 0 .899.66.66 0 0 1-.899 0z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneSearchRegularIcon);
export default ForwardRef;
