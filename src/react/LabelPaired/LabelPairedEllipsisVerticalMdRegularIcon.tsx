import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEllipsisVerticalMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={4}
    height={24}
    viewBox='0 0 4 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2 16q.438 0 .719.281A.97.97 0 0 1 3 17a.97.97 0 0 1-.281.719A.97.97 0 0 1 2 18a.97.97 0 0 1-.719-.281A.97.97 0 0 1 1 17q0-.437.281-.719A.97.97 0 0 1 2 16m0-5q.438 0 .719.281A.97.97 0 0 1 3 12a.97.97 0 0 1-.281.719A.97.97 0 0 1 2 13a.97.97 0 0 1-.719-.281A.97.97 0 0 1 1 12q0-.437.281-.719A.97.97 0 0 1 2 11m1-4a.97.97 0 0 1-.281.719A.97.97 0 0 1 2 8a.97.97 0 0 1-.719-.281A.97.97 0 0 1 1 7q0-.437.281-.719A.97.97 0 0 1 2 6q.438 0 .719.281A.97.97 0 0 1 3 7' />
    </g>
    <defs>
      <clipPath id='0ced0baf90669363018077a4d16efdc3__a'>
        <path d='M0 0h4v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEllipsisVerticalMdRegularIcon);
export default ForwardRef;
