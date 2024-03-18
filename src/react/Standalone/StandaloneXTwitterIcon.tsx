import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneXTwitterIcon = (
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
    <path d='M21.195 8.375h2.735l-6.016 6.914 7.11 9.336h-5.547l-4.375-5.664-4.961 5.664H7.367l6.446-7.344-6.797-8.906h5.703l3.906 5.195zm-.976 14.61h1.523L11.898 9.937h-1.64z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneXTwitterIcon);
export default ForwardRef;
