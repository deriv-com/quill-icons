import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleSterlingXlBoldIcon = (
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
      <path d='M21.75 18c0-3.469-1.875-6.656-4.875-8.437-3.047-1.735-6.75-1.735-9.75 0C4.078 11.343 2.25 14.53 2.25 18c0 3.516 1.828 6.703 4.875 8.484 3 1.735 6.703 1.735 9.75 0 3-1.78 4.875-4.968 4.875-8.484M0 18A11.91 11.91 0 0 1 6 7.64c3.703-2.156 8.25-2.156 12 0 3.703 2.157 6 6.094 6 10.36 0 4.313-2.297 8.25-6 10.406-3.75 2.157-8.297 2.157-12 0C2.25 26.25 0 22.313 0 18m12.234-4.5c-.796 0-1.406.656-1.406 1.453V16.5h1.922c.375 0 .75.375.75.75 0 .422-.375.75-.75.75h-1.922v.469q0 1.335-.422 2.531h4.969c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125h-6.75c-.422 0-.797-.187-.984-.516a1.19 1.19 0 0 1-.047-1.125l.468-.843c.376-.703.516-1.5.516-2.25V18H8.25a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75h.328v-1.547c0-2.015 1.64-3.703 3.656-3.703.47 0 .938.094 1.36.281l1.453.563c.562.234.844.89.61 1.453-.235.61-.891.89-1.454.656l-1.453-.562a.95.95 0 0 0-.516-.141' />
    </g>
    <defs>
      <clipPath id='48a8447cd7c158faf4379e15a08cd20b__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleSterlingXlBoldIcon);
export default ForwardRef;
