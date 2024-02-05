import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCompressXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.5 8.625v5.25Q7.407 14.907 6.375 15h-5.25Q.095 14.907 0 13.875q.095-1.03 1.125-1.125H5.25V8.625q.095-1.03 1.125-1.125 1.032.095 1.125 1.125M1.125 21h5.25q1.032.094 1.125 1.125v5.25q-.093 1.032-1.125 1.125-1.03-.093-1.125-1.125V23.25H1.125Q.095 23.157 0 22.125.095 21.095 1.125 21M15.75 8.625v4.125h4.125q1.032.095 1.125 1.125-.093 1.032-1.125 1.125h-5.25q-1.03-.093-1.125-1.125v-5.25q.095-1.03 1.125-1.125 1.032.095 1.125 1.125M14.625 21h5.25q1.032.094 1.125 1.125-.093 1.032-1.125 1.125H15.75v4.125q-.093 1.032-1.125 1.125-1.03-.093-1.125-1.125v-5.25q.095-1.03 1.125-1.125' />
    </g>
    <defs>
      <clipPath id='f74eb3f4519552d6a9439f6b8ab74922__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCompressXlBoldIcon);
export default ForwardRef;
