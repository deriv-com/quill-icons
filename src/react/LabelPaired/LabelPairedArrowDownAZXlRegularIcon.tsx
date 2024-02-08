import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownAZXlRegularIcon = (
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
      <path d='m12.516 23.766-4.5 4.5q-.516.468-1.032 0l-4.5-4.5q-.468-.516 0-1.032.516-.468 1.032 0l3.234 3.188V8.25q.046-.703.75-.75.703.046.75.75v17.672l3.234-3.188q.516-.468 1.032 0 .468.516 0 1.032m7.64-15.844 3 5.953v.047l.75 1.5q.281.609-.328.984-.655.281-.984-.328L22.03 15H16.97l-.563 1.078q-.375.61-.984.328-.61-.328-.328-.984l.703-1.5h.047l3-6q.187-.422.656-.422t.656.422M19.5 9.938 17.719 13.5h3.562zm-3 9.562h6q.469 0 .656.422a.8.8 0 0 1-.047.797L18.047 27H22.5q.704.046.75.75-.046.704-.75.75h-6q-.468 0-.656-.422a.74.74 0 0 1 .094-.797L20.953 21H16.5q-.703-.046-.75-.75.046-.704.75-.75' />
    </g>
    <defs>
      <clipPath id='cd74900532685ec054c4d1d87b30ebd3__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownAZXlRegularIcon);
export default ForwardRef;
