import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPersonChalkboardXlBoldIcon = (
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
      <path d='M9 10.5c-.844 0-1.547-.422-1.969-1.125-.422-.656-.422-1.547 0-2.25C7.453 6.469 8.156 6 9 6c.797 0 1.5.469 1.922 1.125.422.703.422 1.594 0 2.25C10.5 10.078 9.797 10.5 9 10.5m-.656 3.75c-.047 0-.094.047-.094.047v5.953h1.5v-6zM8.25 28.875A1.11 1.11 0 0 1 7.125 30C6.469 30 6 29.531 6 28.875V16.5l-2.062 3.563c-.282.562-.985.75-1.5.421a1.05 1.05 0 0 1-.422-1.5l2.718-4.875C5.484 12.844 6.844 12 8.344 12H15V8.25A2.25 2.25 0 0 1 17.25 6h10.5C28.969 6 30 7.031 30 8.25v10.5A2.25 2.25 0 0 1 27.75 21h-10.5A2.22 2.22 0 0 1 15 18.75V16.5h2.25v2.25h10.5V8.25h-10.5V12h1.125c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125H12v14.625A1.11 1.11 0 0 1 10.875 30c-.656 0-1.125-.469-1.125-1.125V22.5h-1.5z' />
    </g>
    <defs>
      <clipPath id='c32026fee7c3d9d64af0591b64ffc48f__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPersonChalkboardXlBoldIcon);
export default ForwardRef;
