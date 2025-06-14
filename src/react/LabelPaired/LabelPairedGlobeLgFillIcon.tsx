import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGlobeLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M13.75 15.5c0 .898-.078 1.719-.156 2.5H6.367a25 25 0 0 1-.117-2.5c0-.86.04-1.68.117-2.5h7.227c.078.82.156 1.64.156 2.5m1.094-2.5h4.804c.235.82.352 1.64.352 2.5 0 .898-.117 1.719-.352 2.5h-4.804c.078-.781.156-1.64.156-2.5s-.078-1.68-.156-2.5m4.414-1.25h-4.57c-.391-2.46-1.172-4.57-2.149-5.898 3.047.82 5.547 3.007 6.719 5.898m-5.82 0H6.523a16.5 16.5 0 0 1 1.055-3.672c.43-.937.86-1.601 1.328-2.031.43-.39.781-.547 1.094-.547.273 0 .625.156 1.055.547.468.43.898 1.094 1.328 2.031.43 1.016.82 2.266 1.055 3.672m-8.165 0H.703c1.172-2.89 3.672-5.078 6.719-5.898-.977 1.328-1.758 3.437-2.149 5.898M.313 13h4.804C5.04 13.82 5 14.64 5 15.5s.04 1.719.117 2.5H.313C.078 17.219 0 16.398 0 15.5c0-.86.078-1.68.313-2.5m7.265 9.96a16.2 16.2 0 0 1-1.055-3.71h6.915a16.2 16.2 0 0 1-1.055 3.71c-.43.938-.86 1.602-1.328 2.032-.43.39-.782.508-1.055.508-.312 0-.664-.117-1.094-.508-.469-.43-.898-1.094-1.328-2.031m-2.305-3.71c.391 2.5 1.172 4.61 2.149 5.938-3.047-.82-5.547-3.008-6.719-5.938zm13.985 0c-1.172 2.93-3.672 5.117-6.719 5.938 1.016-1.329 1.758-3.438 2.149-5.938z' />
    </g>
    <defs>
      <clipPath id='d2d2368e3c9ac25a895d4b29969ada17__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGlobeLgFillIcon);
export default ForwardRef;
