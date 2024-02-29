import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedExclamationMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={2}
    height={24}
    viewBox='0 0 2 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.75 5.75v9q-.063.687-.75.75-.687-.063-.75-.75v-9Q.313 5.063 1 5q.687.063.75.75M1 19a.97.97 0 0 1-.719-.281A.97.97 0 0 1 0 18q0-.437.281-.719A.97.97 0 0 1 1 17q.438 0 .719.281A.97.97 0 0 1 2 18a.97.97 0 0 1-.281.719A.97.97 0 0 1 1 19' />
    </g>
    <defs>
      <clipPath id='e7739b45a5b07d9207abb70d74b06c8e__a'>
        <path d='M0 0h2v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedExclamationMdBoldIcon);
export default ForwardRef;
