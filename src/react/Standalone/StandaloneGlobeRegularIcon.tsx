import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneGlobeRegularIcon = (
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
    <path d='M16 25.25c.625 0 1.563-.547 2.383-2.227.39-.78.742-1.718.976-2.773h-6.718c.195 1.055.547 1.992.937 2.773.82 1.68 1.758 2.227 2.422 2.227M12.406 19h7.149c.117-.781.195-1.602.195-2.5 0-.86-.078-1.68-.195-2.5h-7.149a17.6 17.6 0 0 0-.156 2.5c0 .898.04 1.719.156 2.5m.235-6.25h6.718a11.8 11.8 0 0 0-.976-2.734C17.563 8.336 16.625 7.75 16 7.75c-.664 0-1.602.586-2.422 2.266-.39.78-.742 1.68-.937 2.734M20.844 14c.078.82.156 1.64.156 2.5 0 .898-.078 1.719-.156 2.5h3.515a8.6 8.6 0 0 0 .391-2.5c0-.86-.156-1.68-.39-2.5zm3.047-1.25a8.88 8.88 0 0 0-5.118-4.531c.82 1.094 1.485 2.695 1.836 4.531zm-12.54 0c.391-1.836 1.016-3.437 1.836-4.531A8.88 8.88 0 0 0 8.07 12.75zM7.602 14a9 9 0 0 0-.351 2.5c0 .898.117 1.719.352 2.5h3.554c-.117-.781-.156-1.602-.156-2.5 0-.86.04-1.68.156-2.5zm11.172 10.82a8.82 8.82 0 0 0 5.118-4.57h-3.282c-.351 1.875-1.015 3.438-1.836 4.57m-5.585 0c-.82-1.133-1.446-2.695-1.836-4.57H8.07a8.82 8.82 0 0 0 5.118 4.57M16 26.5c-3.594 0-6.875-1.875-8.672-5-1.797-3.086-1.797-6.875 0-10 1.797-3.086 5.078-5 8.672-5 3.555 0 6.836 1.914 8.633 5 1.797 3.125 1.797 6.914 0 10a9.93 9.93 0 0 1-8.633 5' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneGlobeRegularIcon);
export default ForwardRef;
