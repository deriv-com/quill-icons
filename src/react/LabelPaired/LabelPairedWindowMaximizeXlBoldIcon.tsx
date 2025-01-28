import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWindowMaximizeXlBoldIcon = (
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
      <path d='M0 10.219c.047-.422.14-.797.328-1.125.281-.469.656-.89 1.172-1.172.328-.188.75-.328 1.172-.375.094 0 .187-.047.328-.047h18c1.64 0 3 1.36 3 3v15c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3V10.219M2.25 16.5v9c0 .422.328.75.75.75h18c.375 0 .75-.328.75-.75v-9z' />
    </g>
    <defs>
      <clipPath id='558ae8916d156b7fc99f63bc35bcdd3a__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWindowMaximizeXlBoldIcon);
export default ForwardRef;
