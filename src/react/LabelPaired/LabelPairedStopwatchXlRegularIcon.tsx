import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedStopwatchXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6 6.75c0-.375.328-.75.75-.75h7.5c.375 0 .75.375.75.75 0 .422-.375.75-.75.75h-3v3.047c2.297.187 4.406 1.172 5.953 2.672l1.735-1.735c.28-.28.796-.28 1.078 0 .28.282.28.75 0 1.079l-1.782 1.78a9.67 9.67 0 0 1 2.016 5.907c0 5.39-4.406 9.75-9.75 9.75-5.39 0-9.75-4.36-9.75-9.75a9.723 9.723 0 0 1 9-9.703V7.5h-3A.74.74 0 0 1 6 6.75m-3.75 13.5a8.27 8.27 0 0 0 4.125 7.172c2.531 1.453 5.672 1.453 8.25 0 2.531-1.5 4.125-4.219 4.125-7.172 0-2.906-1.594-5.625-4.125-7.125-2.578-1.453-5.719-1.453-8.25 0A8.25 8.25 0 0 0 2.25 20.25m9-4.5V21c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75v-5.25c0-.375.328-.75.75-.75.375 0 .75.375.75.75' />
    </g>
    <defs>
      <clipPath id='fcc4bdb7442420485928d18749808246__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStopwatchXlRegularIcon);
export default ForwardRef;
