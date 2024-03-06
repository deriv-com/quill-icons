import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEyeXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={27}
    height={36}
    viewBox='0 0 27 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5.484 12.375q-1.5 1.453-2.53 2.953Q1.967 16.828 1.5 18q.47 1.172 1.453 2.672 1.031 1.5 2.531 2.953A13.7 13.7 0 0 0 9 26.015q2.016.939 4.5.985 2.484-.047 4.5-.984a13.7 13.7 0 0 0 3.516-2.391q1.5-1.453 2.53-2.953.986-1.5 1.454-2.672-.469-1.172-1.453-2.672-1.032-1.5-2.531-2.953A13.7 13.7 0 0 0 18 9.985Q15.984 9.045 13.5 9q-2.484.047-4.5.984a13.7 13.7 0 0 0-3.516 2.391M13.5 7.5q2.86.046 5.11 1.125t3.937 2.672q1.64 1.547 2.719 3.187 1.077 1.641 1.64 2.954.236.563 0 1.125-.563 1.312-1.64 2.953-1.079 1.64-2.72 3.187-1.686 1.594-3.937 2.672T13.5 28.5q-2.86-.046-5.11-1.125t-3.937-2.672q-1.64-1.547-2.719-3.187T.141 18.563a1.4 1.4 0 0 1 0-1.125q.515-1.313 1.593-2.954 1.079-1.64 2.72-3.187Q6.14 9.703 8.39 8.625T13.5 7.5M9 18q0 1.22.61 2.25a4.51 4.51 0 0 0 3.89 2.25 4.51 4.51 0 0 0 3.89-2.25Q18 19.22 18 18q0-1.218-.61-2.25a4.51 4.51 0 0 0-3.89-2.25 4.51 4.51 0 0 0-3.89 2.25A4.34 4.34 0 0 0 9 18m10.5 0a5.8 5.8 0 0 1-.797 3 6.2 6.2 0 0 1-2.203 2.203 6 6 0 0 1-3 .797 6 6 0 0 1-3-.797A6.2 6.2 0 0 1 8.297 21a5.8 5.8 0 0 1-.797-3q0-1.641.797-3a6.2 6.2 0 0 1 2.203-2.203 6 6 0 0 1 3-.797q1.595 0 3 .797A6.2 6.2 0 0 1 18.703 15q.797 1.359.797 3' />
    </g>
    <defs>
      <clipPath id='a3e18383e88eb2b443f9d1588464dee5__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEyeXlRegularIcon);
export default ForwardRef;
