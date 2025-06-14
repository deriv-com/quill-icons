import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSearchXlFillIcon = (
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
      <path d='M19.5 15.75a9.75 9.75 0 0 1-1.875 5.766l5.906 5.953c.61.562.61 1.547 0 2.11-.562.608-1.547.608-2.11 0l-5.952-5.954c-1.594 1.219-3.61 1.875-5.719 1.875C4.36 25.5 0 21.14 0 15.75 0 10.406 4.36 6 9.75 6c5.344 0 9.75 4.406 9.75 9.75M9.75 22.5a6.7 6.7 0 0 0 5.813-3.375c1.218-2.062 1.218-4.64 0-6.75C14.343 10.313 12.14 9 9.75 9c-2.437 0-4.64 1.313-5.86 3.375-1.218 2.11-1.218 4.688 0 6.75A6.71 6.71 0 0 0 9.75 22.5' />
    </g>
    <defs>
      <clipPath id='8a55879497acf8798504c05cdce7ec3e__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSearchXlFillIcon);
export default ForwardRef;
