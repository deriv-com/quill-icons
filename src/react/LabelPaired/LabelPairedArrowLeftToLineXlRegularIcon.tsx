import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowLeftToLineXlRegularIcon = (
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
      <path d='M0 26.25V9.75Q.047 9.047.75 9q.704.047.75.75v16.5q-.046.704-.75.75-.703-.046-.75-.75m4.734-8.766 6-6q.516-.468 1.032 0 .468.516 0 1.032L7.078 17.25H20.25q.704.046.75.75-.046.704-.75.75H7.078l4.688 4.734q.468.516 0 1.032-.516.468-1.032 0l-6-6q-.468-.516 0-1.032' />
    </g>
    <defs>
      <clipPath id='5e392c5872d8d31578ecaa6245aa3b98__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowLeftToLineXlRegularIcon);
export default ForwardRef;
