import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleStarMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8 5a7.2 7.2 0 0 0-3.5.938A7.2 7.2 0 0 0 1.938 8.5a7 7 0 0 0 0 7A7.2 7.2 0 0 0 4.5 18.063 7.2 7.2 0 0 0 8 19a7.2 7.2 0 0 0 3.5-.937 7.2 7.2 0 0 0 2.563-2.563 7 7 0 0 0 0-7A7.2 7.2 0 0 0 11.5 5.938 7.2 7.2 0 0 0 8 5m0 15q-2.187-.03-4-1.062Q2.188 17.875 1.063 16 0 14.095 0 12t1.063-4Q2.188 6.124 4 5.063 5.813 4.03 8 4q2.188.03 4 1.063Q13.813 6.125 14.938 8 16 9.906 16 12t-1.062 4Q13.813 17.875 12 18.938 10.188 19.968 8 20m.438-12.469 1.156 2.282 2.531.374a.56.56 0 0 1 .406.344.63.63 0 0 1-.125.531l-1.844 1.782.438 2.5a.52.52 0 0 1-.219.5.48.48 0 0 1-.5.031L8 14.688l-2.25 1.187a.54.54 0 0 1-.531-.031.52.52 0 0 1-.219-.5l.438-2.5-1.813-1.813a.46.46 0 0 1-.125-.5.49.49 0 0 1 .375-.344l2.531-.374L7.563 7.53A.44.44 0 0 1 8 7.25q.312 0 .438.281M7.188 10.5a.57.57 0 0 1-.375.281l-1.782.25 1.282 1.281q.188.188.156.438l-.313 1.781 1.594-.844a.47.47 0 0 1 .469 0l1.625.844-.313-1.781a.55.55 0 0 1 .125-.437l1.313-1.282-1.781-.25q-.282-.062-.376-.281L8 8.875z' />
    </g>
    <defs>
      <clipPath id='5df104a082e15b20__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleStarMdRegularIcon);
export default ForwardRef;
