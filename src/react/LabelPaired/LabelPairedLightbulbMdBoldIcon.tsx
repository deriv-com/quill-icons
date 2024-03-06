import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLightbulbMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={24}
    viewBox='0 0 12 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9.281 11.781q.688-1 .719-2.281-.03-1.687-1.156-2.844Q7.687 5.531 6 5.5q-1.687.03-2.844 1.156Q2.031 7.812 2 9.5q.03 1.281.719 2.281.157.25.406.563.657.843 1.219 1.844.468.906.593 1.812h-1.53a3.6 3.6 0 0 0-.376-1.094 15 15 0 0 0-1.062-1.594l-.5-.687Q.532 11.281.5 9.5q.063-2.343 1.625-3.875Q3.656 4.063 6 4q2.344.063 3.875 1.625Q11.438 7.156 11.5 9.5q-.03 1.782-.969 3.125-.25.345-.5.656v.031q-.594.782-1.062 1.594A3.6 3.6 0 0 0 8.594 16H7.063a5.6 5.6 0 0 1 .593-1.812 18 18 0 0 1 1.25-1.844q.219-.313.375-.563M6 8a1.63 1.63 0 0 0-1.062.438A1.63 1.63 0 0 0 4.5 9.5q-.03.47-.5.5-.469-.03-.5-.5.03-1.062.719-1.781Q4.938 7.03 6 7q.47.031.5.5-.03.47-.5.5m0 12q-1.062-.03-1.781-.719-.688-.719-.719-1.781V17h5v.5q-.03 1.062-.719 1.781Q7.062 19.97 6 20' />
    </g>
    <defs>
      <clipPath id='748228665fbb9c2f7f975a66805fb8cd__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLightbulbMdBoldIcon);
export default ForwardRef;
