import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneCircleUserRegularIcon = (
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
    <path d='M22.094 22.79a8.8 8.8 0 0 0 1.953-2.813q.703-1.602.703-3.477-.04-2.46-1.21-4.414a8.2 8.2 0 0 0-3.126-3.125Q18.461 7.789 16 7.75q-2.46.04-4.414 1.21a8.2 8.2 0 0 0-3.125 3.126Q7.289 14.039 7.25 16.5q0 1.875.703 3.477a8.8 8.8 0 0 0 1.953 2.812q.43-1.68 1.758-2.734 1.29-1.016 3.086-1.055h2.5q1.797.04 3.086 1.055 1.328 1.054 1.758 2.734M21 23.687q-.157-1.485-1.21-2.422-1.017-.977-2.54-1.016h-2.5q-1.524.04-2.54 1.016-1.053.937-1.21 2.422 2.187 1.523 5 1.562 2.813-.04 5-1.562M16 26.5q-2.735-.04-5-1.328-2.265-1.329-3.672-3.672Q6 19.118 6 16.5t1.328-5Q8.735 9.157 11 7.828q2.265-1.29 5-1.328 2.735.04 5 1.328 2.265 1.329 3.672 3.672Q26 13.882 26 16.5t-1.328 5Q23.265 23.844 21 25.172q-2.265 1.29-5 1.328m0-10q1.055-.039 1.64-.937.47-.938 0-1.876-.585-.898-1.64-.937-1.055.038-1.64.938-.47.937 0 1.874.585.9 1.64.938m-3.125-1.875q.039-1.758 1.563-2.695 1.562-.86 3.124 0 1.524.937 1.563 2.695-.04 1.758-1.562 2.695-1.563.86-3.125 0-1.524-.937-1.563-2.695' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCircleUserRegularIcon);
export default ForwardRef;
