import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneMoonRegularIcon = (
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
    <path d='M15.922 9.117A7.51 7.51 0 0 0 9.75 16.5c0 4.18 3.32 7.5 7.46 7.5a7.77 7.77 0 0 0 3.673-.937c-4.14-.352-7.422-3.868-7.422-8.125 0-2.266.937-4.336 2.46-5.82m2.578-.82a.56.56 0 0 1-.273.664 6.85 6.85 0 0 0-3.516 5.977 6.86 6.86 0 0 0 6.875 6.874c.39 0 .781 0 1.172-.078.273-.039.547.078.664.313.117.273.078.547-.117.742a8.7 8.7 0 0 1-6.094 2.461c-4.805 0-8.711-3.906-8.711-8.75 0-4.805 3.906-8.75 8.71-8.75.235 0 .509.04.743.04.274.038.508.233.547.507' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneMoonRegularIcon);
export default ForwardRef;
