import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUnlockLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5.25 10.5V13h9.375q1.328.039 2.227.898.858.9.898 2.227v6.25q-.04 1.328-.898 2.227-.9.858-2.227.898H3.375q-1.328-.04-2.227-.898-.858-.9-.898-2.227v-6.25q.04-1.328.898-2.227.9-.858 2.227-.898H4v-2.5q.04-2.109 1.445-3.555Q6.891 5.54 9 5.5q1.719.04 3.008 1.016 1.29.976 1.797 2.578.117.547-.43.742-.586.117-.781-.39a3.67 3.67 0 0 0-1.328-1.954Q10.289 6.79 9 6.75q-1.602.038-2.656 1.094Q5.289 8.898 5.25 10.5M1.5 16.125v6.25q.039.78.547 1.328.546.508 1.328.547h11.25q.78-.039 1.328-.547.508-.546.547-1.328v-6.25a2.04 2.04 0 0 0-.547-1.328 2.04 2.04 0 0 0-1.328-.547H3.375q-.781.039-1.328.547-.508.546-.547 1.328' />
    </g>
    <defs>
      <clipPath id='1b2c89804aea6ad01811139fb6c4e543__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUnlockLgRegularIcon);
export default ForwardRef;
