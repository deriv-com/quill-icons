import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPenXlRegularIcon = (
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
      <path d='m18.563 7.875-2.579 2.531 3.61 3.61 2.531-2.578q.657-.798 0-1.594l-1.969-1.969q-.797-.655-1.593 0m-3.657 3.61L3.891 22.5a3.4 3.4 0 0 0-.75 1.313l-1.266 4.312 4.313-1.266q.75-.234 1.312-.75l11.016-11.015zm6.281-4.688 2.016 2.016q.75.796.75 1.828 0 1.077-.75 1.875L8.531 27.14a4.24 4.24 0 0 1-1.875 1.172l-5.672 1.64q-.468.14-.75-.187-.327-.282-.187-.703l1.64-5.672q.329-1.125 1.126-1.922L17.484 6.797q.798-.75 1.875-.75 1.032 0 1.828.75' />
    </g>
    <defs>
      <clipPath id='aa3638d92036ee0a0e61acba8acc3a21__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPenXlRegularIcon);
export default ForwardRef;
