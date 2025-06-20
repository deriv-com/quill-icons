import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleSortXlFillIcon = (
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
      <path d='M0 18A11.91 11.91 0 0 1 6 7.64c3.703-2.156 8.25-2.156 12 0 3.703 2.157 6 6.094 6 10.36 0 4.313-2.297 8.25-6 10.406-3.75 2.157-8.297 2.157-12 0C2.25 26.25 0 22.313 0 18m12.516-7.266c-.282-.28-.797-.28-1.078 0l-4.5 4.5c-.188.235-.282.563-.141.844.094.235.375.422.703.422h9c.281 0 .563-.14.656-.422.14-.281.047-.61-.14-.844zm-1.078 14.579c.28.28.796.28 1.078 0l4.5-4.5c.187-.235.28-.563.14-.844a.705.705 0 0 0-.656-.469h-9c-.328 0-.61.188-.703.469-.14.281-.047.61.14.843z' />
    </g>
    <defs>
      <clipPath id='8e14b84d1ac7a0b041d039c341f9a0ee__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleSortXlFillIcon);
export default ForwardRef;
