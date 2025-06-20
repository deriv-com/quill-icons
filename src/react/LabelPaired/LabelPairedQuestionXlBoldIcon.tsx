import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedQuestionXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={36}
    viewBox='0 0 15 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3 13.5a1.11 1.11 0 0 1-1.125 1.125c-.656 0-1.125-.469-1.125-1.125 0-3.281 2.672-6 5.953-5.953h1.5c3.328 0 6 2.672 6 6v.187c0 1.875-.937 3.657-2.484 4.688l-2.438 1.64c-.422.282-.656.75-.656 1.22v.093A1.11 1.11 0 0 1 7.5 22.5c-.656 0-1.125-.469-1.125-1.125v-.094c0-1.218.61-2.39 1.64-3.093l2.438-1.641A3.3 3.3 0 0 0 12 13.734V13.5a3.76 3.76 0 0 0-3.75-3.75h-1.5A3.73 3.73 0 0 0 3 13.5m4.5 15A1.48 1.48 0 0 1 6 27c0-.797.656-1.5 1.5-1.5.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5' />
    </g>
    <defs>
      <clipPath id='0101a0ec8bb91a9d508f720ba08c1fd0__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedQuestionXlBoldIcon);
export default ForwardRef;
