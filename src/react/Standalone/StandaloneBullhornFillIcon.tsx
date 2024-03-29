import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneBullhornFillIcon = (
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
    <path d='M24.75 7.75v5.781c.703.352 1.25 1.29 1.25 2.344 0 1.094-.547 2.031-1.25 2.383V24c0 .508-.312.977-.781 1.172a1.26 1.26 0 0 1-1.367-.274l-1.72-1.718a10 10 0 0 0-7.07-2.93H13.5v5c0 .703-.586 1.25-1.25 1.25h-2.5c-.703 0-1.25-.547-1.25-1.25v-5a2.47 2.47 0 0 1-2.5-2.5V14c0-1.367 1.094-2.5 2.5-2.5h5.313a10 10 0 0 0 7.07-2.93l1.719-1.68a1.26 1.26 0 0 1 1.367-.273c.468.196.781.664.781 1.133m-2.5 3.008C19.945 12.868 16.938 14 13.813 14H13.5v3.75h.313c3.124 0 6.132 1.172 8.437 3.281V10.758' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneBullhornFillIcon);
export default ForwardRef;
