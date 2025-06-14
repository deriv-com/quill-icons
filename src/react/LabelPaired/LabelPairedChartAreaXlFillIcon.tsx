import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartAreaXlFillIcon = (
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
      <path d='M3 9v15.75c0 .422.328.75.75.75H22.5c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5H3.75C1.64 28.5 0 26.86 0 24.75V9c0-.797.656-1.5 1.5-1.5.797 0 1.5.703 1.5 1.5m4.5 13.5v.047a1.51 1.51 0 0 1-1.5-1.5v-3.938c0-.375.094-.75.328-1.03l3.75-4.22a1.514 1.514 0 0 1 2.297 0l1.828 2.204a1.098 1.098 0 0 0 1.64.093l.985-.984c.61-.61 1.64-.61 2.203.094l3.094 3.562c.234.281.375.656.375.985V21c0 .844-.703 1.5-1.5 1.5z' />
    </g>
    <defs>
      <clipPath id='0b976fa291b1b6bacb758ed18bc93f34__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartAreaXlFillIcon);
export default ForwardRef;
