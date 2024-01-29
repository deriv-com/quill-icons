import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneGlobeBoldIcon = (
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
    <path d='M16 24.625q.234.04.742-.352.508-.351 1.133-1.523.507-1.055.86-2.5h-5.47q.352 1.445.86 2.5.625 1.172 1.133 1.523.508.39.742.352m-3.008-6.25h6.055q.078-.898.078-1.875t-.078-1.875h-6.055a14.5 14.5 0 0 0-.117 1.875q0 .977.117 1.875m.274-5.625h5.468q-.35-1.445-.859-2.5-.625-1.172-1.133-1.523-.507-.39-.742-.352-.235-.04-.742.352-.508.351-1.133 1.523-.507 1.055-.86 2.5m7.656 1.875Q21 15.523 21 16.5t-.078 1.875h2.969a7.4 7.4 0 0 0 .234-1.875q0-.977-.234-1.875zm2.305-1.875a8.18 8.18 0 0 0-3.868-3.633q.82 1.524 1.29 3.633zm-11.875 0q.43-2.109 1.289-3.633a8.18 8.18 0 0 0-3.868 3.633zm-3.243 1.875a7.4 7.4 0 0 0-.234 1.875q0 .977.234 1.875h2.97A22 22 0 0 1 11 16.5q0-.977.078-1.875zm11.25 9.258a8.18 8.18 0 0 0 3.868-3.633h-2.579q-.43 2.109-1.289 3.633m-6.718 0q-.82-1.524-1.29-3.633H8.774a8.18 8.18 0 0 0 3.868 3.633M16 26.5q-2.735-.04-5-1.328-2.265-1.329-3.672-3.672Q6 19.118 6 16.5t1.328-5Q8.735 9.157 11 7.828q2.265-1.29 5-1.328 2.735.04 5 1.328 2.265 1.329 3.672 3.672Q26 13.882 26 16.5t-1.328 5Q23.265 23.844 21 25.172q-2.265 1.29-5 1.328' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneGlobeBoldIcon);
export default ForwardRef;
