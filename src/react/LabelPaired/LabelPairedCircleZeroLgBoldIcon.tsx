import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleZeroLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10 7.375q-2.227 0-4.062 1.094-1.836 1.055-2.97 2.969A8.06 8.06 0 0 0 1.876 15.5q0 2.148 1.094 4.063 1.133 1.914 2.969 2.968Q7.773 23.625 10 23.625t4.063-1.094q1.835-1.054 2.968-2.968a8.06 8.06 0 0 0 1.094-4.063 8.06 8.06 0 0 0-1.094-4.062q-1.132-1.915-2.968-2.97Q12.226 7.377 10 7.376M10 25.5q-2.735-.04-5-1.328-2.265-1.329-3.672-3.672Q0 18.118 0 15.5t1.328-5Q2.735 8.157 5 6.828q2.265-1.29 5-1.328 2.735.04 5 1.328 2.265 1.329 3.672 3.672Q20 12.882 20 15.5t-1.328 5Q17.265 22.844 15 24.172q-2.265 1.29-5 1.328m0-15q1.602.038 2.656 1.094 1.055 1.054 1.094 2.656v2.5q-.039 1.602-1.094 2.656Q11.602 20.461 10 20.5q-1.602-.038-2.656-1.094-1.055-1.054-1.094-2.656v-2.5q.038-1.602 1.094-2.656Q8.398 10.539 10 10.5m-1.875 3.75v2.5q.039.78.547 1.328.546.508 1.328.547.78-.039 1.328-.547.508-.546.547-1.328v-2.5a2.04 2.04 0 0 0-.547-1.328A2.04 2.04 0 0 0 10 12.375q-.781.039-1.328.547-.508.546-.547 1.328' />
    </g>
    <defs>
      <clipPath id='a9d07e73081b00effe7fd14349fe9b73__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleZeroLgBoldIcon);
export default ForwardRef;
