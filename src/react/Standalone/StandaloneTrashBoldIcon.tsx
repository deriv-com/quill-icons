import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneTrashBoldIcon = (
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
    <path d='M14.164 8.375q-.156 0-.234.156l-.742 1.094h5.664l-.743-1.094q-.117-.156-.273-.156zm6.914 1.25h2.735q.858.078.937.938-.079.858-.937.937h-.47l-.937 12.695a2.45 2.45 0 0 1-.781 1.64 2.6 2.6 0 0 1-1.68.665h-7.89a2.6 2.6 0 0 1-1.68-.664 2.45 2.45 0 0 1-.781-1.64L8.656 11.5h-.469q-.859-.079-.937-.937.078-.86.938-.938h2.734l1.445-2.148q.665-.938 1.797-.977h3.672q1.133.04 1.836.977zm.39 1.875H10.532l.899 12.54q.117.546.625.585h7.89q.508-.039.625-.586z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneTrashBoldIcon);
export default ForwardRef;
