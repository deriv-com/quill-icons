import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneFloppyDiskPenRegularIcon = (
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
    <path d='M6 10.25v12.5c0 .703.547 1.25 1.25 1.25h7.89l-.312 1.25H7.25a2.47 2.47 0 0 1-2.5-2.5v-12.5c0-1.367 1.094-2.5 2.5-2.5h9.57c.664 0 1.29.273 1.758.742l2.93 2.93c.469.469.742 1.094.742 1.758v1.953L21 16.383V13.18c0-.352-.156-.664-.39-.899l-2.891-2.89c-.157-.157-.313-.235-.469-.313v3.672c0 .703-.586 1.25-1.25 1.25H8.5c-.703 0-1.25-.547-1.25-1.25V9C6.547 9 6 9.586 6 10.25M8.5 9v3.75H16V9zm3.125 10c0 .703.352 1.29.938 1.64.546.352 1.289.352 1.874 0 .547-.35.938-.937.938-1.64 0-.664-.39-1.25-.937-1.602-.586-.351-1.329-.351-1.876 0-.585.352-.937.938-.937 1.602m1.875 3.125a3.16 3.16 0 0 1-2.734-1.562c-.547-.938-.547-2.149 0-3.125.586-.938 1.601-1.563 2.734-1.563 1.094 0 2.11.625 2.695 1.563.547.976.547 2.187 0 3.125-.586.976-1.601 1.562-2.695 1.562m11.484-5.273a.553.553 0 0 0-.859 0l-.977.937 1.563 1.563.977-.938c.234-.273.234-.664 0-.898zm-6.875 5.976c-.078.078-.117.195-.156.313l-.469 1.914 1.914-.508c.079 0 .196-.078.274-.156l4.14-4.141-1.562-1.562zm5.118-6.875a1.863 1.863 0 0 1 2.656 0l.664.664a1.863 1.863 0 0 1 0 2.656L20.57 25.29c-.273.234-.547.39-.898.508l-2.93.703c-.195.078-.43 0-.586-.156-.156-.157-.195-.39-.156-.586l.742-2.93c.078-.312.235-.625.469-.86z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneFloppyDiskPenRegularIcon);
export default ForwardRef;
