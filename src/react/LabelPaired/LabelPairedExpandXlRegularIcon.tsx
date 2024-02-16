import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedExpandXlRegularIcon = (
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
      <path d='M6.75 7.5q.704.046.75.75-.046.703-.75.75H1.5v5.25q-.046.703-.75.75-.703-.047-.75-.75v-6q.047-.703.75-.75zM0 21.75q.047-.704.75-.75.704.046.75.75V27h5.25q.704.046.75.75-.046.704-.75.75h-6q-.703-.046-.75-.75zM20.25 7.5q.704.046.75.75v6q-.046.703-.75.75-.704-.047-.75-.75V9h-5.25q-.703-.047-.75-.75.047-.703.75-.75zm-.75 14.25q.046-.704.75-.75.704.046.75.75v6q-.046.704-.75.75h-6q-.703-.046-.75-.75.047-.704.75-.75h5.25z' />
    </g>
    <defs>
      <clipPath id='b89bda1fe94f7a36c4062ffc137f564f__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedExpandXlRegularIcon);
export default ForwardRef;
