import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUserSlashXlRegularIcon = (
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
      <path d='M21 12q0 1.547-.703 2.813a5.9 5.9 0 0 1-1.828 2.109l-1.266-.985a5 5 0 0 0 1.688-1.64A4.43 4.43 0 0 0 19.5 12q-.047-1.922-1.312-3.187Q16.922 7.547 15 7.5q-1.593.047-2.719.938a4.4 4.4 0 0 0-1.594 2.343l-1.265-.984a6.17 6.17 0 0 1 2.156-2.719Q13.078 6.047 15 6q2.532.047 4.266 1.734Q20.954 9.47 21 12m2.438 16.5 1.546 1.219q-.375.28-.89.281H5.906q-.609 0-.984-.422-.422-.375-.422-.984.094-3.516 2.438-5.907 2.39-2.344 5.906-2.437h.187l1.875 1.5h-2.062q-2.86.094-4.781 1.969Q6.094 25.64 6 28.5zM1.218 6.14l28.5 22.548q.517.468.141 1.03-.515.517-1.078.141L.281 7.36q-.515-.515-.14-1.078.515-.469 1.078-.14' />
    </g>
    <defs>
      <clipPath id='c8498216e95fda7175ff4e3beac14061__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUserSlashXlRegularIcon);
export default ForwardRef;
