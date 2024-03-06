import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEyeXlBoldIcon = (
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
      <path d='M13.5 9.75q-2.297.047-4.172.938A11.6 11.6 0 0 0 6 12.938a16 16 0 0 0-2.297 2.624q-.89 1.36-1.406 2.438.516 1.078 1.406 2.438A16 16 0 0 0 6 23.063a11.6 11.6 0 0 0 3.328 2.25q1.875.89 4.172.937 2.297-.047 4.172-.937A11.6 11.6 0 0 0 21 23.063a16 16 0 0 0 2.297-2.625q.89-1.36 1.406-2.438-.516-1.078-1.406-2.437A16 16 0 0 0 21 12.937a11.6 11.6 0 0 0-3.328-2.25q-1.875-.89-4.172-.937m-9.047 1.547q1.688-1.594 3.938-2.672T13.5 7.5q2.86.046 5.11 1.125t3.937 2.672q1.64 1.547 2.719 3.187 1.077 1.641 1.64 2.954.236.563 0 1.125-.563 1.312-1.64 2.953-1.079 1.64-2.72 3.187-1.686 1.594-3.937 2.672T13.5 28.5q-2.86-.046-5.11-1.125t-3.937-2.672q-1.64-1.547-2.719-3.187T.141 18.563a1.4 1.4 0 0 1 0-1.125q.515-1.313 1.593-2.954 1.079-1.64 2.72-3.187M13.5 21.75q1.594-.046 2.672-1.078Q17.203 19.593 17.25 18q-.046-1.593-1.078-2.672-1.079-1.031-2.672-1.078h-.094q.094.375.094.75-.047 1.266-.89 2.11-.844.843-2.11.89-.375 0-.75-.094V18q.046 1.594 1.078 2.672 1.079 1.031 2.672 1.078m0-9.75q1.641 0 3 .797A6.2 6.2 0 0 1 18.703 15q.797 1.407.797 3a6 6 0 0 1-.797 3 6.2 6.2 0 0 1-2.203 2.203 5.8 5.8 0 0 1-3 .797 5.8 5.8 0 0 1-3-.797A6.2 6.2 0 0 1 8.297 21a6 6 0 0 1-.797-3 6 6 0 0 1 .797-3 6.2 6.2 0 0 1 2.203-2.203 5.8 5.8 0 0 1 3-.797' />
    </g>
    <defs>
      <clipPath id='a9f0e5e00cfc3b59d2d58661d9a35f58__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEyeXlBoldIcon);
export default ForwardRef;
