import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFilterXlRegularIcon = (
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
      <path d='M0 9.375C0 8.344.797 7.5 1.828 7.5h20.297A1.88 1.88 0 0 1 24 9.375c0 .422-.187.844-.469 1.172L15 20.907v6.046c0 .844-.75 1.594-1.594 1.594-.375 0-.703-.14-.984-.375l-2.86-2.203a1.47 1.47 0 0 1-.609-1.172v-3.89L.422 10.546A1.8 1.8 0 0 1 0 9.375M1.828 9c-.187 0-.328.188-.328.375 0 .094 0 .14.047.234l8.766 10.547c.093.14.187.328.187.469v4.172L13.36 27h.046c.047 0 .094 0 .094-.047v-6.328c0-.14.047-.328.14-.469L22.407 9.61c.047-.093.094-.14.094-.234A.4.4 0 0 0 22.125 9z' />
    </g>
    <defs>
      <clipPath id='3b1018b5da543bcd497a00f43934a19c__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFilterXlRegularIcon);
export default ForwardRef;
