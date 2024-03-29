import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneGooglePlayIcon = (
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
    <path d='m18.695 15.68 2.344-2.344-10.977-6.328zM7.835 6.5l10 10-10 10a1.48 1.48 0 0 1-.858-1.367V7.906c0-.625.351-1.133.859-1.406m16.603 8.828c.742.547.742 1.836.039 2.383l-2.344 1.328-2.578-2.539 2.578-2.5zM10.063 25.992l8.632-8.633 2.344 2.344z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneGooglePlayIcon);
export default ForwardRef;
