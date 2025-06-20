import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleEuroXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M21.75 18c0-3.469-1.875-6.656-4.875-8.437-3.047-1.735-6.75-1.735-9.75 0C4.078 11.343 2.25 14.53 2.25 18c0 3.516 1.828 6.703 4.875 8.484 3 1.735 6.703 1.735 9.75 0 3-1.78 4.875-4.968 4.875-8.484M0 18A11.91 11.91 0 0 1 6 7.64c3.703-2.156 8.25-2.156 12 0 3.703 2.157 6 6.094 6 10.36 0 4.313-2.297 8.25-6 10.406-3.75 2.157-8.297 2.157-12 0C2.25 26.25 0 22.313 0 18m6 .75h.75c-.047-.234-.047-.469-.047-.703 0-.235 0-.516.047-.797H6a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75h1.125c.89-2.156 3.094-3.75 5.578-3.75h1.969c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125h-1.969c-1.219 0-2.297.61-3 1.5H13.5c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H9c-.047.281-.047.516-.047.797 0 .234 0 .515.047.703h4.5c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H9.656c.703.984 1.781 1.594 3.047 1.594h1.969c.61 0 1.125.515 1.125 1.125a1.14 1.14 0 0 1-1.125 1.125h-1.969a5.97 5.97 0 0 1-5.578-3.844H6a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75' />
    </g>
    <defs>
      <clipPath id='bb03dcdf8c91adb677776a444924bdd9__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleEuroXlBoldIcon);
export default ForwardRef;
