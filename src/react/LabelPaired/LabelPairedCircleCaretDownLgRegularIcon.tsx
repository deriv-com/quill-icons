import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleCaretDownLgRegularIcon = (
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
      <path d='M10 24.25q2.383-.04 4.375-1.172a9 9 0 0 0 3.203-3.203q1.172-2.07 1.172-4.375t-1.172-4.375a9 9 0 0 0-3.203-3.203Q12.383 6.789 10 6.75q-2.383.04-4.375 1.172a9 9 0 0 0-3.203 3.203Q1.25 13.195 1.25 15.5t1.172 4.375a9 9 0 0 0 3.203 3.203Q7.617 24.211 10 24.25M10 5.5q2.735.04 5 1.328 2.265 1.329 3.672 3.672Q20 12.882 20 15.5t-1.328 5Q17.265 22.844 15 24.172q-2.265 1.29-5 1.328-2.735-.04-5-1.328-2.265-1.329-3.672-3.672Q0 18.118 0 15.5t1.328-5Q2.735 8.157 5 6.828q2.265-1.29 5-1.328m0 13.75q-.585 0-.977-.43l-3.75-4.023A1.04 1.04 0 0 1 5 14.094q0-.47.313-.781a1.06 1.06 0 0 1 .78-.313h7.852q.43 0 .742.313.313.312.313.78 0 .391-.273.704l-3.75 4.023q-.39.43-.977.43m.078-1.29 3.438-3.71H6.484l3.438 3.71Q9.96 18 10 18t.078-.04' />
    </g>
    <defs>
      <clipPath id='959612772bcd1509__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleCaretDownLgRegularIcon);
export default ForwardRef;
