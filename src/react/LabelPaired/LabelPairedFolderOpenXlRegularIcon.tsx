import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFolderOpenXlRegularIcon = (
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
      <path d='M21 13.5c0-.797-.703-1.5-1.5-1.5h-5.531a4.55 4.55 0 0 1-3.188-1.312l-1.219-1.22 1.032-1.077-1.031 1.078A1.53 1.53 0 0 0 8.484 9H3c-.844 0-1.5.703-1.5 1.5v13.453l2.39-6A2.23 2.23 0 0 1 6 16.5h18.75c.703 0 1.406.375 1.828 1.031.422.61.516 1.36.235 2.063l-3 7.5c-.329.89-1.172 1.406-2.063 1.406H3c-1.687 0-3-1.312-3-3v-15c0-1.64 1.313-3 3-3h5.484c.797 0 1.547.328 2.11.89l1.265 1.266c.563.563 1.313.844 2.11.844H19.5c1.64 0 3 1.36 3 3V15H21zM18 27h3.75a.705.705 0 0 0 .656-.469l3-7.5a.75.75 0 0 0-.047-.703c-.14-.187-.375-.328-.609-.328H6c-.328 0-.61.188-.703.516l-3 7.5c-.094.187-.094.468.047.656.14.234.375.328.656.328z' />
    </g>
    <defs>
      <clipPath id='e08aa26031c72baca87ed37e3f6720a2__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFolderOpenXlRegularIcon);
export default ForwardRef;
