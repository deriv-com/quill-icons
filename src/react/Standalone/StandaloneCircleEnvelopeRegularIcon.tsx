import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneCircleEnvelopeRegularIcon = (
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
    <path d='M24.75 16.5c0-3.125-1.68-5.977-4.375-7.54-2.734-1.6-6.055-1.6-8.75 0A8.63 8.63 0 0 0 7.25 16.5c0 3.164 1.64 6.016 4.375 7.578 2.695 1.602 6.016 1.602 8.75 0A8.73 8.73 0 0 0 24.75 16.5M6 16.5a9.93 9.93 0 0 1 5-8.633c3.086-1.797 6.875-1.797 10 0 3.086 1.797 5 5.078 5 8.633 0 3.594-1.914 6.875-5 8.672-3.125 1.797-6.914 1.797-10 0-3.125-1.797-5-5.078-5-8.672m6.25-3.75h7.5c.664 0 1.25.586 1.25 1.25v5c0 .703-.586 1.25-1.25 1.25h-7.5c-.703 0-1.25-.547-1.25-1.25v-5c0-.664.547-1.25 1.25-1.25m7.5 1.914V14h-7.5v.664l3.438 1.836c.078.04.195.078.312.078a.7.7 0 0 0 .273-.078zm0 1.406-2.89 1.524a1.8 1.8 0 0 1-.86.234c-.312 0-.625-.078-.898-.234L12.25 16.07V19h7.5z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCircleEnvelopeRegularIcon);
export default ForwardRef;
