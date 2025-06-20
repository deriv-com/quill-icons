import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleSortDownXlFillIcon = (
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
      <path d='M24 18c0 4.313-2.297 8.25-6 10.406-3.75 2.157-8.297 2.157-12 0C2.25 26.25 0 22.313 0 18A11.91 11.91 0 0 1 6 7.64c3.703-2.156 8.25-2.156 12 0 3.703 2.157 6 6.094 6 10.36m-11.484 7.313 4.5-4.5c.187-.235.28-.563.14-.844a.705.705 0 0 0-.656-.469h-9c-.328 0-.61.188-.703.469-.14.281-.047.61.14.843l4.5 4.5c.282.282.797.282 1.079 0m0-14.579c-.282-.28-.797-.28-1.078 0l-4.5 4.5c-.188.235-.282.563-.141.844.094.281.375.422.703.422h9c.281 0 .563-.187.656-.422.14-.281.047-.61-.14-.844zM14.672 15h-5.39L12 12.328z' />
    </g>
    <defs>
      <clipPath id='afa3157d162d4c60f20a04eb17a4aa42__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleSortDownXlFillIcon);
export default ForwardRef;
