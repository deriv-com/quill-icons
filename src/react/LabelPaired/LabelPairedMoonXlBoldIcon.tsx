import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMoonXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={36}
    viewBox='0 0 18 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6.797 10.64a8.1 8.1 0 0 0-3.281 2.954Q2.296 15.562 2.25 18q.095 3.515 2.39 5.813 2.344 2.344 5.813 2.437a9 9 0 0 0 1.828-.187q-3.14-1.125-5.062-3.797-1.923-2.625-1.969-6.141 0-3.047 1.547-5.484m2.906-3.093q.14 0 .328-.047h.844q.235 0 .469.047.563.094.703.562.093.563-.375.844a1.9 1.9 0 0 0-.469.281 7 7 0 0 0-.562.422h-.047l-.094.094a8.4 8.4 0 0 0-2.203 2.813q-.797 1.64-.797 3.562.095 3.516 2.39 5.813 2.298 2.344 5.813 2.437h.188q.375 0 .703-.047a3 3 0 0 1 .515-.047q.563-.093.797.375.235.47-.14.89-.187.142-.375.329a3.7 3.7 0 0 1-.657.516l-.093.093a.5.5 0 0 1-.141.094q-2.625 1.874-6 1.922-2.953-.047-5.297-1.453a9.8 9.8 0 0 1-3.75-3.75Q.047 20.953 0 18q.094-4.265 2.813-7.172 2.718-2.906 6.89-3.281' />
    </g>
    <defs>
      <clipPath id='66171772f5e21af9__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMoonXlBoldIcon);
export default ForwardRef;
