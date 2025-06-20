import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPersonChalkboardXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.875 8.625c0 .656.469 1.125 1.125 1.125a1.11 1.11 0 0 0 1.125-1.125A1.14 1.14 0 0 0 9 7.5a1.11 1.11 0 0 0-1.125 1.125m3.75 0c0 .984-.516 1.828-1.312 2.297-.844.469-1.829.469-2.626 0-.843-.469-1.312-1.313-1.312-2.297 0-.937.469-1.781 1.313-2.25.796-.469 1.78-.469 2.625 0 .796.469 1.312 1.313 1.312 2.25M8.391 13.5c-.328 0-.61.094-.891.188V21h3v-7.5zM7.5 29.25c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75V15.516l-2.344 4.359a.77.77 0 0 1-1.031.328c-.375-.234-.516-.656-.328-1.031l2.766-5.156C5.719 12.796 6.984 12 8.39 12H15V8.25A2.25 2.25 0 0 1 17.25 6h10.5C28.969 6 30 7.031 30 8.25v10.5A2.25 2.25 0 0 1 27.75 21h-10.5A2.22 2.22 0 0 1 15 18.75V15h1.5v3.75c0 .422.328.75.75.75h10.5c.375 0 .75-.328.75-.75V8.25c0-.375-.375-.75-.75-.75h-10.5c-.422 0-.75.375-.75.75V12h2.25c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H12v15.75c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75V22.5h-3z' />
    </g>
    <defs>
      <clipPath id='066059f64d3724fe89ccbd47d5e0d58f__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPersonChalkboardXlRegularIcon);
export default ForwardRef;
