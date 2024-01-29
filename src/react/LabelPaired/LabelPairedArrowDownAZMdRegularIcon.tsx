import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownAZMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={24}
    viewBox='0 0 18 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m8.344 15.844-3 3q-.345.312-.688 0l-3-3q-.312-.345 0-.688.345-.312.688 0L4.5 17.281V5.5q.031-.469.5-.5.47.031.5.5v11.781l2.156-2.125q.345-.312.688 0 .312.345 0 .688M13.438 5.28l2 3.969v.031l.5 1q.187.407-.22.656-.436.189-.655-.218L14.687 10h-3.374l-.376.719q-.25.406-.656.219-.406-.219-.219-.657l.47-1h.03l2-4A.44.44 0 0 1 13 5q.312 0 .438.281M13 6.625 11.813 9h2.374zM11 13h4q.312 0 .438.281a.54.54 0 0 1-.032.531L12.031 18H15q.47.031.5.5-.03.47-.5.5h-4a.44.44 0 0 1-.437-.281.5.5 0 0 1 .062-.532L13.969 14H11q-.469-.03-.5-.5.031-.469.5-.5' />
    </g>
    <defs>
      <clipPath id='e2bf282e870705b879db1a744cec535b__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownAZMdRegularIcon);
export default ForwardRef;
