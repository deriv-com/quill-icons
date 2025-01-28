import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMapXlRegularIcon = (
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
      <path d='M7.969 7.594a.56.56 0 0 1 .468-.047L18.704 10.5l6.75-2.719C26.156 7.5 27 8.016 27 8.813v15.703c0 .468-.281.89-.75 1.03l-7.266 2.907c-.14.094-.28.094-.468.047L8.25 25.547 1.5 28.266A1.1 1.1 0 0 1 0 27.234V11.531c0-.469.281-.89.703-1.031zM1.5 11.766v14.906l6-2.39V9.374zm16.5 15V11.859L9 9.281v14.907zm1.5-.094 6-2.39V9.374l-6 2.39z' />
    </g>
    <defs>
      <clipPath id='a04031ad4304e7e4e69a16a83ec01388__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMapXlRegularIcon);
export default ForwardRef;
