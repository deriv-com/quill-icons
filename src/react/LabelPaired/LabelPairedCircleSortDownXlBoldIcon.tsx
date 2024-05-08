import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleSortDownXlBoldIcon = (
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
      <path d='M2.25 18c0 3.516 1.828 6.703 4.875 8.484 3 1.735 6.703 1.735 9.75 0 3-1.78 4.875-4.968 4.875-8.484 0-3.469-1.875-6.656-4.875-8.437-3.047-1.735-6.75-1.735-9.75 0C4.078 11.343 2.25 14.53 2.25 18M24 18c0 4.313-2.297 8.25-6 10.406-3.75 2.157-8.297 2.157-12 0C2.25 26.25 0 22.313 0 18A11.91 11.91 0 0 1 6 7.64c3.703-2.156 8.25-2.156 12 0 3.703 2.157 6 6.094 6 10.36m-11.484 7.313c-.282.28-.797.28-1.078 0l-4.5-4.5c-.188-.235-.282-.563-.141-.844.094-.282.375-.469.703-.469h9c.281 0 .563.188.656.469.14.281.047.61-.14.843zm0-14.579 4.5 4.5c.187.235.28.563.14.844-.093.281-.375.422-.656.422h-9c-.328 0-.61-.187-.703-.422-.14-.281-.047-.61.14-.844l4.5-4.5c.282-.28.797-.28 1.079 0M14.672 15 12 12.328 9.281 15z' />
    </g>
    <defs>
      <clipPath id='07578267ab54978602d9781726f8ab5f__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleSortDownXlBoldIcon);
export default ForwardRef;
