import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMagnifyingGlassPlusXlBoldIcon = (
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
      <path d='M9.75 8.25c-2.719 0-5.156 1.453-6.516 3.75-1.359 2.344-1.359 5.203 0 7.5a7.46 7.46 0 0 0 6.516 3.75c2.672 0 5.11-1.406 6.469-3.75 1.36-2.297 1.36-5.156 0-7.5-1.36-2.297-3.797-3.75-6.469-3.75m0 17.25C4.36 25.5 0 21.14 0 15.75 0 10.406 4.36 6 9.75 6c5.344 0 9.75 4.406 9.75 9.75a9.9 9.9 0 0 1-2.11 6.094l6.235 6.281a1.027 1.027 0 0 1 0 1.547 1.027 1.027 0 0 1-1.547 0l-6.281-6.235A9.82 9.82 0 0 1 9.75 25.5m-1.125-5.625v-3h-3c-.656 0-1.125-.469-1.125-1.125 0-.61.469-1.125 1.125-1.125h3v-3c0-.61.469-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125v3h3c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125h-3v3A1.11 1.11 0 0 1 9.75 21c-.656 0-1.125-.469-1.125-1.125' />
    </g>
    <defs>
      <clipPath id='05b5d1a07dbd26723d230eae3d13f392__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMagnifyingGlassPlusXlBoldIcon);
export default ForwardRef;
