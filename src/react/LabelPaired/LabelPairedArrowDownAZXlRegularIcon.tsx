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
      <path d='m12.516 23.813-4.5 4.5c-.282.28-.797.28-1.078 0l-4.5-4.5c-.282-.282-.282-.797 0-1.079.28-.28.796-.28 1.078 0L6.75 25.97V8.25c0-.375.328-.75.75-.75.375 0 .75.375.75.75v17.719l3.188-3.235c.28-.28.796-.28 1.078 0 .28.282.28.797 0 1.078m7.64-15.891 3 6v.047l.75 1.453a.77.77 0 0 1-.328 1.031c-.375.188-.844 0-1.031-.328L22.03 15h-5.11l-.515 1.125a.77.77 0 0 1-1.031.328.77.77 0 0 1-.328-1.031l.75-1.453v-.047l3-6c.14-.234.375-.422.703-.422.281 0 .516.188.656.422M19.5 9.938 17.672 13.5h3.61zm-3 9.562h6c.281 0 .516.188.656.469a.64.64 0 0 1-.093.75L18.047 27H22.5c.375 0 .75.375.75.75 0 .422-.375.75-.75.75h-6q-.492 0-.703-.422c-.094-.234-.094-.562.094-.797L20.906 21H16.5a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75' />
    </g>
    <defs>
      <clipPath id='19111ce5c4d2dc08ff8fa5efb5a717b8__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownAZXlRegularIcon);
export default ForwardRef;
