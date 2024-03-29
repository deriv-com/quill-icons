import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneGlobeFillIcon = (
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
    <path d='M19.75 16.5c0 .898-.078 1.719-.156 2.5h-7.227a25 25 0 0 1-.117-2.5c0-.86.04-1.68.117-2.5h7.227c.078.82.156 1.64.156 2.5m1.094-2.5h4.804c.235.82.352 1.64.352 2.5 0 .898-.117 1.719-.352 2.5h-4.804c.078-.781.156-1.64.156-2.5s-.078-1.68-.156-2.5m4.414-1.25h-4.57c-.391-2.46-1.172-4.57-2.149-5.898 3.047.82 5.547 3.007 6.719 5.898m-5.82 0h-6.915a16.5 16.5 0 0 1 1.055-3.672c.43-.937.86-1.601 1.328-2.031.43-.39.781-.547 1.094-.547.273 0 .625.156 1.055.547.468.43.898 1.094 1.328 2.031.43 1.016.82 2.266 1.055 3.672m-8.165 0h-4.57c1.172-2.89 3.672-5.078 6.719-5.898-.977 1.328-1.758 3.437-2.149 5.898M6.313 14h4.804c-.078.82-.117 1.64-.117 2.5s.04 1.719.117 2.5H6.312C6.079 18.219 6 17.398 6 16.5c0-.86.078-1.68.313-2.5m7.265 9.96a16.2 16.2 0 0 1-1.055-3.71h6.915a16.2 16.2 0 0 1-1.055 3.71c-.43.938-.86 1.602-1.328 2.032-.43.39-.782.508-1.055.508-.312 0-.664-.117-1.094-.508-.469-.43-.898-1.094-1.328-2.031m-2.305-3.71c.391 2.5 1.172 4.61 2.149 5.938-3.047-.82-5.547-3.008-6.719-5.938zm13.985 0c-1.172 2.93-3.672 5.117-6.719 5.938 1.016-1.329 1.758-3.438 2.148-5.938z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneGlobeFillIcon);
export default ForwardRef;
