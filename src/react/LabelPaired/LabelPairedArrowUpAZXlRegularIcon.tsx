import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpAZXlRegularIcon = (
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
      <path d='m8.016 7.734 4.5 4.5q.468.516 0 1.032-.516.468-1.032 0L8.25 10.078V27.75q-.047.704-.75.75-.703-.046-.75-.75V10.078l-3.234 3.188q-.516.468-1.032 0-.468-.516 0-1.032l4.5-4.5q.516-.468 1.032 0M16.5 19.5h6q.469 0 .656.422a.8.8 0 0 1-.047.797L18.047 27H22.5q.704.046.75.75-.046.704-.75.75h-6q-.468 0-.656-.422a.74.74 0 0 1 .094-.797L20.953 21H16.5q-.703-.046-.75-.75.046-.704.75-.75m3-12q.469 0 .656.422l3 6h.047l.703 1.5q.281.656-.328.984-.609.281-.984-.328L22.03 15H16.97l-.563 1.078q-.328.61-.984.328-.61-.328-.328-.984l.75-1.5 3-6q.187-.422.656-.422m-1.781 6h3.562L19.5 9.938z' />
    </g>
    <defs>
      <clipPath id='fd5e3351392add0c236bfe0940e5fe1c__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpAZXlRegularIcon);
export default ForwardRef;
