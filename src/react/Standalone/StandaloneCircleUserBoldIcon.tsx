import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneCircleUserBoldIcon = (
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
    <path d='M21.898 22.125q2.15-2.265 2.227-5.625-.078-3.438-2.383-5.742Q19.438 8.454 16 8.375q-3.438.078-5.742 2.383-2.304 2.304-2.383 5.742.078 3.36 2.266 5.625a4.8 4.8 0 0 1 1.797-2.266q1.21-.82 2.812-.859h2.5q1.602.04 2.813.86a5.05 5.05 0 0 1 1.835 2.265m-1.601 1.25h.039a3.4 3.4 0 0 0-1.094-1.797q-.82-.664-1.992-.703h-2.5q-1.172.039-1.992.703a3.18 3.18 0 0 0-1.055 1.797q1.875 1.21 4.297 1.25 2.422-.04 4.297-1.25M16 26.5q-2.735-.04-5-1.328-2.265-1.329-3.672-3.672Q6 19.118 6 16.5t1.328-5Q8.735 9.157 11 7.828q2.265-1.29 5-1.328 2.735.04 5 1.328 2.265 1.329 3.672 3.672Q26 13.882 26 16.5t-1.328 5Q23.265 23.844 21 25.172q-2.265 1.29-5 1.328m0-10.625q.899-.04 1.367-.781a1.66 1.66 0 0 0 0-1.563Q16.9 12.79 16 12.75q-.899.04-1.367.781a1.66 1.66 0 0 0 0 1.563q.468.742 1.367.781m-3.437-1.562q.078-1.954 1.718-2.97 1.719-.936 3.438 0 1.64 1.016 1.718 2.97-.078 1.953-1.718 2.968-1.719.938-3.438 0-1.64-1.015-1.719-2.968' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCircleUserBoldIcon);
export default ForwardRef;
