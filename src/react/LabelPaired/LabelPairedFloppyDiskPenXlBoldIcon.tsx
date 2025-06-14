import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFloppyDiskPenXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={27}
    height={36}
    viewBox='0 0 27 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.25 10.5v15c0 .422.328.75.75.75h9.656l-.562 2.25H3c-1.687 0-3-1.312-3-3v-15c0-1.64 1.313-3 3-3h11.484c.797 0 1.547.328 2.11.89l3.515 3.516-1.593 1.594L15 9.984v-.046 4.687a1.11 1.11 0 0 1-1.125 1.125h-9c-.656 0-1.125-.469-1.125-1.125V9.75H3c-.422 0-.75.375-.75.75m17.86 1.406c.562.563.89 1.313.89 2.11v3.047l-2.25 2.25v-5.297a.75.75 0 0 0-.234-.516zM6 9.75v3.75h6.75V9.75zM7.5 21c0-1.031.563-2.016 1.5-2.578.89-.516 2.063-.516 3 0 .89.562 1.5 1.547 1.5 2.578 0 1.078-.61 2.063-1.5 2.625-.937.516-2.11.516-3 0A3.05 3.05 0 0 1 7.5 21m18.234-3.937.703.703c.704.703.704 1.922 0 2.625l-1.406 1.406-3.328-3.328 1.406-1.407c.703-.703 1.922-.703 2.625 0m-11.156 8.53 6.094-6.093L24 22.828l-6.094 6.094a1.34 1.34 0 0 1-.656.375L14.39 30c-.234.047-.515 0-.703-.187-.187-.188-.234-.47-.187-.704l.703-2.859c.047-.234.188-.469.375-.656' />
    </g>
    <defs>
      <clipPath id='ee3a08afaa70c86a043566a15b0fe13f__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFloppyDiskPenXlBoldIcon);
export default ForwardRef;
