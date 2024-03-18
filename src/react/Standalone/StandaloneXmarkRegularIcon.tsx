import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneXmarkRegularIcon = (
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
    <path d='M21.156 22.594 16 17.398l-5.195 5.196c-.235.234-.625.234-.899 0-.234-.274-.234-.664 0-.899l5.196-5.195-5.196-5.156c-.234-.235-.234-.625 0-.899.274-.234.664-.234.899 0L16 15.641l5.156-5.196c.235-.234.625-.234.899 0 .234.274.234.664 0 .899L16.859 16.5l5.196 5.195c.234.235.234.625 0 .899-.274.234-.664.234-.899 0' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneXmarkRegularIcon);
export default ForwardRef;
