import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedAndroidLgIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={23}
    height={30}
    viewBox='0 0 23 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M16.695 17.297q.82-.078.938-.938-.117-.86-.938-.937-.86.078-.937.937.078.86.937.938m-10.39 0q.86-.078.937-.938-.078-.86-.937-.937-.82.078-.938.937.116.86.938.938m10.703-5.664q2.46 1.366 3.945 3.672 1.524 2.265 1.797 5.195H.25q.273-2.93 1.797-5.195Q3.532 13 5.992 11.633L4.117 8.39A.42.42 0 0 1 4.078 8a.38.38 0 0 1 .352-.195q.234 0 .351.195l1.914 3.32a11.4 11.4 0 0 1 4.805-1.054q2.5 0 4.805 1.054L18.219 8a.38.38 0 0 1 .351-.195q.235 0 .352.195a.42.42 0 0 1-.04.39z' />
    </g>
    <defs>
      <clipPath id='be9d3c308ef5805a1c6b0e285c15ddf1__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedAndroidLgIcon);
export default ForwardRef;
