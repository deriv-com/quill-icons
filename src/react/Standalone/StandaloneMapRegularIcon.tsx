import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneMapRegularIcon = (
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
    <path d='M11.39 7.828a.46.46 0 0 1 .391-.039l8.555 2.461 5.625-2.266c.586-.234 1.289.196 1.289.86V21.93c0 .39-.234.742-.625.86l-6.055 2.42c-.117.08-.234.08-.39.04l-8.555-2.46L6 25.054a.916.916 0 0 1-1.25-.86V11.11c0-.39.234-.742.586-.859zM6 11.305v12.422l5-1.993V9.312zm13.75 12.5V11.383l-7.5-2.149v12.422zm1.25-.078 5-1.993V9.312l-5 1.993z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneMapRegularIcon);
export default ForwardRef;
