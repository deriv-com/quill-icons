import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFloppyDiskSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.25 6.375v8.75q0 .383.246.629a.85.85 0 0 0 .629.246h8.75a.85.85 0 0 0 .629-.246.85.85 0 0 0 .246-.629v-6.7a.85.85 0 0 0-.246-.628l-2.05-2.05a.75.75 0 0 0-.329-.192v2.57a.85.85 0 0 1-.246.629A.85.85 0 0 1 8.25 9H3a.85.85 0 0 1-.629-.246.85.85 0 0 1-.246-.629V5.5a.85.85 0 0 0-.629.246.85.85 0 0 0-.246.629M3 5.5v2.625h5.25V5.5zm-2.625.875q.027-.738.52-1.23.492-.493 1.23-.52h6.7q.736 0 1.257.52l2.023 2.023q.52.52.52 1.258v6.699q-.027.738-.52 1.23-.492.493-1.23.52h-8.75q-.738-.027-1.23-.52-.493-.492-.52-1.23zM7.813 12.5q-.028-.738-.657-1.148a1.4 1.4 0 0 0-1.312 0q-.63.41-.657 1.148.028.738.657 1.148.656.33 1.312 0 .63-.41.657-1.148M6.5 10.313q1.23.027 1.887 1.093.6 1.095 0 2.188-.657 1.065-1.887 1.094-1.23-.028-1.887-1.094-.6-1.095 0-2.188.657-1.065 1.887-1.094' />
    </g>
    <defs>
      <clipPath id='a41ddeb1c68a869be68d9a496772c942__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFloppyDiskSmRegularIcon);
export default ForwardRef;
