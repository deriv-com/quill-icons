import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneThumbsUpFillIcon = (
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
    <path d='M18.227 7.79c1.015.233 1.68 1.21 1.484 2.226l-.117.43c-.196 1.054-.586 2.03-1.094 2.929h5.625c1.016 0 1.875.86 1.875 1.875a1.91 1.91 0 0 1-1.016 1.68c.43.351.703.86.703 1.445 0 .938-.664 1.68-1.523 1.875.156.273.273.586.273.938 0 .859-.546 1.562-1.328 1.796.04.118.078.274.078.391 0 1.055-.859 1.875-1.875 1.875h-3.828a3.6 3.6 0 0 1-2.07-.625l-1.523-.977a3.82 3.82 0 0 1-1.641-3.125v-4.335c0-1.172.508-2.227 1.406-2.93l.274-.235c1.015-.859 1.758-1.992 1.992-3.32l.078-.43c.234-1.015 1.21-1.68 2.227-1.484M7.25 14h2.5c.664 0 1.25.586 1.25 1.25V24c0 .703-.586 1.25-1.25 1.25h-2.5C6.547 25.25 6 24.703 6 24v-8.75c0-.664.547-1.25 1.25-1.25' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneThumbsUpFillIcon);
export default ForwardRef;
