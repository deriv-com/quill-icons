import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneFileShieldRegularIcon = (
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
    <path d='M17.25 25.25h.156q.469.507 1.016.977-.509.273-1.172.273h-10q-1.055-.039-1.758-.742Q4.79 25.054 4.75 24V9q.039-1.055.742-1.758T7.25 6.5h6.094q.78 0 1.328.547l4.531 4.531q.547.547.547 1.328v1.68l-1.25.508V14h-4.375a2.04 2.04 0 0 1-1.328-.547 2.04 2.04 0 0 1-.547-1.328V7.75h-5q-.547 0-.898.352Q6 8.452 6 9v15q0 .547.352.898.35.352.898.352zm1.25-12.5a1 1 0 0 0-.195-.273l-4.532-4.532a.6.6 0 0 0-.273-.156v4.336q.039.585.625.625zm-1.25 5.508q0 1.64.82 3.515T21 24.898v-8.125zm8.75 0-3.75-1.485v8.125q2.11-1.25 2.93-3.125t.82-3.515m-4.023-2.93 4.687 1.875q.547.234.586.86.04 1.288-.43 2.89-.43 1.602-1.562 3.086-1.172 1.485-3.281 2.383a.83.83 0 0 1-.704 0q-2.11-.899-3.28-2.383-1.134-1.485-1.563-3.086-.47-1.602-.43-2.89.039-.626.586-.86l4.687-1.875a.83.83 0 0 1 .704 0' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneFileShieldRegularIcon);
export default ForwardRef;
