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
    <path d='M16 25.25q.507 0 1.133-.508.624-.507 1.289-1.719.585-1.17.937-2.773h-6.718q.351 1.602.937 2.773.665 1.211 1.29 1.72.624.507 1.132.507M12.406 19h7.188a19 19 0 0 0 .156-2.5q0-1.328-.156-2.5h-7.188a19 19 0 0 0-.156 2.5q0 1.328.156 2.5m.235-6.25h6.718q-.352-1.602-.937-2.773-.665-1.211-1.29-1.72Q16.508 7.75 16 7.75t-1.133.508q-.625.507-1.289 1.719-.586 1.17-.937 2.773M20.844 14Q21 15.21 21 16.5t-.156 2.5h3.554a9 9 0 0 0 .352-2.5 9 9 0 0 0-.352-2.5zm3.086-1.25a8.967 8.967 0 0 0-5.117-4.531q1.25 1.68 1.835 4.531zm-12.578 0q.585-2.851 1.875-4.531a8.9 8.9 0 0 0-3.047 1.758 8.3 8.3 0 0 0-2.07 2.773zM7.602 14a9 9 0 0 0-.352 2.5q0 1.29.352 2.5h3.554A20 20 0 0 1 11 16.5q0-1.29.156-2.5zm11.21 10.781a9 9 0 0 0 3.008-1.758 8.3 8.3 0 0 0 2.07-2.773h-3.242q-.585 2.852-1.835 4.531m-5.585 0q-1.29-1.68-1.875-4.531H8.109a8.3 8.3 0 0 0 2.07 2.773 8.9 8.9 0 0 0 3.048 1.758M16 26.5q-2.735-.04-5-1.328-2.265-1.329-3.672-3.672Q6 19.118 6 16.5t1.328-5Q8.735 9.157 11 7.828q2.265-1.29 5-1.328 2.735.04 5 1.328 2.265 1.329 3.672 3.672Q26 13.882 26 16.5t-1.328 5Q23.265 23.844 21 25.172q-2.265 1.29-5 1.328' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneGlobeRegularIcon);
export default ForwardRef;
